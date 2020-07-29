import React, { useContext } from "react";
import { useQuery } from "react-query";
import StarwarsContext from "../../../contexts/starwars/starwarsContext";
import Spinner from "../../layout/Spinner";
import PersonItem from "./PersonItem";

const People = () => {
  const { getPeople } = useContext(StarwarsContext);
  const { data, status } = useQuery("people", getPeople);
  return (
    <div className="content">
      <h2>People</h2>
      {status === "loading" && <Spinner />}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <PersonItem key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
