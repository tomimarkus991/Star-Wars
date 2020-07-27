import React, { useContext } from "react";
import { useQuery } from "react-query";
import StarwarsContext from "../../../contexts/starwars/starwarsContext";
import Spinner from "../../layout/Spinner";
import Planet from "./Planet";

const Planets = () => {
  const { getPlanets } = useContext(StarwarsContext);
  const { data, status } = useQuery("planets", getPlanets);
  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <Spinner />}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
