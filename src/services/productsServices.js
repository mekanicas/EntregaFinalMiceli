import path from './products.json';

export const getAllProducts = async () => {
  try {
    // No necesitas axios para archivos locales, puedes usar el import directo
    const response = path;
    return response;
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
  return [];
};

export const getProductById = async (id) => {
  try {
    // No necesitas axios para archivos locales, puedes usar el import directo
    const products = path;
    const product = products.find((prod) => prod.id === id);
    return product || null;
  } catch (error) {
    console.error("Error fetching the single product data: ", error);
  }
  return null; // Devuelve null si no se encuentra el producto
};

export const getAllCategories = async () => {
  try {
    // No necesitas axios para archivos locales, puedes usar el import directo
    const products = path;
    const categories = [...new Set(products.map((prod) => prod.category))];
    return categories;
  } catch (error) {
    console.error("Error fetching categories: ", error);
  }
  return [];
};
