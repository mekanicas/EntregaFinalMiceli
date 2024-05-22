import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const CountComponent = () => {
  const [item, setItem] = React.useState(0);
  const handleButton = () => {};
  const handleRemoveButton = () => {
    setItem(item - 1);
  };
  return (
    <React.Fragment>
      <button variant="primary" onClick={handleRemoveButton}>
        -
      </button>
      <span>0</span>
      <button variant="primary" onClick={handleButton}>
        +
      </button>
    </React.Fragment>
  );
};

export default CountComponent;
