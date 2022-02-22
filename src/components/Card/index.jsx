import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={`/pokemon/${name}`}>
        <Button type="button" text="View details" />
      </Link>
    </Container>
  )
}

export default Card;
