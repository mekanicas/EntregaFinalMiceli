import React from "react";
import "./App.css";
import "./components/NavBarComponents/NavBarComponent.css";
import "./components/FooterBarComponents/FooterBarComponent.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./layouts/MainLayout.jsx";
import FooterBarComponent from "./components/FooterBarComponents/FooterBarComponent.jsx";
import ProductListComponent from "./components/ProductListComponents/ProductListComponent.jsx";

const App = () => {
  return (
    <MainLayout>
      <div className="contrast d-flex justify-content-center">
        <ItemListContainer greeting="Bienvenido a Skull Clothing 💀" />
      </div>
      <div>
        <ProductListComponent />
      </div>
    </MainLayout>
  );
};

export default App;
