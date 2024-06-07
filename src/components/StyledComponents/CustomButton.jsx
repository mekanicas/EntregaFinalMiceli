import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  background-color: #2a2d33;
  color: white;
  border: 1px solid white;
  border-radius: 7px;
  height: 40px;
  width: 124px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #3b3e45;
    color: #ffd700;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

export default CustomButton;
