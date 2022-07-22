import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import styles from "./Headers.module.css";

import logoWhite from "../Images/logoWhite.svg";
import { IconSearch } from "../Icons";
import {
  AppButtonGreen,
  AppButtonWhiteGreen,
  AppButtonYellow100,
} from "../CustomComponents/AppButton";
import { useNavigate } from "react-router-dom";

const HeaderMain = () => {
  const provinces = require("philippines/provinces");
  const navigate = useNavigate();
  return (
    <div className={styles.Headers} data-testid="Headers">
      <Container fluid className={styles.HeaderProducts} data-testid="Headers">
        <Container
          className={
            styles.Page + " d-flex flex-column justify-content-between"
          }
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
                <div className="ms-auto">
                  <AppButtonWhiteGreen
                    type="button"
                    onClick={() => navigate("/log-in")}
                  >
                    Log in
                  </AppButtonWhiteGreen>
                </div>
                <div>
                  <AppButtonGreen
                    type="button"
                    onClick={() => navigate("/sign-up")}
                  >
                    Sign up
                  </AppButtonGreen>
                </div>
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
              <Col xs={7}>
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
              {/* <Col className="d-flex align-items-center justify-content-center">
              or
            </Col> */}
              <Col xs={2} className="d-flex align-items-center pl-0">
                <span style={{ paddingRight: "12px" }}>or </span>
                <AppButtonYellow100
                  type="button"
                  onClick={() => navigate("/products")}
                >
                  Explore
                </AppButtonYellow100>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </div>
  );
};

HeaderMain.propTypes = {};

HeaderMain.defaultProps = {};

export default HeaderMain;
