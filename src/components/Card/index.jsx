import React from 'react';
// Components
import Button from '../Button';
// Styles
import {
  Container, ImageContainer, Image,
  TitleContainer, Text, ListContainer,
} from './styles';

const Card = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png" alt="card-img" />
      </ImageContainer>
      <TitleContainer>
        <Text>Name: Clefairy</Text>
        <Text>Number: 35</Text>
      </TitleContainer>
      <ListContainer>
        <Text>Types:</Text>
        <ul>
          <li>Fairy</li>
        </ul>
      </ListContainer>
      <Button type="button" onClick={() => console.log('Take me to details')} text="View details" />
    </Container>
  )
}

export default Card;
