import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';
import SelectField from './SelectField';

const formFields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  {
    name: 'Fruit',
    label: 'Select Fruit',
    type: 'select',
    options: [
      { value: 'banana', label: 'Banana' },
      { value: 'apple', label: 'Apple' },
      { value: 'orange', label: 'Orange' },
    ],
  },
  { name: 'date', label: 'Date', type: 'date' },
  { name: 'phoneNumber', label: 'Phone Number', type: 'text' },
  {
    name: 'Name',
    label: 'Select Option',
    type: 'select',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    validation: Yup.string().required('Select Option is required'),
  },
  { name: 'password', label: 'Password', type: 'password' },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    validation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  }
];

const initialValues = {};
const validationSchema = {};

formFields.forEach((field) => {
  initialValues[field.name] = '';
  validationSchema[field.name] = field.validation || Yup.string().required(`${field.label} is required`);
  if (field.type === 'email') {
    validationSchema[field.name] = validationSchema[field.name].email('Invalid email format');
  } else if (field.type === 'password') {
    validationSchema[field.name] = validationSchema[field.name].min(6, 'Password must be at least 6 characters');
  }
});

const SignupForm = () => {
  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
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
                  onChange={(selectedOption) => console.log(selectedOption)}
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


