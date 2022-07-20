import React from "react";
import PropTypes from "prop-types";
import styles from "./ProductPage.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";

import HeaderProducts from "../Headers/HeaderProducts";
import { ProductList } from "./ProductList";
import ItemPage from "../ItemPage/ItemPage";

const ProductPage = () => (
  <Container fluid className={styles.ProductPage} data-testid="ProductPage">
    <HeaderProducts />
    <Container>
      <Row className="align-items-center">
        <Breadcrumb className="pt-3">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
          <Breadcrumb.Item active>All Categories</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <Col xs={3}>
          <Stack className="gap-3">
            <Button variant="outline-secondary">ALL CATEGORIES</Button>
            <Button variant="outline-secondary">COMPUTER & ACCESSORIES</Button>
            <Button variant="outline-secondary">CATEGORY 2</Button>
            <Button variant="outline-secondary">CATEGORY 3</Button>
            <Button variant="outline-secondary">CATEGORY 4</Button>
            <Button variant="outline-secondary">CATEGORY 5</Button>
            <Button variant="outline-secondary">CATEGORY 6</Button>
            <Button variant="outline-secondary">CATEGORY 7</Button>
            <Button variant="outline-secondary">CATEGORY 8</Button>
          </Stack>
          <Container className="p-0 mt-5">
            <label htmlFor="sort">Sort by</label>
            <Form.Select id="sort" aria-label="Sort items by">
              <option>Select location (optional)</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Container>
          <Container className="p-0 mt-3">
            <label htmlFor="sort">Filter by</label>
            <Form.Select id="sort" aria-label="Sort items by">
              <option>Select location (optional)</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Container>
        </Col>
        <Col>
          {/* {ProductList()} */}
          <ItemPage />
        </Col>
      </Row>
    </Container>
  </Container>
);

ProductPage.propTypes = {};

ProductPage.defaultProps = {};

export default ProductPage;
