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

import logoWhite from "../logoWhite.svg";
import { IconAccount, IconCart } from "../Icons.js";

const HeaderLanding = () => (
  <div className={styles.Headers} data-testid="Headers">
    <Container fluid className={styles.HeaderProducts} data-testid="Headers">
      <Container
        className={styles.Page + " d-flex flex-column justify-content-between"}
      >
        <Container>
          <Row>
            <Col>
              <img src={logoWhite} alt="" />
            </Col>
            <Col className="d-flex justify-content-end align-items-center gap-3">
              <span className={styles.Welcome}>Welcome, Username!</span>
              <IconAccount defaultColor="#184D47" hoverColor="#81B395" />
              <IconCart defaultColor="#184D47" hoverColor="#81B395" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={3}>
              <Form.Select aria-label="Default select example">
                <option>Select location (optional)</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col xs={7}>
              <InputGroup>
                <Form.Control
                  placeholder="Search items"
                  aria-label="Search items"
                  aria-describedby="basic-addon2"
                />
                {/* <Icon /> */}
              </InputGroup>
            </Col>
            {/* <Col className="d-flex align-items-center justify-content-center">
              or
            </Col> */}
            <Col xs={2} className="d-flex align-items-center pl-0">
              <span style={{ paddingRight: "12px" }}>or </span>
              <Button variant="warning" className="w-100">
                Explore
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  </div>
);

HeaderLanding.propTypes = {};

HeaderLanding.defaultProps = {};

export default HeaderLanding;
