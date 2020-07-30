import React, { useReducer, useState } from "react";
import StarwarsContext from "./starwarsContext";
import StarwarsReducer from "./starwarsReducer";

const StarwarsState = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(StarwarsReducer, initialState);
  const [planetsPage, setPlanetsPage] = useState(1);

  // Get People
  const getPeople = async () => {
    const res = await fetch(`http://swapi.dev/api/people/?page`);
    return res.json();
  };

  // Get Planets
  const getPlanets = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
  };

  const getPersonData = async (key, id) => {
    const res = await fetch(`http://swapi.dev/api/people/${id}`);
    return res.json();
  };
  return (
    <StarwarsContext.Provider
      value={{
        planetsPage,
        setPlanetsPage,
        getPlanets,
        getPeople,
        getPersonData,
      }}
    >
      {children}
    </StarwarsContext.Provider>
  );
};

export default StarwarsState;
