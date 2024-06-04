import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailsContainer from "../pages/ItemDetailsContainer";
import NavBarComponent from "../components/NavBarComponents/NavBarComponent";
import FooterBarComponent from "../components/FooterBarComponents/FooterBarComponent";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home pageTitle="Inicio" />}></Route>
        <Route path="/products/:id" element={<ItemDetailsContainer />}></Route>
      </Routes>
      <FooterBarComponent />
    </BrowserRouter>
  );
};
