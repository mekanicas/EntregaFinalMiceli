import React, { useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";
import ProductsListComponent from "../components/ProductListComponents/ProductListComponent";

const Home = ({ pageTitle }) => {
  useEffect(() => {
    document.title = `Inicio - ${pageTitle}`;
  }, []);
  return (
    <>
      <ItemListContainer greeting="Bienvenido a Skull Clothing 💀" />
      <ProductsListComponent />
    </>
  );
};

export default Home;
