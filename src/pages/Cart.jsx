import React from 'react';
import { CartContext } from "../context/CartContext";
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, deleteFromCart } =
    React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-details">
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="item-price">Precio unitario: ${item.price}</p>
                  <div className="item-quantity">
                    <button onClick={() => handleRemoveOne(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleDeleteItem(item)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
              <div className="item-total">
                <p>Total: ${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>
              Subtotal: $
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
            <p>Envío gratis superando los $200</p>
            <p>
              Total: $
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
            <p>
              O hasta 9 cuotas de $
              {(
                cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                ) / 9
              ).toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;