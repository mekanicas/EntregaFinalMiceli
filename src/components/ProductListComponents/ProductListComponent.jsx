import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { getAllProducts } from "../../services/productsServices";
import CustomButton from "../StyledComponents/CustomButton";

const ProductsListComponent = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const customItemStyle = {
    backgroundColor: "#23262C",
    color: "white",
    padding: "10px",
    height: "600px",
    flexDirection: "column",
  };
  const customImageStyle = {
    objectFit: "contain",
    maxHeight: "200px",
    width: "100%",
    marginBottom: "10px",
  };
  const customItemText = {
    overflowY: "hidden",
    textOverFlow: "ellipsis",
    lineHeight: "1.5",
    height: "50px",
  };
  const customGroupStyle = {
    backgroundColor: "#2A2D33",
    color: "white",
    border: "none",
  };

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Row xs={1} md={3} className="g-4">
        {[...Array(9)].map((_, index) => (
          <Col key={index}>
            <Card className="mt-2" style={customItemStyle}>
              <Skeleton height={200} style={customImageStyle} />
              <Card.Body>
                <Skeleton
                  height={30}
                  baseColor="#2A2D33"
                  highlightColor="#3A3D43"
                  duration={5}
                />
                <Skeleton
                  count={3}
                  style={{ marginTop: 10 }}
                  baseColor="#2A2D33"
                  highlightColor="3A3D43"
                  duration={5}
                />
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item style={customGroupStyle}>
                  <Skeleton
                    height={20}
                    baseColor="#2A2D33"
                    highlightColor="#3A3D43"
                    duration={5}
                  />
                </ListGroup.Item>
                <ListGroup.Item className="fs-1" style={customGroupStyle}>
                  <Skeleton
                    height={40}
                    baseColor="#2A2D33"
                    highlightColor="#3A3D43"
                    duration={5}
                  />
                </ListGroup.Item>
              </ListGroup>
              <Card.Body className="mt-2">
                <Skeleton
                  height={35}
                  width={100}
                  baseColor="#2A2D33"
                  highlightColor="#3A3D43"
                  duration={5}
                />
                <Skeleton
                  height={35}
                  width={100}
                  style={{ marginLeft: "5px" }}
                  baseColor="#2A2D33"
                  highlightColor="#3A3D43"
                  duration={5}
                />
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
          <Card className="mt-2" style={customItemStyle}>
            <Card.Img
              style={customImageStyle}
              variant="top"
              src={product.image}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text style={customItemText}>
                {product.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={customGroupStyle}>
                Categoría : {product.category}
              </ListGroup.Item>
              <ListGroup.Item className="fs-1" style={customGroupStyle}>
                $ {product.price}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body className="mt-2">
              <Button variant="primary">Go somewhere</Button>
              <CustomButton className="ms-5">
                <Link to={`/item/${product.id}`}>Ir al detalle</Link>
              </CustomButton>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductsListComponent;
