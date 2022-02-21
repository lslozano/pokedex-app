import React from 'react'
// Styles
import { Container, Icon } from './styles';
// Assets
import PokedexIcon from '../../assets/pokeapi.png'

const Navbar = () => {
  return (
    <Container>
      <Icon src={PokedexIcon} alt="pokedex icon"/>
    </Container>
  )
}

export default Navbar;
