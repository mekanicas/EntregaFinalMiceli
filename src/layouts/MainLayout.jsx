import React from "react";
import NavBarComponent from "../components/NavBarComponents/NavBarComponent";
import FooterBarComponent from "../components/FooterBarComponents/FooterBarComponent";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBarComponent />
      {children}
      <FooterBarComponent />
    </>
  );
};

export default MainLayout;
