import React from "react";
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
import { AppButtonYellow } from "../CustomComponents/AppButton";
import { getProducts } from "../dataProduct";

const ItemPage = () => (
  <Container className={styles.ItemPage} data-testid="ItemPage">
    <Row>
      <Col xs={6} className="d-flex flex-column justify-content-between">
        <Container className="p-0">
          <ItemCarousel itemIndex="0" />
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
          <h4 className="fontMain fw-bold">{getProducts()[0].itemName}</h4>
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
          <ul>
            <li className={styles.ItemListing}>
              Location: <span>{getProducts()[0].location}</span>
            </li>
            <li className={styles.ItemListing}>
              Item Status:{" "}
              <span>
                {getProducts()[0].available ? "Available" : "Not Available"}
              </span>
            </li>
            <li className={styles.ItemListing}>
              Available Quantity : <span>{getProducts()[0].quantity}</span>
            </li>
            <li className={styles.ItemListing}>
              Refundable Deposit: :
              <span>
                Php <b>{getProducts()[0].deposit}</b>
              </span>
            </li>
          </ul>
          <hr />
          <Container className="mb-3">
            Rates in Php
            <Row className="text-center">
              <Col>
                <span className={styles.Rates}>
                  {getProducts()[0].rent.day}
                </span>
                <i className="text-muted">/ day</i>
              </Col>
              <Col>
                <span className={styles.Rates}>
                  {getProducts()[0].rent.week}
                </span>
                <i className="text-muted">/ week</i>
              </Col>
              <Col>
                <span className={styles.Rates}>
                  {getProducts()[0].rent.month}
                </span>
                <i className="text-muted">/ month</i>
              </Col>
            </Row>
          </Container>
          <hr />
          <div className="d-flex justify-content-center gap-5">
            Available for:
            {getProducts()[0].method.map((method, index) => (
              <span key={index}>{method}</span>
            ))}
            {/* <span>&#10007; Pick-up</span>
            <span>&#10003; Door-to-door delivery</span> */}
          </div>
          <Container className="d-flex justify-content-center mt-5">
            <AppButtonYellow type="button">Add to Cart</AppButtonYellow>
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
        <Container>
          <ul>
            {getProducts()[0].description.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </Container>
      </Tab>
      <Tab eventKey="instructions" title="PICK-UP & RETURN INSTRUCTIONS">
        <Container>{getProducts()[0].instructions}</Container>
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
