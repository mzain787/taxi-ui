import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./tabs.css";
import SignupForm from "../Form/SignupForm";
import * as Yup from 'yup';

const formFields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'mail' },
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
  { name: 'phoneNumber', label: 'Phone Number', type: 'phone' },
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

const formFields2 = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'mail' },
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

const formFields3 = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'mail' }
];

const formFields4 = [
  {
    name: 'Language',
    label: 'Select Language',
    type: 'select',
    options: [
      { value: 'English', label: 'English' },
      { value: 'German', label: 'German' },
      { value: 'Spanish', label: 'Spanish' },
      { value: 'Arabic', label: 'Arabic' },
    ],
    validation: Yup.string().required('Select Option is required'),
  },
  {
    name: 'Food',
    label: 'Select Food',
    type: 'select',
    options: [
      { value: 'Dum Pukht', label: 'Dum Pukht' },
      { value: 'Mandi', label: 'Mandi' },
      { value: 'Biryani', label: 'Biryani' },
    ],
    validation: Yup.string().required('Select Option is required'),
  },
  {
    name: 'Travel',
    label: 'Select Place',
    type: 'select',
    options: [
      { value: 'Maldives', label: 'Maldives' },
      { value: 'Lahore', label: 'Lahore' },
      { value: 'Karachi', label: 'Karachi' },
    ],
    validation: Yup.string().required('Select Option is required'),
  },
  {
    name: 'Profession',
    label: 'Select Profession',
    type: 'select',
    options: [
      { value: 'Doctor', label: 'Doctor' },
      { value: 'Engineer', label: 'Engineer' },
      { value: 'Other', label: 'Other' },
    ],
    validation: Yup.string().required('Select Option is required'),
  },
];

const formFields5 = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'mail' },
  { name: 'time', label: 'Time', type: 'time' },
  { name: 'date', label: 'Date', type: 'date' }
];

const handleFormSubmit1 = (formValues) => {
  console.log('Form1 values submitted:', formValues);
  alert("Form-1 Submitted Successfully 👍.")
};
const handleFormSubmit2 = (formValues) => {
  console.log('Form2 values submitted:', formValues);
  alert("Form-2 Submitted Successfully 👍.")
};
const handleFormSubmit3 = (formValues) => {
  console.log('Form3 values submitted:', formValues);
  alert("Form-3 Submitted Successfully 👍.")
};
const handleFormSubmit4 = (formValues) => {
  console.log('Form4 values submitted:', formValues);
  alert("Form-4 Submitted Successfully 👍.")
};
const handleFormSubmit5 = (formValues) => {
  console.log('Form5 values submitted:', formValues);
  alert("Form-5 Submitted Successfully 👍.")
};
const TabsComponent = () => {
  return (
    <div className="wrapper">
      <Tabs defaultIndex={0}>
        <TabList className='border-none' style={{ textAlign: "center" }}>
          <Tab>Form 1</Tab>
          <Tab>Form 2</Tab>
          <Tab>Form 3</Tab>
          <Tab>Form 4</Tab>
          <Tab>Form 5</Tab>
        </TabList>

        <TabPanel>
          <SignupForm formFields={formFields} onSubmitCallback={handleFormSubmit1} />
        </TabPanel>

        <TabPanel>
          <SignupForm formFields={formFields2} onSubmitCallback={handleFormSubmit2} />
        </TabPanel>

        <TabPanel>
          <SignupForm formFields={formFields3} onSubmitCallback={handleFormSubmit3} />
        </TabPanel>

        <TabPanel>
          <SignupForm formFields={formFields4} onSubmitCallback={handleFormSubmit4} />
        </TabPanel>

        <TabPanel>
          <SignupForm formFields={formFields5} onSubmitCallback={handleFormSubmit5} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
