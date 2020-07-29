import React from "react";
import { Navbar as Navbar2 } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Navbar2>
      <ul>
        <Link className="navLink" to="/people">
          <li className="liEl">People</li>
        </Link>
        <Link className="navLink" to="/planets">
          <li className="liEl">Planets</li>
        </Link>
      </ul>
    </Navbar2>
  );
};

export default Navbar;
