import React, { useContext } from "react";
import starwarsContext from "../../contexts/starwars/starwarsContext";
import Planets from "../starwars/Planets";
import People from "../starwars/People";

const Home = () => {
  const { page } = useContext(starwarsContext);
  return (
    <div>
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
};

export default Home;
