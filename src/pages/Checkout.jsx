import React from "react";
import "./Cart.css";
import "./Checkout.css";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const Checkout = () => {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [numberPhone, setNumberPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState("Argentina");
  const [postalCode, setPostalCode] = React.useState("");

  const { cart } = React.useContext(CartContext);

  const createOrder = () => {
    const items = cart.map((item) => {
      return {
        id: item.id,
        title: item.title,
        quantity: item.quantity,
      };
    });
    const order = {
      items: items,
      buyer: {
        name,
        lastName,
        numberPhone,
        email,
        country,
        postalCode,
      },
    };

    if (
      name !== "" &&
      lastName !== "" &&
      numberPhone !== "" &&
      email !== "" &&
      postalCode !== ""
    ) {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(({ id }) => {
        Swal.fire({
          title: "Se ha creado la orden exitosamente!",
          text:
            "La orden se creó exitosamente, por cualquier consulta indiquele a soporte el siguiente código: " +
            id,
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
    } else {
      alert("Todos los campos son obligatorios");
    }
  };

  return (
    <div className="checkout-container">
      <div className="contact-details">
        <h2>Datos de contacto</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          <input type="checkbox" />
          Quiero recibir ofertas y novedades por email
        </label>
      </div>
      <div className="delivery-details">
        <h2>Entrega</h2>
        <select onChange={(e) => setCountry(e.target.value)}>
          <option value="Argentina">Argentina</option>
          <option value="Suiza">Suiza</option>
          <option value="RepublicaDominicana">Republica dominicana</option>
        </select>
        <input
          type="text"
          placeholder="Código Postal"
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </div>
      <div className="buyer-details">
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Número de Teléfono"
          onChange={(e) => setNumberPhone(e.target.value)}
        />
      </div>
      <div className="order-summary">
        <h2>Resumen del Pedido</h2>
        {cart.map((item, index) => (
          <div key={index} className="order-item">
            <span>
              {item.title} (x{item.quantity})
            </span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <div className="order-total">
          <span>Total</span>
          <span>
            ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </span>
        </div>
      </div>
      <button onClick={createOrder} className="checkout-button">
        Finalizar compra
      </button>
    </div>
  );
};

export default Checkout;