import React from 'react'
import { Link } from 'react-router-dom';
// Styles
import { Container } from './styles';

const BackHome = () => {
  return (
    <Container>
      <Link to="/">Back home</Link>
    </Container>
  );
};


export default BackHome;
