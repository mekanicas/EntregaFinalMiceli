/* import React, { useState, useEffect } from "react";

export const useProductById = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((productData) => {
        setProduct(productData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  return { productbyId, loading };
};
 */