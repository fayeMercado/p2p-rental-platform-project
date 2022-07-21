import React from "react";
import styles from "./AccountPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AppButtonYellow } from "../CustomComponents/AppButton";

export function CartItem() {
  return (
    <Container as={Row} className={styles.CartItem + " mb-3 mx-0"}>
      <h5>Item Name</h5>
      <Col xs={4} className="d-flex align-items-center">
        <img
          src="https://p.rmjo.in/productSquare/9lx10mln-500x500.jpg"
          alt=""
          width="100%"
        />
      </Col>
      <Col className="p-0 mb-3">
        <Container className="mb-2">
          <span>Rates in Php:</span>
          <Row className="text-end my-2">
            <Col>
              <span className="fw-bold">0</span>
              <span className="text-muted">/day</span>
            </Col>
            <Col>
              <span className="fw-bold">0</span>
              <span className="text-muted">/week</span>
            </Col>
            <Col>
              <span className="fw-bold">0</span>
              <span className="text-muted">/month</span>
            </Col>
          </Row>
        </Container>
        <Container className="mb-2 d-flex justify-content-between">
          <span>Refundable Deposit:</span>
          <span className="fw-bold">Php 0</span>
        </Container>
        <Form.Group
          as={Row}
          key="item-quantity"
          style={{ padding: "0 24px 12px" }}
        >
          <Form.Label column htmlFor="inputItemQuantity">
            Quantity
          </Form.Label>
          <Col xs={4}>
            <Form.Control
              type="number"
              id="inputItemQuantity"
              defaultValue={1}
              min={1}
              max={3}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          key="rent-duration"
          style={{ padding: "0 24px 12px" }}
        >
          <Form.Label column htmlFor="rentDuration">
            Rent Duration (in days)
          </Form.Label>
          <Col xs={4}>
            <Form.Control
              type="number"
              id="rentDuration"
              defaultValue={1}
              min={1}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          key="start-date"
          style={{ padding: "0 24px 12px" }}
        >
          <Form.Label column htmlFor="startDate">
            Rent Date
          </Form.Label>
          <Col>
            <Form.Control type="date" id="startDate" defaultValue={1} min={1} />
          </Col>
        </Form.Group>
        <Form.Group
          controlId="shippingMethod"
          key="shipping-method"
          className="d-flex justify-content-center gap-5"
        >
          <Form.Check type="radio" id="pick-up" label="Pick-up" />

          <Form.Check
            disabled
            type="radio"
            label="Door-to-door delivery"
            id="delivery"
          />
        </Form.Group>
      </Col>
      <Container className="d-flex justify-content-center gap-3">
        <AppButtonYellow type="button">Remove Item</AppButtonYellow>
        <AppButtonYellow type="button">Move to Wishlist</AppButtonYellow>
      </Container>
    </Container>
  );
}
