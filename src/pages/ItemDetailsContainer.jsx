import React from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import CustomButton from "../components/StyledComponents/CustomButton";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProductById } from "../services/productsServices.js";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ItemDetailContainer.css";

const ItemDetailsContainer = () => {
  const { cart, addToCart, removeFromCart } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(0);
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    addToCart(product, 1);
  };

  const handleRemove = () => {
    setQuantity(quantity - 1);
    removeFromCart(product, 1);
  };

  const { id } = useParams();

  React.useEffect(() => {
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
              <CustomButton className="custom-button">
                Agregar al carrito
              </CustomButton>
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