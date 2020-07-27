import React, { useContext } from "react";
import starwarsContext from "../../contexts/starwars/starwarsContext";
import Planets from "../starwars/Planets";
import People from "../starwars/People";

const Home = () => {
  const { page } = useContext(starwarsContext);
  console.log(page);
  return (
    <div>
      <h1>Star Wars Info</h1>
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
};

export default Home;
