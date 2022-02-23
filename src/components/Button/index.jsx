import React from 'react';
// Styles
import { ButtonContainer } from './styles';
// Validation
import { defaultProps, propTypes } from './types';

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
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;