import React from 'react';
import { CartContext } from "../context/CartContext";
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, deleteFromCart, addToCart } =
    React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleAddItem = (item) => {
    addToCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const freeShippingThreshold = 200;
  const progressPercentage = Math.min(
    (totalAmount / freeShippingThreshold) * 100,
    100
  );

  const createOrder = () => {

    const items = cart.map(item => {
      return{
        id: item.id,
        title : item.title,
        quantity : item.quantity,
      }
    });
    const order = {
      items : items,
    }

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order).then(({id}) => console.log(id));
  }

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
                    <button
                      className="button-animation"
                      onClick={() => handleAddItem(item)}
                    >
                      +
                    </button>
                    <button
                      className="button-animation-delete"
                      onClick={() => handleRemoveOne(item)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="button-animation-delete"
                      onClick={() => handleDeleteItem(item)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
              <div className="item-total">
                <p>Total: ${Math.round(item.price * item.quantity)}</p>
              </div>
            </div>
          ))}
          <div className="shipping-progress">
            <div
              className="progress-bar"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="shipping-message">
            {totalAmount >= freeShippingThreshold
              ? "¡Genial! Tenés envío gratis"
              : `Envío gratis superando los $${freeShippingThreshold.toFixed(
                  2
                )}`}
          </p>
          <div className="cart-summary">
            <p>Subtotal (sin envío): ${totalAmount.toFixed(2)}</p>
            <p>Total: ${totalAmount.toFixed(2)}</p>
            <Link to={'/checkout'}>Ir al pago</Link>
          </div>
        </div>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;