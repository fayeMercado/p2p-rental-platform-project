import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ProductCard } from "./ProductCard";

export function ProductList() {
  return (
    <Container className="p-0">
      <Row className="g-3">
        {ProductCard()}
        {ProductCard()}
        {ProductCard()}
        {ProductCard()}
        {ProductCard()}
      </Row>
    </Container>
  );
}
