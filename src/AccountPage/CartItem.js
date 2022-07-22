import React from "react";
import styles from "./AccountPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AppButtonYellow } from "../CustomComponents/AppButton";
import { getItem } from "../dataProduct";

export function CartItem(itemcode) {
  let item = getItem(itemcode);
  return (
    <Container
      as={Row}
      className={styles.CartItem + " mb-3 mx-0"}
      key={itemcode}
    >
      <h5>{item.itemName}</h5>
      <Col xs={4} className="d-flex align-items-center">
        <img src={item.images[0]} alt="" width="100%" />
      </Col>
      <Col className="p-0 mb-3">
        <Container className="mb-2">
          <p>
            Location: <span>{item.location}</span>
          </p>
          <span>Rates in Php:</span>
          <Row className="text-center my-2">
            <Col>
              <span className="fw-bold">{item.rent.day}</span>
              <span className="text-muted">/day</span>
            </Col>
            <Col>
              <span className="fw-bold">{item.rent.week}</span>
              <span className="text-muted">/week</span>
            </Col>
            <Col>
              <span className="fw-bold">{item.rent.month}</span>
              <span className="text-muted">/month</span>
            </Col>
          </Row>
        </Container>
        <Container className="mb-2 d-flex justify-content-between">
          <span>Refundable Deposit:</span>
          <span className="fw-bold">Php {item.deposit}</span>
        </Container>
        <Form.Group
          as={Row}
          key="item-quantity"
          style={{ padding: "0 24px 6px" }}
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
              max={item.quantity}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          key="rent-duration"
          style={{ padding: "0 24px 6px" }}
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
        <Form.Group as={Row} key="start-date" style={{ padding: "0 24px 6px" }}>
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
          <Form.Check type="radio" id="pick-up" label="Pick-up" name="method" />

          <Form.Check
            type="radio"
            id="delivery"
            label="Door-to-door delivery"
            name="method"
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
