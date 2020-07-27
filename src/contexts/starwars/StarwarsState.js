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
  return (
    <StarwarsContext.Provider value={{ page, getPage }}>
      {children}
    </StarwarsContext.Provider>
  );
};

export default StarwarsState;
