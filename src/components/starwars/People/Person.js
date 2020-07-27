import React from "react";

const Person = ({ person }) => {
  const { name, height, hair_color, birth_year, gender } = person;
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Height - {height}</p>
      <p>Hair Color - {hair_color}</p>
      <p>Birth Year - {birth_year}</p>
      <p>Gender - {gender}</p>
    </div>
  );
};

export default Person;
