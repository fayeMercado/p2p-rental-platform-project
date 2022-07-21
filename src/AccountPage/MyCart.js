import React from "react";
import styles from "./AccountPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { CartItem } from "./CartItem";
import { Button } from "react-bootstrap";

export function MyCart() {
  return (
    <Container as={Row} className="p-0">
      <Col xs={8}>
        <Container
          fluid
          className="d-flex mb-3 p-0 align-items-end justify-content-between"
        >
          <h3 className="fontMain fw-bold m-0">MY CART</h3>
          <span>0 products</span>
        </Container>
        {CartListByOwner()}
      </Col>
      <Col className="p-0">{OrderSummary()}</Col>
    </Container>
  );
}

function OrderSummary() {
  return (
    <Container className={styles.Summary}>
      <h5>Order Summary</h5>
      <hr />
      <div>
        <i>Delivery Address:</i>
        <div className={styles.Address}>
          <p>Juan dela Cruz | (+63) 999 000 0000</p>
          <p>Address Line 1</p>
          <p>Barangay, City/Municipality, Province, ZIP Code</p>
        </div>
      </div>
      <div>
        {ItemSummary()}
        {ItemSummary()}
      </div>
      <div className={styles.SummaryList} style={{ fontSize: "0.875rem" }}>
        <span>Refundable Subtotal</span>
        <p className="text-end">Php 0</p>
      </div>
      <div className={styles.SummaryList} style={{ fontSize: "0.875rem" }}>
        <span>Rent Subtotal</span>
        <p className="text-end">Php 0</p>
      </div>
      <div className={styles.SummaryList} style={{ fontSize: "0.875rem" }}>
        <span>Delivery Charges</span>
        <p className="text-end">Php 0</p>
      </div>
      <hr />
      <div className={styles.SummaryList} style={{ fontSize: "1rem" }}>
        <b>Total Payment</b>
        <span className="text-end">
          Php <b>0</b>
        </span>
      </div>
      <div className="mt-3 text-center">
        <Button variant="success" type="button">
          Checkout
        </Button>
      </div>
    </Container>
  );
}

function ItemSummary() {
  return (
    <Container className="p-0">
      <h6>Item Name</h6>
      <p>By: Owner's Name</p>
      <ul>
        <li>
          <div className={styles.SummaryList}>
            <span>Item for</span>
            <b className="text-end">Door-to-door Delivery</b>
          </div>
        </li>
        <li>
          <div className={styles.SummaryList}>
            <span>Rent date</span>
            <b className="text-end">mon/dd/yyyy</b>
          </div>
        </li>
        <li>
          <div className={styles.SummaryList}>
            <span>Rent duration (day/s) </span>
            <b className="text-end">1</b>
          </div>
        </li>
        <li>
          <div className={styles.SummaryList}>
            <span>Quantity</span>
            <b className="text-end">1</b>
          </div>
        </li>
        <li>
          <div className={styles.SummaryList}>
            <span>Refundable deposit</span>
            <span className="text-end">
              Php <b>0</b>
            </span>
          </div>
        </li>
        <li>
          <div className={styles.SummaryList}>
            <span>Rent</span>
            <span className="text-end">
              Php <b>0</b>
            </span>
          </div>
        </li>
      </ul>
      <div className={styles.SummaryList} style={{ marginLeft: "24px" }}>
        <i>Item Subtotal</i>
        <span className="text-end">
          Php <b>0</b>
        </span>
      </div>
      <hr />
    </Container>
  );
}

function CartListByOwner() {
  return (
    <Form className={styles.Cart}>
      <Container className="p-0">
        {CartItem()}
        {CartItem()}
        <p>By: Owner's Name</p>
        <hr />
      </Container>
    </Form>
  );
}
