import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import products from "../../data/products.js";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent.jsx";
import imagenLogo from "./NavBarImages/skull.png";
import LinkInicio from "../StyledComponents/StyledLink.jsx";
import NavDropdown from "react-bootstrap/NavDropdown";
import { getAllCategories } from "../../services/productsServices.js";
import category from "../../pages/Category.jsx";

const NavBarComponent = () => {
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <nav className="navbar navbar-expand-lg">
      <LinkInicio to="/">
        <img src={imagenLogo} alt="logo" />
      </LinkInicio>
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="menu navbar-nav">
          <li className="nav-item dropdown">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {uniqueCategories.map((category) => (
                <NavDropdown.Item key={category} href={`/category/${category}`}>
                  {category}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </li>
        </ul>
      </div>
      <CartWidgetComponent />
    </nav>
  );
};

export default NavBarComponent;
