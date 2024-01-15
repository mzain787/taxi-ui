import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid phone number')
      .required('Phone number is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    // Handle signup logic here (e.g., send data to a server)
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form style={{ maxWidth: '400px', margin: 'auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" style={{ width: '100%', padding: '8px' }} />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" style={{ width: '100%', padding: '8px' }} />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <Field type="text" id="phoneNumber" name="phoneNumber" style={{ width: '100%', padding: '8px' }} />
          <ErrorMessage name="phoneNumber" component="div" style={{ color: 'red' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" style={{ width: '100%', padding: '8px' }} />
          <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <Field type="password" id="confirmPassword" name="confirmPassword" style={{ width: '100%', padding: '8px' }} />
          <ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />
        </div>

        <button type="submit" style={{ background: 'blue', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>Sign Up</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
