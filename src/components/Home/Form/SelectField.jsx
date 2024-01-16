import React from 'react';
import Select from 'react-select';

const SelectField = ({ options, id, name, onChange, placeholder, style }) => {
  return (
    <Select
      id={id}
      name={name}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      styles={style}
    />
  );
};

export default SelectField;
