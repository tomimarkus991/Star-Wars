import React, { useContext } from "react";
import { useQuery } from "react-query";
import StarwarsContext from "../../../contexts/starwars/starwarsContext";
import Spinner from "../../layout/Spinner";

const Person = ({ match }) => {
  const { getPersonData } = useContext(StarwarsContext);
  const { id } = match.params;
  const personData = useQuery(["getPersonData", `${id}`], getPersonData);

  return (
    <div className="content">
      {personData.status === "loading" && <Spinner />}
      {personData.status === "error" && "katki"}
      {personData.status === "success" && (
        <div className="card">
          <h3>{personData.data.name}</h3>
          <p>Height - {personData.data.height}</p>
          <p>Hair Color - {personData.data.hair_color}</p>
          <p>Birth Year - {personData.data.birth_year}</p>
          <p>Gender - {personData.data.gender}</p>
        </div>
      )}
    </div>
  );
};

export default Person;
