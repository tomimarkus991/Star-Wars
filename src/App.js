import React, { Fragment } from "react";
import StarwarsState from "./contexts/starwars/StarwarsState";
import Navbar from "./components/layout/Navbar";
import { Container } from "react-bootstrap";
import { ReactQueryDevtools } from "react-query-devtools";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Person from "./components/starwars/People/Person";
import NotFound from "./components/layout/NotFound";
import People from "./components/starwars/People/People";
import Planets from "./components/starwars/Planets/Planets";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <StarwarsState>
          <div className="App">
            <Container>
              <h1>Star Wars Info</h1>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/people" component={People} />
                <Route exact path="/planets" component={Planets} />
                <Route exact path="/person/:id" component={Person} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </div>
        </StarwarsState>
        <ReactQueryDevtools />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
