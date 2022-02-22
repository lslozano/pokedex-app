import React, { useState } from 'react';
// Components
import Body from '../../components/Body';
import Form from '../../components/Form';
import Card from '../../components/Card';
import Message from '../../components/Message';
// Styles
import { CardsContainer } from './styles';

const Home = (props) => {
  const { pokemons, loading, error } = props;
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  if (loading) return <Message text="Loading..." />;
  if (error) return <Message text="Sorry, something went wrong =(" />;

  const renderPokemonCard = (pokemon) => {
    const { id } = pokemon;
    return (
      <Card
        key={id}
        pokemon={pokemon}
      />
    );
  }

  const renderPokemons = () => {
    if (filteredPokemons.length === 0) return <Message text="No pokemon matches this name" />;

    return filteredPokemons.map(renderPokemonCard);
  }

  return (
    <Body>
      <Form
        pokemons={pokemons}
        filteredPokemons={filteredPokemons}
        setFilteredPokemons={setFilteredPokemons}
      />
      <CardsContainer>
        {renderPokemons()}
      </CardsContainer>
    </Body>
  )
}

export default Home;