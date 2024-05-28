import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getAllProducts } from "../../services/productsServices";

const ProductsListComponent = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        {products.map((product) => (
          <Card key={product.id} className="mt-2" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary">Ir a detalle</Button>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  );
};
export default ProductsListComponent;
