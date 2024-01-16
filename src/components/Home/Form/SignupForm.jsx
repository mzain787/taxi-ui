import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';
import SelectField from './SelectField';

const formFields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'text' },
  { name: 'time', label: 'Time', type: 'time' },
  { name: 'date', label: 'Date', type: 'date' },
  { name: 'phoneNumber', label: 'Phone Number', type: 'text' },
  {
    name: 'selectOption',
    label: 'Select Option',
    type: 'select',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
  { name: 'password', label: 'Password', type: 'password' },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    validation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  },
];

const initialValues = {};
const validationSchema = {};

formFields.forEach((field) => {
  initialValues[field.name] = '';
  validationSchema[field.name] = Yup.string().required(`${field.label} is required`);
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
      <Form style={{maxWidth: '800px', margin: 'auto', display: 'flex', gap:'20px', flexDirection: 'row', flexWrap: 'wrap' }}>
        {formFields.map((field) => (
          <div key={field.name} style={{ marginBottom: '15px', width: 'calc(50% - 10px)' }}>
            <label htmlFor={field.name}>{field.label}:</label>
            {field.type === 'select' ? (
              <SelectField
                options={field.options}
                id={field.name}
                name={field.name}
                onChange={(selectedOption) => console.log(selectedOption)}
                placeholder={`Select ${field.label}`}
              />
            ) : (
              <InputField
                type={field.type}
                id={field.name}
                name={field.name}
                style={{ width: '100%', padding: '8px' }}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          style={{ background: 'blue', color: 'white', fontSize:"20px", padding: '10px', border: 'none', cursor: 'pointer', width: '150px', margin:'20px auto 70px auto' }}
        >
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default SignupForm;