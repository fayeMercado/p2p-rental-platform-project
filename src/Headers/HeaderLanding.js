import React from "react";
import { Row, Col, Container, Card, Form, InputGroup, Button, Stack } from "react-bootstrap"
import styles from "./Headers.module.css";

import logoWhite from "../Images/logoWhite.svg";

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
              <div className="ms-auto"> <Button variant="outline-success" href="#" className={styles.round}>Login</Button> </div>
              <div><Button variant="success" href="#" className={styles.round}>Signup</Button></div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={3}>
              <Form.Select aria-label="Default select example" className={styles.round}>
                <option>Select location (optional)</option>
                <option value="1">Manila</option>
                <option value="2">Cebu</option>
                <option value="3">Nueva Ecija</option>
              </Form.Select>
            </Col>
            <Col xs={7}>
              <InputGroup>
                <Form.Control
                  placeholder="Search items"
                  aria-label="Search items"
                  aria-describedby="basic-addon2"
                  className={styles.round}
                />
                {/* <Icon /> */}
              </InputGroup>
            </Col>
            {/* <Col className="d-flex align-items-center justify-content-center">
              or
            </Col> */}
            <Col xs={2} className="d-flex align-items-center pl-0">
              <span style={{ paddingRight: "12px" }}>or </span>
              <Button variant="warning" className={styles.round} style={{ width: "180px" }} >
                <span style={{ color: "#184D47", fontWeight: "bold" }}>Explore</span>
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
