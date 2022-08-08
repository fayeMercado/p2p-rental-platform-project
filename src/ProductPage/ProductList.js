import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { ProductCard } from "./ProductCard";
import { useParams } from "react-router-dom";
import { getCategory } from "../dataCategories";

export function ProductList() {
  // let products = getProducts(); //allProducts
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const urlparams = useParams().category;
  const category = getCategory(urlparams);
  const provinces = require("philippines/provinces");

  const allProducts = () => {
    fetch("http://localhost:8000/products")
      .then((result) => result.json())
      .then((response) => {
        setProducts(response);
      });
  };

  useEffect(allProducts, []);

  useEffect(() => {
    let filterCurrProduct = products?.filter(
      (item) => item?.category === urlparams
    );
    setFiltered(filterCurrProduct);
  }, [urlparams, products]);

  const productList = useParams().category === "all" ? products : filtered;

  return (
    <Container className="p-0">
      {/* <<<<<<<<<< Title showing category >>>>>>>>>> */}
      <Container
        fluid
        className="d-flex p-0 mb-2 align-items-end justify-content-between"
      >
        <h4 className="fontMain fw-bold m-0">{category.text.toUpperCase()}</h4>
      </Container>

      {/* <<<<<<<<<< Filters >>>>>>>>>> */}
      <Row className="mb-3">
        <Col xs={3}>
          {productList.length} {productList.length > 1 ? "products" : "product"}{" "}
          found.
        </Col>

        <Col>
          <Row className="d-flex gap-3">
            <Col xs={5} className={styles.filterContainer}>
              <label htmlFor="sort">Sort by:</label>
              <Form.Select
                id="sort"
                className={styles.customSelect2}
                aria-label="Sort items by"
              >
                <option value="none">--</option>
                <option value="highest">Highest price first</option>
                <option value="2">Lowest price first</option>
                <option value="3">Newest uploads first</option>
                <option value="3">Oldest items first</option>
              </Form.Select>
            </Col>

            <Col className={styles.filterContainer}>
              <span style={{ wordWrap: "none" }}>Filter by Location:</span>
              <Form.Select
                id="location"
                className={styles.customSelect2}
                aria-label="Filter by location"
              >
                <option value="none">--</option>
                {provinces.map((province) => (
                  <option key={province.key} value={province.key}>
                    {province.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* <<<<<<<<<< List of items >>>>>>>>>> */}
      <Row className="g-3">
        {productList?.map((product, i) => (
          <Col xs={3} key={i}>
            <ProductCard itemCode={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
