import React, { useContext } from "react";
import { Navbar as Navbar2, Button } from "react-bootstrap";
import starwarsContext from "../../contexts/starwars/starwarsContext";

const Navbar = () => {
  const { getPage } = useContext(starwarsContext);
  return (
    <Navbar2>
      <Button onClick={(e) => getPage(e.target.value)} value="people">
        People
      </Button>
      <Button onClick={(e) => getPage(e.target.value)} value="planets">
        Planets
      </Button>
    </Navbar2>
  );
};

export default Navbar;
