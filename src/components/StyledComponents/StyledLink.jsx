import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import imagenLogo from "../NavBarComponents/NavBarImages/skull.png";

const StyledLink = styled(Link)`
  display: inline-block;
  height: 50px;
  width: 50px;
  transition: all 0.3s ease;
  margin-left : 30px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    height: 80px;
    width: 80px;
  }
`;

const LinkInicio = () => {
  return (
    <StyledLink to="/">
      <img src={imagenLogo} alt="Logo" />
    </StyledLink>
  );
};

export default LinkInicio;
