import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Input from '../Input';
import Button from '../Button';
// Styles
import { Container, ButtonsContainer } from './styles';


const Form = (props) => {
  const { pokemons, filteredPokemons, setFilteredPokemons } = props;
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { data: inputDataReceived } = e.nativeEvent;;
    const { value } = e.target;

    setValue(value.toLowerCase());

    if (value === '') return setFilteredPokemons(pokemons);
    if (inputDataReceived === null) {
      return setFilteredPokemons(pokemons);
    }

    const pokemonSearch = filteredPokemons.filter(pokemon => pokemon.name.indexOf(value) === 0);
    return setFilteredPokemons(pokemonSearch);
  }

  const cancelSearch = () => {
    setValue('');
    return setFilteredPokemons(pokemons);
  }

  const handleSubmit = (e) => {
    navigate(`/pokemon/${value}`);
    setValue('');
    e.preventDefault();
  }

  const isButtonDisabled = value === '';

  return (
    <Container onSubmit={handleSubmit}>
      <Input value={value} onChange={handleChange} />
      <ButtonsContainer>
        <Button type="button" onClick={cancelSearch} text="Cancel search" />
        <Button type="submit" text="Catch it!" disabled={isButtonDisabled} />
      </ButtonsContainer>
    </Container>
  )
}

export default Form;
