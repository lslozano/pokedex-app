import React from 'react';
// Styles
import { InputField } from './styles';

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
}

export default Input;
