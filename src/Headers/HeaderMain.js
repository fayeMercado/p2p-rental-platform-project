import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import styles from "./Headers.module.css";

import logoWhite from "../Images/logoWhite.svg";
import { IconSearch } from "../Icons";
import {
  AppButtonGreen,
  AppButtonWhiteGreen,
  AppButtonYellow100,
} from "../CustomComponents/AppButton";
import { Login, Signup } from "../Profile/Modal";

import { useNavigate } from "react-router-dom";

const HeaderMain = () => {
  const provinces = require("philippines/provinces");
  const navigate = useNavigate();

  const [loginShow, setLoginShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

              {/* Login Start */}

              <Col className="d-flex justify-content-end align-items-center gap-3">
                <div className="ms-auto">
                  <AppButtonWhiteGreen
                    type="button"
                    onClick={() => setLoginShow(true)}
                  >
                    Log in
                  </AppButtonWhiteGreen>
                </div>
                <Login show={loginShow} onHide={() => setLoginShow(false)} />

                {/* Login End */}

                {/* Signup Start */}

                <div>
                  <AppButtonGreen type="button" onClick={handleShow}>
                    Sign up
                  </AppButtonGreen>
                </div>
                {/* <Signup
                  show={signupShow}
                  onHide={() => setSignupShow(false)}
                /> */}
                {Signup(show, handleClose)}

                {/* Signup End */}
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
                  onClick={() => navigate("/products/all")}
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
