import React from "react";
import { collection, getDocs, getFirestore } from 
"firebase/firestore";

export const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => {
        console.error("Error al obtener productos de Firestore: ", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export default useProducts;