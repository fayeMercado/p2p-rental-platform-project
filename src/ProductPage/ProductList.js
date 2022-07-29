import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../dataProduct";
import { useParams } from "react-router-dom";
import { getCategory } from "../dataCategories";

export function ProductList() {
  let products = getProducts();
  const [filtered, setFiltered] = useState([]);
  const urlparams = useParams().category;
  const category = getCategory(urlparams);
  useEffect(() => {
    let filterCurrProduct = products.filter(
      (item) => item.category === urlparams
    );
    setFiltered(filterCurrProduct);
  }, [urlparams]);
  const productList = useParams().category === "all" ? products : filtered;

  return (
    <Container className="p-0">
      <Container
        fluid
        className="d-flex mb-3 p-0 align-items-end justify-content-between"
      >
        <h3 className="fontMain fw-bold m-0">{category.text.toUpperCase()}</h3>
        <span>
          {productList.length} {productList.length > 1 ? "products" : "product"}{" "}
          found.
        </span>
      </Container>
      <Row className="g-3">
        {productList.map((product, i) => (
          <Col xs={3} key={i}>
            <ProductCard itemCode={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
