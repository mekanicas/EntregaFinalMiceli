import React from "react";
import "./App.css";
import "./components/NavBarComponents/NavBarComponent.css";
import "./components/FooterBarComponents/FooterBarComponent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./routes/MainRoutes.jsx";
import MainRoutes from "./routes/MainRoutes.jsx";

const App = () => {
  return (
    <>
      <MainRoutes />
    </>
  );
};

export default App;
