import React from "react";
import { useState, useEffect } from "react";
import { getProductById } from "../services/productsServices";

export const useProductByIdOld = (id) => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!id);
    setLoading(true);
    getProductById(id)
      .then((productData) => {
        setProduct(productData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product data: ", err);
        setError(err)
        setLoading(false);
      });
  }, [id]);

  return { product, loading, error };
};

export default useProductByIdOld;
