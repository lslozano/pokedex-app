import React from 'react';
// Styles
import { InputField } from './styles';

const Input = () => {
  return (
    <>
      <label htmlFor="pokemon"></label>
      <InputField type="text" name="pokemon" id="pokemon" placeholder="Search for a pokemon" />
    </>
  )
}

export default Input;
