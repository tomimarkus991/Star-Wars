import React, { useReducer } from "react";
import StarwarsContext from "./starwarsContext";
import StarwarsReducer from "./starwarsReducer";

import { GET_PAGE } from "../types";

const StarwarsState = ({ children }) => {
  const initialState = {
    page: "people",
  };
  const [state, dispatch] = useReducer(StarwarsReducer, initialState);
  const { page } = state;

  // Get Page
  const getPage = (page) => {
    dispatch({ type: GET_PAGE, payload: page });
  };

  // Get Planets
  const getPlanets = async () => {
    const res = await fetch("http://swapi.dev/api/planets/");
    return res.json();
  };

  // Get People
  const getPeople = async () => {
    const res = await fetch("http://swapi.dev/api/people/");
    return res.json();
  };

  const getPersonData = async (id) => {
    const res = await fetch(`http://swapi.dev/api/people/${id}`);
    return res.json();
  };

  return (
    <StarwarsContext.Provider
      value={{ page, getPage, getPlanets, getPeople, getPersonData }}
    >
      {children}
    </StarwarsContext.Provider>
  );
};

export default StarwarsState;
