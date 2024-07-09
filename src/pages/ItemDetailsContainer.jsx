import React from "react";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ItemDetailContainer.css";
import { useProductById } from "../hooks/useProductsById.jsx";
import { useContext, useState, UseEffect } from "react";

const ItemDetailsContainer = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductById(id);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    addToCart(product, 1);
  };

  const handleRemove = () => {
    setQuantity(quantity - 1);
    removeFromCart(product, 1);
  };

  if (error) {
    return <div>Error loading product details</div>;
  }

  return (
    <div className="item-details-container">
      {loading ? (
        <Skeleton height={500} width="50%" />
      ) : (
        <div className="item-image-container">
          <img src={product.image} alt={product.title} />
        </div>
      )}
      <div className="item-info-container">
        <div>
          {loading ? (
            <>
              <Skeleton height={30} />
              <Skeleton height={20} width="80%" />
            </>
          ) : (
            <>
              <h1 className="item-title">{product.title}</h1>
              <div className="item-price">$ {product.price}</div>
              <div className="item-category">Categoría: {product.category}</div>
            </>
          )}
        </div>
        <div className="item-actions">
          {loading ? (
            <Skeleton height={40} width="100%" />
          ) : (
            <>
              <div className="quantity-selector">
                <button onClick={handleRemove} disabled={quantity <= 0}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={handleAdd}>+</button>
              </div>
            </>
          )}
        </div>
        <div className="item-description">
          {loading ? <Skeleton count={5} /> : <p>{product.description}</p>}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsContainer;