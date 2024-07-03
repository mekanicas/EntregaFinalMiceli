import React from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const useProductById = (id) => {
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const productRef = doc(db, "products", id);

      try {
        const snapshot = await getDoc(productRef);
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};

export default useProductById;