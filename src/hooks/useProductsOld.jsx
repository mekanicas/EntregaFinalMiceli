import React from 'react'
import {useState, useEffect} from 'react'
import {getAllProducts} from '../services/productsServices.js'

const useProductsOld = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProducts();
                setProducts(response);
            } catch (err) {
                setError(err);
            }finally{
                setLoading(false);
            }
        };
        fetchProducts();
    }, [])

    return {products, loading, error}
};

export default useProductsOld;