import React from "react";
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
import { getProductById } from "../services/productsServices";

const ItemDetailsContainer = () => {
  const [product, setProduct] = React.useState({});

  const { id } = useParams();

  React.useEffect(() => {
    getProductById(id)
      .then((productData) => setProduct(productData))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="fs-1">$ {product.price}</ListGroup.Item>
        <ListGroup.Item>{product.category}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Body className="mt-2 container">
          <Button className="p-2 g-col-6 row" variant="success">
            Comprar ahora
          </Button>
          <Link to="#" className="row mt-2">
            <CustomButton>Ver más</CustomButton>
          </Link>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default ItemDetailsContainer;
