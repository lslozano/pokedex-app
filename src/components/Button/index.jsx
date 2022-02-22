import React from 'react';
// Styles
import { ButtonContainer } from './styles';

const Button = (props) => {
  const { type, onClick, text, disabled } = props;

  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonContainer>
  )
}

export default Button;