import React from "react";
import StarwarsState from "./contexts/starwars/StarwarsState";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <StarwarsState>
      <div className="App">
        <Navbar />
        <Container>
          <Home />
        </Container>
      </div>
    </StarwarsState>
  );
};

export default App;
