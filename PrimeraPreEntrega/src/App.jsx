/*
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import React from "react";
import { useState } from "react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponents/ButtonComponent";
import NavBarComponent from "./components/NavBarComponents/NavBarComponent.jsx";
import "./components/NavBarComponents/NavBarComponent.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
/* import ".components/ItemListContainer.css"; */

const App = () => {
  return (
    <>
      <header>
        <NavBarComponent />
      </header>
      <div className="contrast d-flex justify-content-center">
        <ItemListContainer greeting="Hola!" />
      </div>
    </>
  );
};

export default App;
