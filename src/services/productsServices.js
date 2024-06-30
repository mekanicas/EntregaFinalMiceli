import path from "../data/products.js";
import axios from "axios";

export const getAllProducts = () => {
  const list = path.map((data) => ({
    id: data.id,
    title: data.title,
    price: data.price,
    description: data.description,
    category: data.category,
    image: data.image,
  }));
  return list;
};

export const getProductById = async (id) => {
  try {
    const response = path.find((data) => data.id.toString() === id);
    return response;
  } catch (error) {
    console.error("Error fetching the single product data: ", error);
  }
};

const getData = (id) => {
  return path.find((data) => data.id.toString() === id);
};

export async function getProductsByCategory(category) {
  const allProducts = getAllProducts(); 
  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );
  return { data: filteredProducts };
}

export async function getAllCategories() {
  const allProducts = getAllProducts();
  const categories = Array.from(
    new Set(allProducts.map((product) => product.category))
  ); 
  return { data: categories }; 
}