import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products : ", error);
  }
  return [];
};

/* export const deleteProductById = (id) => {
  return axios.delete(`https://fakestoreapi.com/products/${id}`);
};

export const createNewProduct = (product) => {
  return axios.post(
    "https://fakestoreapi.com/products/add",
    JSON.stringify(product),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}; */

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching the single product data : ", error);
  }
  return [];
};

export const getAllCategories = () => {
  return axios.get("https://fakestoreapi.com/products/categories");
};
