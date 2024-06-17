import path from './products.json';

export const getAllProducts = async () => {
  try {
    const response = path;
    return response;
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
  return [];
};

export const getProductById = async (id) => {
  try {
    const response = path.find((data) => data.id.toString() === id) 
    return response;
  } catch (error) {
    console.error("Error fetching the single product data: ", error);
  }
};

const getData = (id) => {
  return datas.find((data) => data.id.toString() === id);
};

export const getAllCategories = async () => {
  try {
    const products = path;
    const categories = [...new Set(products.map((prod) => prod.category))];
    return categories;
  } catch (error) {
    console.error("Error fetching categories: ", error);
  }
  return [];
};
