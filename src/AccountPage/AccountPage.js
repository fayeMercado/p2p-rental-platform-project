import React from "react";
import PropTypes from "prop-types";
import styles from "./AccountPage.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";

import HeaderProducts from "../Headers/HeaderProducts";

const AccountPage = () => (
  <Container fluid className={styles.AccountPage} data-testid="AccountPage">
    <HeaderProducts />
    <Container>
      <Row className="align-items-center">
        <Breadcrumb className="pt-3">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Account</Breadcrumb.Item>
          <Breadcrumb.Item active>My Cart</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <Col xs={3}>
          <Container className="mb-4 text-center">
            <img
              src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"
              alt=""
              width="75%"
            />
            <h3 className="mt-3">Juan dela Cruz</h3>
            <p>Username</p>
          </Container>
          <Stack className="gap-3">
            <Button variant="outline-secondary">PROFILE</Button>
            <Button variant="outline-secondary">MY CART</Button>
            <Button variant="outline-secondary">MY PURCHASES</Button>
            <Button variant="outline-secondary">WISHLIST</Button>
          </Stack>
        </Col>
        <Col>
          <Container as={Row} className="borders p-0">
            <Col xs={8}>
              <Container
                fluid
                className="d-flex mb-3 p-0 align-items-end justify-content-between"
              >
                <h3 className="fontMain fw-bold m-0">MY CART</h3>
                <span>0 products</span>
              </Container>

              <Form className={styles.Cart}>
                <Container className="p-0">
                  <p>By: Owner's Name</p>
                  <hr />
                  {CartItem()}
                  {CartItem()}
                </Container>
              </Form>
            </Col>
            <Col>aaa</Col>
          </Container>
        </Col>
      </Row>
    </Container>
  </Container>
);

AccountPage.propTypes = {};

AccountPage.defaultProps = {};

export default AccountPage;

function CartItem() {
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
      <Col className="p-0">
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
          key="shipping-method"
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
            Start Date
          </Form.Label>
          <Col>
            <Form.Control type="date" id="startDate" defaultValue={1} min={1} />
          </Col>
        </Form.Group>
      </Col>
      <Container className="d-flex justify-content-center gap-3">
        <Button variant="warning" type="button">
          Remove Item
        </Button>
        <Button variant="warning" type="button">
          Move to Wishlist
        </Button>
      </Container>
    </Container>
  );
}
