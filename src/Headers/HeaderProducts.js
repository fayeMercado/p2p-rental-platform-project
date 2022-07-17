import React from "react";
import PropTypes from "prop-types";
import styles from "./Headers.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logoWhite from "../logoWhite.svg";

const HeaderProducts = () => (
  <Container fluid className={styles.HeaderProducts} data-testid="Headers">
    <div className={styles.Page + "w-75"}>
      <div>
        <img src={logoWhite} alt="" />
      </div>
      <div>
        <button></button>
      </div>
    </div>
  </Container>
);

HeaderProducts.propTypes = {};

HeaderProducts.defaultProps = {};

export default HeaderProducts;
