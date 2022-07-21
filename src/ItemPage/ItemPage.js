import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ItemPage.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { IconStarEmpty } from "../Icons.js";
import ItemCarousel from "./ItemCarousel";

const ItemPage = () => (
  <Container className={styles.ItemPage} data-testid="ItemPage">
    <Row>
      <Col xs={6} className="d-flex flex-column justify-content-between">
        <Container className="p-0">
          <ItemCarousel />
        </Container>
        <Container className="p-0">
          <Row className="px-5">
            <Col xs={3} className="d-flex align-items-center p-0">
              <Container className="p-0">
                <img
                  src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"
                  alt=""
                  width="100%"
                />
              </Container>
            </Col>
            <Col>
              <h5 className="fontMain fw-bold">Owner's Name</h5>
              <Container
                fluid
                className="d-flex justify-content-between mb-3 p-0"
              >
                <Stack direction="horizontal" className="d-flex ">
                  <IconStarEmpty />
                  <IconStarEmpty />
                  <IconStarEmpty />
                  <IconStarEmpty />
                  <IconStarEmpty />
                </Stack>
                <span>0 reviews</span>
              </Container>
              <Container fluid className="d-flex justify-content-center mt-3">
                <Button
                  as="input"
                  variant="warning"
                  type="button"
                  value="View Owner's Profile"
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Col>

      <Col>
        <Form>
          <h4 className="fontMain fw-bold">Item Name</h4>
          <Container fluid className="d-flex justify-content-between mb-3">
            <Stack direction="horizontal" className="d-flex ">
              <IconStarEmpty />
              <IconStarEmpty />
              <IconStarEmpty />
              <IconStarEmpty />
              <IconStarEmpty />
            </Stack>
            <span>0 reviews</span>
          </Container>
          <Container>
            <div>
              Location: <span>N/A</span>
            </div>
            <div>
              Item Status: <span>N/A</span>
            </div>
            <div>
              Available Quantity : <span>N/A</span>
            </div>
          </Container>
          <hr />
          <Container className="mb-3">
            Rates
            <Row className="text-center">
              <Col>
                <h5>Php0</h5>
                <i className="text-muted">per day</i>
              </Col>
              <Col>
                <h5>Php0</h5>
                <i className="text-muted">per week</i>
              </Col>
              <Col>
                <h5>Php0</h5>
                <i className="text-muted">per month</i>
              </Col>
            </Row>
          </Container>
          <Container>
            Refundable Deposit: <span>N/A</span>
          </Container>
          <hr />
          <Form.Group
            controlId="shippingMethod"
            key="shipping-method"
            className="d-flex justify-content-center gap-5"
          >
            <Form.Check type="radio" id="self-collect" label="Self collect" />

            <Form.Check
              disabled
              type="radio"
              label="Door-to-door delivery"
              id="delivery"
            />
          </Form.Group>
          <hr />
          <Form.Group
            as={Row}
            key="shipping-method"
            style={{ padding: "0 24px" }}
          >
            <Form.Label column htmlFor="inputItemQuantity">
              Quantity
            </Form.Label>
            <Col>
              <Form.Control
                type="number"
                id="inputItemQuantity"
                defaultValue={1}
                min={1}
                max={3}
              />
            </Col>
          </Form.Group>
          <hr />
          <Form.Group
            as={Row}
            key="rent-duration"
            style={{ padding: "0 24px" }}
          >
            <Form.Label column htmlFor="rentDuration">
              Rent Duration (in days)
            </Form.Label>
            <Col>
              <Form.Control
                type="number"
                id="rentDuration"
                defaultValue={1}
                min={1}
              />
            </Col>
          </Form.Group>
          <hr />
          <Form.Group as={Row} key="start-date" style={{ padding: "0 24px" }}>
            <Form.Label column htmlFor="startDate">
              Start Date
            </Form.Label>
            <Col>
              <Form.Control
                type="date"
                id="startDate"
                defaultValue={1}
                min={1}
              />
            </Col>
          </Form.Group>
          <Container className="d-flex justify-content-center mt-5">
            <Button variant="warning" type="submit">
              Add to Cart
            </Button>
          </Container>
        </Form>
      </Col>
    </Row>
    <br />
    <br />
    <Row>
      <Container>{ControlledTabsExample()}</Container>
    </Row>
  </Container>
);

ItemPage.propTypes = {};

ItemPage.defaultProps = {};

export default ItemPage;

function ControlledTabsExample() {
  return (
    <Tabs id="more-info" defaultActiveKey="description" className="mb-3" fill>
      <Tab eventKey="description" title="DESCRIPTION">
        <Container>Lorem Ipsum</Container>
      </Tab>
      <Tab eventKey="instructions" title="PICK-UP & RETURN INSTRUCTIONS">
        <Container>Lorem Ipsum2</Container>
      </Tab>
      <Tab eventKey="reviews" title="REVIEWS">
        <Container>Lorem Ipsum3</Container>
      </Tab>
      <Tab eventKey="message" title="MESSAGE OWNER">
        <Container>Lorem Ipsum4</Container>
      </Tab>
    </Tabs>
  );
}
