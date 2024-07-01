import React from "react";
import { useState, useEffect } from "react";
import { getAllProducts } from "../services/productsServices.js";
import { getProductsByCategory } from "../services/productsServices.js";

export const useProductsByCategoryNashe = (category) => {
  const [products, setProducts] = React.useState([]);
  const [sexo, setSexo] = useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      let fetchedProducts;
      if (category) {
        fetchedProducts = await (getProductsByCategory(category));
      } else {
        fetchedProducts = await (getAllProducts());
      }
      setSexo(fetchedProducts || []);
    };
    fetchProducts();
  }, [category]);


  return { sexo };
};

export default useProductsByCategoryNashe;
