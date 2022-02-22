import React from 'react';
// Styles
import { Container, Text } from './styles';

// This component helps to give the user feedback in different situations.
const Message = (props) => {
  const { text } = props;
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}

export default Message;
