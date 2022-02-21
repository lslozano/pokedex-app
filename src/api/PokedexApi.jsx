import axios from "axios";

const PokedexApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 30000,
});

const pokemonRequest = async (id) => {
  const response = await PokedexApi.get(`/pokemon/${id}`);
  const { data } = response;
  return data;
};

export const getPokemon = async (id) => {
  const result = [];
  try {
    const data = await pokemonRequest(id);
    result.push(data);
  } catch (error) {
    console.log(error);
  }

  return result;
};

export const getPokemons = async (numberOfPokemons, startId) => {
  const result = [];
  if (startId > 898) startId = 898;
  do {
    try {
      const data = await pokemonRequest(startId);
      result.push(data);
      startId += 1;
      numberOfPokemons -= 1;
    } catch (error) {
      console.log(error);
    }
  } while (numberOfPokemons > 0 && startId <= 898);

  return result;
};