import React from "react";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Views
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
