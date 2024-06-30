import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductListComponents.css";
import "../../hooks/useProductsOld.jsx";
import CustomButton from "../StyledComponents/CustomButton";
import useProductsOld from "../../hooks/useProductsOld.jsx";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../services/productsServices.js";
import { getAll } from "firebase/remote-config";
import { useState, useEffect } from "react";
import products from "../../data/products.js"

const ProductsListComponent = () => {
  const [items, setItems] = useState([]);
  const [titulo, setTitulo] = useState("");
  const { products, loading, error } = useProductsOld();
  const { categoria } = useParams();

  useEffect(() => {
    if (categoria) {
      setItems(getAllProducts().filter((item) => item.category === categoria));
      setTitulo(categoria);
    } else {
      setItems(getAllProducts());
      setTitulo("Productos");
    }
  }, [categoria]);

  if (loading) {
    return (
      <Row xs={1} md={3} className="g-4">
        {[...Array(9)].map((_, index) => (
          <Col key={index}>
            <Card className="product-card">
              <Skeleton height={300} className="product-image" />
              <Card.Body>
                <Skeleton height={30} />
                <Skeleton count={3} style={{ marginTop: 10 }} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <Row xs={1} md={3} className="g-4">
      {products.map((product) => (
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
            <div className="product-category">
              Categoría: {product.category}
            </div>
            <div className="product-price">$ {product.price}</div>
            <div className="product-actions">
              <Button variant="btn btn-warning">Comprar ahora</Button>
              <CustomButton>
                <Link to={`/item/${product.id}`}>Ir al detalle</Link>
              </CustomButton>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductsListComponent;
