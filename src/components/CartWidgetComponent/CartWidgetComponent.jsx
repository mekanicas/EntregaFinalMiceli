import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidgetComponent = () => {
  const customStyles = {
    color: "black",
    fontSize: "1.3rem",
    marginRight: "0.5rem",
  };

  const { cart } = React.useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <FontAwesomeIcon icon={faCartPlus} style={customStyles} />
        <span style={customStyles}>{totalItems}</span>
      </Link>
    </>
  );
};

export default CartWidgetComponent;
