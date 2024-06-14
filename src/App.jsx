import React from "react";
import "./App.css";
import "./components/NavBarComponents/NavBarComponent.css";
import "./components/FooterBarComponents/FooterBarComponent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./routes/MainRoutes.jsx";
import MainRoutes from "./routes/MainRoutes.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const App = () => {
  return (
    <>
      <CartProvider>
        <MainRoutes />
      </CartProvider>
    </>
  );
};

export default App;
