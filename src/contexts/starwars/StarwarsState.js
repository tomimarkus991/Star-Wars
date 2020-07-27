import React, { useReducer } from "react";
import StarwarsContext from "./starwarsContext";
import StarwarsReducer from "./starwarsReducer";

import { GET_PAGE } from "../types";

const StarwarsState = ({ children }) => {
  const initialState = {
    page: "planets",
  };
  const [state, dispatch] = useReducer(StarwarsReducer, initialState);
  const { page } = state;

  const getPage = (page) => {
    dispatch({ type: GET_PAGE, payload: page });
  };

  const getPlanets = async () => {
    const res = await fetch("http://swapi.dev/api/planets/");
    return res.json();
  };
  return (
    <StarwarsContext.Provider value={{ page, getPage, getPlanets }}>
      {children}
    </StarwarsContext.Provider>
  );
};

export default StarwarsState;
