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
import products from "../../data/products.js";
import useProductsByCategoryNashe from "../../hooks/useProductsByCategory.jsx";

const ProductsListComponent = () => {
  const [loading, setLoading] = useState(false);
  /* const { products, loading, error } = useProductsOld(); */
  const { category } = useParams();
  const { sexo:tantrico } = useProductsByCategoryNashe(category);
  console.log(tantrico)
  useEffect(() => {if(tantrico.length > 0 ){
    setLoading(true)

    }else{
      setLoading(false)
    }
  }  , [tantrico])

  if (loading) {
    return (
      <Row xs={1} md={3} className="g-4">
        {tantrico.map((product) => (
          <Col key={product.id}>
            <Card className="product-card">
              <Card.Img
                className="product-image"
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title className="product-title">
                  {product.title}
                </Card.Title>
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
  }
  
  

  /*   if (loading) {
  return (
    <Row xs={1} md={3} className="g-4">
      {filteredProducts.map((product) => (
        <Col key={product.id}>
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
  } */

  
};

export default ProductsListComponent;
