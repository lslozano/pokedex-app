import React from 'react';
// Styles
import { Container, Text } from './styles';
// Validation
import { propTypes } from './types';

// This component helps to give the user feedback in different situations.
const Message = (props) => {
  const { text } = props;
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
};

Message.propTypes = propTypes;

export default Message;
