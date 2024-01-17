import React from 'react';
import { Field, useField } from 'formik';
import Select from 'react-select';

const SelectField = ({ options, id, name, onChange, placeholder, style }) => {
  const [field, , helpers] = useField({ name, id });

  return (
    <Field name={name} id={id}>
      {({ field }) => (
        <Select
          {...field}
          options={options}
          onChange={(selectedOption) => {
            helpers.setValue(selectedOption ? selectedOption.value : '');
            if (onChange) {
              onChange(selectedOption);
            }
          }}
          placeholder={placeholder}
          styles={style}
          value={options.find((option) => option.value === field.value)}
        />
      )}
    </Field>
  );
};

export default SelectField;
