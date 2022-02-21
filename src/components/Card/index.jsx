import React from 'react';
// Components
import Button from '../Button';
// Styles
import {
  Container, ImageContainer, Image,
  TitleContainer, Text, ListContainer,
} from './styles';

const Card = (props) => {
  const { id, name, image, types } = props;

  const renderTypes = (pokemonType) => {
    const { type: { name } } = pokemonType;
    return (
      <li key={`${id}-${name}`}>{name}</li>
    )
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt="card-img" />
      </ImageContainer>
      <TitleContainer>
        <Text>Name: {name}</Text>
        <Text>Number: {id}</Text>
      </TitleContainer>
      <ListContainer>
        <Text>Types:</Text>
        <ul>
          {types.map(renderTypes)}
        </ul>
      </ListContainer>
      <Button type="button" onClick={() => console.log('Take me to details')} text="View details" />
    </Container>
  )
}

export default Card;
