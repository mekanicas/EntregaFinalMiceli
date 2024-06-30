import React from "react";
import ProductListComponent from "../components/ProductListComponents/ProductListComponent.jsx";
import { useParams } from "react-router-dom";
import { useProductsByCategory } from "../hooks/useProductsByCategory";

const category = () => {
  const { id } = useParams();

  const { products } = useProductsByCategory(id);
  return <ProductListComponent products={products}/>
};

export default category;
