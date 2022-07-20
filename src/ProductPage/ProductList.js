import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ProductCard } from "./ProductCard";

export function ProductList() {
  return (
    <Container className="p-0">
      <Container
        fluid
        className="d-flex mb-3 p-0 align-items-end justify-content-between"
      >
        <h3 className="fontMain fw-bold m-0">COMPUTER & ACCESSORIES</h3>
        <span>0 products found.</span>
      </Container>
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
