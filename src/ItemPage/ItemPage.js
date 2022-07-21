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
        <Container className="p-0 mt-3">
          <Row className="px-5">
            <Col xs={2} className="d-flex align-items-center p-0">
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
            <div>
              Refundable Deposit: : <span>N/A</span>
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
          <hr />
          <div className="d-flex justify-content-center gap-5">
            Available for:
            <span>&#10007; Pick-up</span>
            <span>&#10003; Door-to-door delivery</span>
          </div>
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
