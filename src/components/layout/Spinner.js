import React, { Fragment } from "react";
import spinner from "./spinner.svg";
import { Image } from "react-bootstrap";

const Spinner = () => {
  return (
    <Fragment>
      <Image src={spinner} alt="Loading..." className="spinner"></Image>
    </Fragment>
  );
};

export default Spinner;
