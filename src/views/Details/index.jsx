import React from 'react'
import { useParams } from 'react-router-dom';
// Components
import BackHome from '../../components/BackHome';
import Body from '../../components/Body';
import Card from '../../components/Card';

const Details = (props) => {
  const { pokemons } = props;
  const params  = useParams();
  const { name: pokemonName } = params;

  const selectedPokemon = pokemons.filter(pokemon => pokemon.name === pokemonName);
  const [pokemon] = selectedPokemon;
  const { id } = pokemon;

  return (
    <Body>
      <BackHome />
      <Card
        key={id}
        id={id}
        pokemon={pokemon}
      />
    </Body>
  )
}

export default Details;
