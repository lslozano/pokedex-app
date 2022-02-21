import React from 'react';
// Components
import Input from '../Input';
import Button from '../Button';
// Styles
import { Container, ButtonsContainer } from './styles';


const Form = () => {
  const handleSubmit = (e) => {
    console.log('Submit');
    e.preventDefault();
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input />
      <ButtonsContainer>
        <Button type="button" onClick={() => console.log('Cancel search')} text="Cancel search" />
        <Button type="submit" onClick={() => console.log('Catch it!')} text="Catch it!" />
      </ButtonsContainer>
    </Container>
  )
}

export default Form;
