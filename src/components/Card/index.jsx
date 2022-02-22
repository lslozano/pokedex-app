import React from 'react';
import { Link, useParams } from 'react-router-dom';
// Components
import Button from '../Button';
// Styles
import {
  Container, ImageContainer, Image,
  TitleContainer, Text,  DetailsContainer,
  Stats, Measurements, ListContainer,
} from './styles';

const Card = (props) => {
  const { id, name, sprites, types, stats, weight, height } = props.pokemon;
  const { front_default: image } = sprites.other['official-artwork'];
  const params = useParams();
  const { name: pokemonName } = params;

  const renderTypes = (pokemonType) => {
    const { type: { name } } = pokemonType;
    return (
      <li key={`${id}-${name}`}>{name}</li>
    )
  };

  const renderDetails = () => {
    if (pokemonName) {
      const hp = stats[0].base_stat;
      const attack = stats[1].base_stat;
      const defense = stats[2].base_stat;

      return (
        <DetailsContainer>
          <Stats>
            <Text>hp: {hp}</Text>
            <Text>attack: {attack}</Text>
            <Text>defense: {defense}</Text>
          </Stats>
          <Measurements>
            <Text>weight: {weight}</Text>
            <Text>height: {height}</Text>
          </Measurements>
        </DetailsContainer>
      )
    }

    return null;
  };

  const renderViewDetailsButton = () => {
    if (pokemonName === undefined) {
      return (
        <Link to={`/pokemon/${name}`}>
          <Button type="button" text="View details" />
        </Link>
      );
    }

    return null;
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt="card-img" />
      </ImageContainer>
      <TitleContainer>
        <Text>Name: {name}</Text>
        <Text>Number: {id}</Text>
      </TitleContainer>
      {renderDetails()}
      <ListContainer>
        <Text>Types:</Text>
        <ul>
          {types.map(renderTypes)}
        </ul>
      </ListContainer>
      {renderViewDetailsButton()}
    </Container>
  )
}

export default Card;
