import React, { useState, useEffect,} from "react";
// API
import { getPokemon } from "./api/PokedexApi";
// Hook
import useLocalStorage from "./Hooks/useLocalStorage";
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

  useEffect(() => {
    getPokemon()
      .then(response => {
        setLoading(true);
        if (response.data) {
          const { results } = response.data;
          setPokemons(results);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer>
      <Navbar />
      <Home />
      <Footer />
    </MainContainer>
  );
}

export default App;
