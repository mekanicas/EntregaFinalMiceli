import React from "react";
import "./App.css";
import "./components/NavBarComponents/NavBarComponent.css";
import "./components/FooterBarComponents/FooterBarComponent.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductListComponent from "./components/ProductListComponents/ProductListComponent.jsx";
import "./routes/MainRoutes.jsx";

const App = () => {
  return (
    <>
      <div className="contrast d-flex justify-content-center">
        <ItemListContainer greeting="Bienvenido a Skull Clothing 💀" />
      </div>
      <div>
        <ProductListComponent />
      </div>
    </>
  );
};

export default App;
