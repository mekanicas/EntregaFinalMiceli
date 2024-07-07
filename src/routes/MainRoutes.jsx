import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetailsContainer from "../pages/ItemDetailsContainer";
import NavBarComponent from "../components/NavBarComponents/NavBarComponent";
import Category from "../pages/Category";
import FooterBarComponent from "../components/FooterBarComponents/FooterBarComponent";
import Cart from "../pages/Cart.jsx";
import Checkout  from "../pages/Checkout.jsx";

export const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home pageTitle="Productos" />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="item/:id" element={<ItemDetailsContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <FooterBarComponent />
    </Router>
  );
};

export default MainRoutes;
