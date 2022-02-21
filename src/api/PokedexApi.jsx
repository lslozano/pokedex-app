import axios from "axios";

const PokedexApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 30000,
});

export const getPokemon = async () => {
  try {
    const response = await PokedexApi.get('/pokemon/?limit=50');
    return response;
  } catch (error) {
    console.log(error);
  }
};