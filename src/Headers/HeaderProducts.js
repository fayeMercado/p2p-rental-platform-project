import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Headers.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Badge from "react-bootstrap/Badge";

import logoWhite from "../Images/logoWhite.svg";
import { IconAccount, IconCart, IconSearch } from "../Icons.js";
import { Link, useNavigate } from "react-router-dom";

const HeaderProducts = () => {
  const provinces = require("philippines/provinces");
  const navigate = useNavigate();
  return (
    <Container fluid className={styles.HeaderProducts} data-testid="Headers">
      <Container
        className={styles.Page + " d-flex flex-column justify-content-between"}
      >
        <Container>
          <Row>
            <Col>
              <img
                src={logoWhite}
                alt=""
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              />
            </Col>
            <Col className="d-flex justify-content-end align-items-center gap-3">
              <span className={styles.Welcome}>Welcome, Username!</span>
              <Link to="/account/profile">
                <IconAccount defaultColor="#184D47" hoverColor="#81B395" />
              </Link>
              <Link to="/account/my-cart">
                <IconCart defaultColor="#184D47" hoverColor="#81B395" />
              </Link>
            </Col>
            <div style={{ color: "#fff", marginTop: "0.75rem" }}>
              online marketplace that facilitates peer-to-peer renting in
              Philippines
            </div>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={3}>
              <Form.Select
                aria-label="Default select example"
                className={styles.round}
              >
                <option>Select location (optional)</option>
                {provinces.map((province) => (
                  <option key={province.key} value={province.key}>
                    {province.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col>
              <InputGroup className={styles.customInput}>
                <Form.Control
                  placeholder="Search items"
                  aria-label="Search items"
                  aria-describedby="basic-addon2"
                  className={styles.round}
                  style={{
                    border: "none",
                  }}
                />
                <div className={styles.searchButton}>
                  <IconSearch />
                </div>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

HeaderProducts.propTypes = {};

HeaderProducts.defaultProps = {};

export default HeaderProducts;
