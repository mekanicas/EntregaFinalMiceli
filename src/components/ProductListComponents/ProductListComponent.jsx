import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import { getAllProducts } from "../../services/productsServices";

const ProductsListComponent = () => {
  const [products, setProducts] = React.useState([]);
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

  /*   const deleteProduct = (id) => {
    deleteProductById(id)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const createNewProduct = () => {
    const newProduct = {
      title: "Nuevo Producto",
    };
    createProduct(newProduct)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }; */

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <Row xs={1} md={3} className="g-4">
      {" "}
      {products.map((product, index) => (
        <Col key={product.id}>
          {" "}
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
              {/* <Link to={`/item/${product.id}`}>Ir al detalle</Link> */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default ProductsListComponent;
