import React, { useState, useEffect } from "react";
import ProductListComponent from "../components/ProductListComponents/ProductListComponent.jsx";
import { useParams } from "react-router-dom";
import useProductsByCategoryNashe from "../hooks/useProductsByCategory.jsx";
import { getAllProducts } from "../services/productsServices.js";

const category = () => {
  const itemss = getAllProducts()

  return <ProductListComponent products={itemss} />;
};

export default category;
