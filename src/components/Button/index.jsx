import React from 'react';
// Styles
import { ButtonContainer } from './styles';

const Button = (props) => {
  const { type, onClick, text } = props;

  return (
    <ButtonContainer type={type} onClick={onClick}>{text}</ButtonContainer>
  )
}

export default Button;