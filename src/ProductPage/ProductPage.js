import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ProductPage.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";

import HeaderProducts from "../Headers/HeaderProducts";
import { Outlet, useNavigate } from "react-router-dom";
import { Categories } from "../dataCategories.js";
import { AppButtonWhite } from "../CustomComponents/AppButton";
import Footer from "../Footer/Footer";

function ProductPage() {
  const [breadcrumbActive, setBreadcrumbActive] = useState("All Categories");
  const provinces = require("philippines/provinces");
  const navigate = useNavigate();
  return (
    <Container fluid className={styles.ProductPage} data-testid="ProductPage">
      <HeaderProducts />
      <Container>
        <Row className="align-items-center">
          <Breadcrumb className="pt-3">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
            <Breadcrumb.Item active>{breadcrumbActive}</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <Col xs={3}>
            <Stack className="gap-3">
              {Categories.map((category, index) => (
                <AppButtonWhite
                  key={index}
                  onClick={() => {
                    setBreadcrumbActive(category.text);
                    navigate(`/products/${category.url}`);
                  }}
                  type="button"
                  active={category.text === breadcrumbActive}
                >
                  {category.text.toUpperCase()}
                </AppButtonWhite>
              ))}
            </Stack>
            <Container className="p-0 mt-5">
              <label htmlFor="sort">Sort by:</label>
              <Form.Select
                id="sort"
                className={styles.customSelect}
                aria-label="Sort items by"
              >
                <option value="none">--</option>
                <option value="highest">Highest price first</option>
                <option value="2">Lowest price first</option>
                <option value="3">Newest uploads first</option>
                <option value="3">Oldest items first</option>
              </Form.Select>
            </Container>
            <Container className="p-0 mt-3">
              <p>Filter by:</p>
              <label htmlFor="location">Location</label>
              <Form.Select
                id="location"
                className={styles.customSelect}
                aria-label="Sort items by"
              >
                <option value="none">--</option>
                {provinces.map((province) => (
                  <option key={province.key} value={province.key}>
                    {province.name}
                  </option>
                ))}
              </Form.Select>
            </Container>
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
}

ProductPage.propTypes = {};

ProductPage.defaultProps = {};

export default ProductPage;
