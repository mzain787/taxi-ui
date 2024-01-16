// InputField.js
import React from 'react';
import {Field} from 'formik';

const InputField = ({ type, id, name ,style}) => {
  return (
    <>
      <Field type={type} id={id} name={name} style={style}/>
    </>
  );
};

export default InputField;
