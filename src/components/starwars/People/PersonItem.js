import React from "react";
import { Link } from "react-router-dom";

const PersonItem = ({ person }) => {
  const { name, url } = person;
  const regex = /([0-9]{1,2})/g;
  const id = url.match(regex);
  return (
    <Link className="personLink" to={`/person/${id}`}>
      <div className="card personName">{name}</div>
    </Link>
  );
};

export default PersonItem;
