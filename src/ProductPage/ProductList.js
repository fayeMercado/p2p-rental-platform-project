import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../dataProduct";
import { useParams } from "react-router-dom";

export function ProductList() {
  let products = getProducts();
  const [filtered, setFiltered] = useState([]);
  const urlparams = useParams().category;
  useEffect(() => {
    let filterCurrProduct = products.filter(
      (item) => item.category === urlparams
    );
    setFiltered(filterCurrProduct);
  }, [urlparams]);

  return (
    <Container className="p-0">
      <Row className="g-3">
        {/* {useParams().category === "all" ? } */}
        {(useParams().category === "all" ? products : filtered).map(
          (product, i) => (
            <Col xs={3} key={i}>
              <ProductCard itemCode={product} />
            </Col>
          )
        )}
      </Row>
    </Container>
  );
}
