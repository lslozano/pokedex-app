import React from 'react'
import { Link } from 'react-router-dom';
// Styles
import { Container, Icon } from './styles';
// Assets
import PokedexIcon from '../../assets/pokeapi.png'

const Navbar = () => {
  return (
    <Container>
      <Link to="/">
        <Icon src={PokedexIcon} alt="pokedex icon"/>
      </Link>
    </Container>
  )
}

export default Navbar;
