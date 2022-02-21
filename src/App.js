import React, { useState, useEffect,} from "react";
// Hooks
import useLocalStorage from './Hooks/useLocalStorage';
// API
import { getPokemons } from "./api/PokedexApi";
// Styles
import { MainContainer } from "./styles";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Views
import Home from "./views/Home";

const App = () => {
  const [pokemons, setPokemons] = useLocalStorage('pokemons', []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchPokemons = (numberOfPokemons = 1, startId = 1) => {
    setLoading(true);
    setError(false);

    getPokemons(numberOfPokemons, startId)
      .then(response => {
        if (response) {
          setPokemons(response);
        }
      })
      .catch(error => {
        console.log(error);
        setError(true);
      })
      .finally(() => setLoading(false))
  };

  useEffect(() => {
    fetchPokemons(20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer>
      <Navbar />
      <Home pokemons={pokemons} loading={loading} error={error} />
      <Footer />
    </MainContainer>
  );
}

export default App;
