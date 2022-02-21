import React from "react";
// Styles
import { MainContainer } from "./styles";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Views
import Home from "./views/Home";

const App = () => {
  return (
    <MainContainer>
      <Navbar />
      <Home />
      <Footer />
    </MainContainer>
  );
}

export default App;
