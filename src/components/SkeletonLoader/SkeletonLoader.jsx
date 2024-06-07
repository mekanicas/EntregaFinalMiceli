import React, { useEffect, useState } from "react";
import { getAllProducts } from "./productServices";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} height={100} style={{ marginBottom: 10 }} />
          ))}
        </div>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
