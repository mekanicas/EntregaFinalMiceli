import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

const CartWidgetComponent = () => {
  const customStyles = {
    color: "white",
    fontSize: "1.3rem",
    marginRight: "0.5rem",
  };

  const { cart } = React.useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <FontAwesomeIcon icon={faCartPlus} style={customStyles} />
      <span style={customStyles}>{totalItems}</span>
    </>
  );
};

export default CartWidgetComponent;
