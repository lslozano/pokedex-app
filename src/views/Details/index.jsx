import React from 'react'
import { useParams } from 'react-router-dom';
// Components
import BackHome from '../../components/BackHome';
import Body from '../../components/Body';
import Card from '../../components/Card';
import Message from '../../components/Message';
// Styles
import { DetailContainer } from './styles';

const Details = (props) => {
  const { pokemons } = props;
  const params  = useParams();
  const { name: pokemonName } = params;

  const selectedPokemon = pokemons.filter(pokemon => pokemon.name === pokemonName);

  if (selectedPokemon.length === 0) {
    return (
      <Body>
        <BackHome />
        <Message text="Pokemon not registered in pokedex" />
      </Body>
    )
  };

  const [pokemon] = selectedPokemon;
  const { id } = pokemon;

  return (
    <Body>
      <BackHome />
      <DetailContainer>
        <Card
          key={id}
          id={id}
          pokemon={pokemon}
        />
      </DetailContainer>
    </Body>
  )
}

export default Details;
