import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ProductCard } from "./ProductCard";
import { getItem, getProducts } from "../dataProduct";

export function ProductList() {
  let products = getProducts();
  let item = getItem();
  console.log(products.map((product) => `{ProductCard(${product.code})}`));
  return (
    <Container className="p-0">
      <Row className="g-3">
        {/* {products.map((product) => {ProductCard(${product.code})})} */}
        {ProductCard(1658469424081)}
        {ProductCard(1658469412709)}
      </Row>
    </Container>
  );
}
