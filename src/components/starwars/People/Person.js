import React, { useContext } from "react";
import { useQuery } from "react-query";
import StarwarsContext from "../../../contexts/starwars/starwarsContext";
import Spinner from "../../layout/Spinner";

const Person = ({ match }) => {
  const { getPersonData } = useContext(StarwarsContext);
  const { id } = match.params;
  const { data, status } = useQuery("getPersonData", () => getPersonData(id));

  return (
    <div className="content">
      {status === "loading" && <Spinner />}
      {status === "error" && "katki"}
      {status === "success" && (
        <div className="card">
          <h3>{data.name}</h3>
          <p>Height - {data.height}</p>
          <p>Hair Color - {data.hair_color}</p>
          <p>Birth Year - {data.birth_year}</p>
          <p>Gender - {data.gender}</p>
        </div>
      )}
    </div>
  );
};

export default Person;
