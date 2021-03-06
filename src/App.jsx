import React, { useState, useEffect,} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Hooks
import useLocalStorage from './Hooks/useLocalStorage';
// API
import { getPokemons } from './api/PokedexApi';
// Styles
import { MainContainer } from './styles';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Message from './components/Message';
// Views
import Home from './views/Home';
import Details from './views/Details';
import NotFound from './views/NotFound';

const App = () => {
  const [pokemons, setPokemons] = useLocalStorage('pokemons', []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPokemons = (numberOfPokemons = 1, startId = 1) => {
    setLoading(true);

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
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={loading ? <Message text="Loading..." /> : <Home pokemons={pokemons} error={error} />} />
          <Route path="/pokemon/:name" element={<Details pokemons={pokemons} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </MainContainer>
  );
}

export default App;
