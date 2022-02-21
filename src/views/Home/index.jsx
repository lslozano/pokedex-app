import React from 'react';
// Components
import Body from '../../components/Body';
import Form from '../../components/Form';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Home = (props) => {
  const { pokemons, loading, error } = props;

  if (loading) return <Loading />;
  if (error) return <Error />;

  const renderPokemonCard = (pokemon) => {
    const { id, name, sprites, types } = pokemon;
    const { front_default: image } = sprites.other['official-artwork'];
    return (
      <Card
        key={id}
        id={id}
        name={name}
        image={image}
        types={types}
      />
    );
  }

  return (
    <Body>
      <Form />
      {pokemons.map(renderPokemonCard)}
    </Body>
  )
}

export default Home;