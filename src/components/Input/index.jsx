import React from 'react';
// Styles
import { InputField } from './styles';
// Validation
import { propTypes } from './types';

const Input = (props) => {
  const { value, onChange } = props;

  return (
    <>
      <label htmlFor="pokemon"></label>
      <InputField
        type="text"
        name="pokemon"
        id="pokemon"
        value={value}
        placeholder="Search for a pokemon"
        onChange={(e) => onChange(e)}
      />
    </>
  )
};

Input.propTypes = propTypes;

export default Input;
