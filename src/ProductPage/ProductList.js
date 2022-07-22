import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../dataProduct";

export function ProductList() {
  let products = getProducts();

  console.log(products.map((product) => product.code));
  console.log(products);
  return (
    <Container className="p-0">
      <Row className="g-3">
        {products.map((product) => ProductCard(product.code))}
      </Row>
    </Container>
  );
}
