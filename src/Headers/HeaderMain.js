import React from "react";
import { Container, Stack, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./Headers.module.css";

const HeaderMain = () => (
  <div className={styles.Headers} data-testid="Headers">
    <Container>
      <Stack direction="horizontal" gap={3}>
        <div>Handeeman</div>
        <div className="bg-light border ms-auto">Log in</div>
        <div className="bg-light border">Sign Up</div>
      </Stack>
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
        <Col>
          <InputGroup>
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </Col>
        <Col md="auto">
          or
        </Col>
        <Col md="auto">
          <Button variant="warning">Explore</Button>
        </Col>
      </Row>
    </Container>
  </div>
);

HeaderMain.propTypes = {};

HeaderMain.defaultProps = {};

export default HeaderMain;
