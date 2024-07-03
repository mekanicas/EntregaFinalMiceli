import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductListComponents.css";
import CustomButton from "../StyledComponents/CustomButton";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../services/productsServices.js";
import { getAll } from "firebase/remote-config";
import { useState, useEffect } from "react";
import useProducts from "../../hooks/useProducts.jsx"
import "../../hooks/useProducts.jsx";


const ProductsListComponent = () => {
  const { products, loading, error } = useProducts();
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      setItems(products.filter((item) => item.category === category));
    } else {
      setItems(products);
    }
  }, [category, products]);

  if (error) {
    return <div>Error al obtener productos: {error.message}</div>;
  }

  return (
    <Row xs={1} md={3} className="g-4">
      {loading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <Col key={index}>
            <Skeleton height={300} />
          </Col>
        ))
      ) : (
        items.map((product) => (
          <Col key={product.id}>
            <Card className="product-card">
              <Card.Img
                className="product-image"
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title className="product-title">{product.title}</Card.Title>
                <Card.Text className="product-description">
                  {product.description}
                </Card.Text>
              </Card.Body>
              <div className="product-category">Categoría: {product.category}</div>
              <div className="product-price">$ {product.price}</div>
              <div className="product-actions">
                <Button variant="btn btn-warning">Comprar ahora</Button>
                <CustomButton>
                  <Link to={`/item/${product.id}`}>Ir al detalle</Link>
                </CustomButton>
              </div>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
};

export default ProductsListComponent;