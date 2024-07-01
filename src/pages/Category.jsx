import React from "react";
import ProductListComponent from "../components/ProductListComponents/ProductListComponent.jsx";
import { useParams } from "react-router-dom";
import useProductsByCategoryNashe from "../hooks/useProductsByCategory.jsx";

const category = () => {
  const { category } = useParams();
  console.log(category);
  const { products } = useProductsByCategoryNashe(category);
  return <ProductListComponent products={products}/>
};

export default category;
