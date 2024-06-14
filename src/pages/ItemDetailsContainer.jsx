import React from "react";
import {CartContext} from "../context/CartContext"
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
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ItemDetailsContainer = () => {
  const {cart, addToCart, removeFromCart} = React.useContext (CartContext);
  const [quantity, setQuantity] = React.useState(0)
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const handleAdd = () => {
    setQuantity(quantity + 1)
    addToCart(product, 1)
  }

  const handleRemove = () => {
    setQuantity(quantity - 1)
    removeFromCart(product, 1)
  }

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
    <Row xs={1} md={3} className="g-4">
      <Col key={product ? product.id : "skeleton"}>
        <Card style={{ width: "18rem" }}>
          {loading ? (
            <Skeleton height={180} />
          ) : (
            <Card.Img variant="top" src={product.image} />
          )}
          <Card.Body>
            {loading ? (
              <>
                <Skeleton
                  height={30}
                  baseColor="#2A2D33"
                  highlightColor="#3A3D43"
                  duration={5}
                />
                <Skeleton
                  count={3}
                  baseColor="#2A2D33"
                  highlightColor="#3A3D43"
                  duration={5}
                />
              </>
            ) : (
              <>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </>
            )}
          </Card.Body>
          <ListGroup className="list-group-flush">
            {loading ? (
              <>
                <ListGroup.Item>
                  <Skeleton
                    height={30}
                    baseColor="#2A2D33"
                    highlightColor="#3A3D43"
                    duration={5}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <Skeleton
                    height={30}
                    baseColor="#2A2D33"
                    highlightColor="#3A3D43"
                    duration={5}
                  />
                </ListGroup.Item>
              </>
            ) : (
              <>
                <ListGroup.Item className="fs-1">
                  $ {product.price}
                </ListGroup.Item>
                <ListGroup.Item>{product.category}</ListGroup.Item>
              </>
            )}
          </ListGroup>
          <Card.Body className="mt-2 container">
            {loading ? (
              <Skeleton
                height={40}
                width="100%"
                baseColor="#2A2D33"
                highlightColor="#3A3D43"
                duration={5}
              />
            ) : (
              <>
                <Button className="p-2 g-col-6 row" variant="success">
                  Comprar ahora
                </Button>
                <Link to="#" className="row mt-2">
                  <CustomButton>Ver más</CustomButton>
                </Link>
              </>
            )}
          </Card.Body>
          <Card.Body className="mt-2 container">
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={handleRemove}
                style={{ color: "black", cursor: "pointer" }}
              >
                -
              </button>
              <span style={{ margin: "0 10px" }}>{quantity}</span>
              <button
                onClick={handleAdd}
                style={{ color: "black", cursor: "pointer" }}
              >
                +
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemDetailsContainer;
