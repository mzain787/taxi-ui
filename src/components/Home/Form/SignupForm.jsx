import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';
import SelectField from './SelectField';
const SignupForm = ({ formFields, onSubmitCallback }) => {
  const generateInitialValuesAndSchema = () => {
    const initialValues = {};
    const validationSchema = {};

    formFields.forEach((field) => {
      initialValues[field.name] = '';
      validationSchema[field.name] = field.validation || Yup.string().required(`${field.label} is required`);
    
      if (field.type === 'mail') {
        validationSchema[field.name] = validationSchema[field.name]
          .email('Invalid email format')
          .required('Email is required');
      }
      if (field.name.toLowerCase() === 'name') {
        validationSchema[field.name] = validationSchema[field.name]
          .matches(/^[A-Za-z ]*$/, 'Name should only contain letters and spaces')
          .required('Name is required');
      }
    
      if (field.type === 'password') {
        validationSchema[field.name] = validationSchema[field.name]
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required');
      }
      if (field.type === 'phone') {
        validationSchema[field.name] = validationSchema[field.name]
          .matches(/^[0-9]{10}$/, 'Invalid phone number')
          .required('Phone number is required');
      }
    });
    

    return { initialValues, validationSchema };
  };

  const { initialValues, validationSchema } = generateInitialValuesAndSchema();

  const onSubmit = (values, { setSubmitting }) => {
    if (onSubmitCallback) {
      onSubmitCallback(values);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape(validationSchema)}
      onSubmit={onSubmit}
    >
      <Form style={{ width: '90%', margin: 'auto', display: 'flex', gap: '20px', flexDirection: 'row', flexWrap: 'wrap' }}>
        {formFields.map((field) => (
          <div key={field.name} style={{ marginBottom: '15px', width: 'calc(50% - 10px)' }}>
            <label htmlFor={field.name}>{field.label}:</label>
            {field.type === 'select' ? (
              <div>
                <SelectField
                  options={field.options}
                  id={field.name}
                  name={field.name}
                  placeholder={field.label}
                />
                <ErrorMessage name={field.name} component="div" style={{ color: 'red' }} />
              </div>
            ) : (
              <div>
                <Field
                  as={InputField}
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  style={{ width: '100%', padding: '8px' }}
                />
                <ErrorMessage name={field.name} component="div" style={{ color: 'red' }} />
              </div>
            )}
          </div>
        ))}

        <button
          type="submit"
          style={{ background: 'blue', color: 'white', fontSize: '20px', padding: '10px', border: 'none', cursor: 'pointer', width: '150px', margin: '20px auto 20px auto' }}
        >
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
