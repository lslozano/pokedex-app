import React from 'react';
// Styles
import { Container } from './styles';

const Body = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Body;