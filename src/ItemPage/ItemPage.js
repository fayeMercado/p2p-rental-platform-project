import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import styles from "./ItemPage.module.css";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import ItemCarousel from "./ItemCarousel";
import { IconLocation, IconStarEmpty } from "../Icons.js";
import { AppButtonYellow } from "../CustomComponents/AppButton";
import { getItem } from "../dataProduct";

const ItemPage = () => {
  let params = useParams();
  const [item, setItem] = useState([]);
  const rates = item.rent_rates && JSON.parse(item.rent_rates); //not undefined (waiting for value) before parsing

  function findInProducts() {
    fetch("http://localhost:8000/products")
      .then((result) => result.json())
      .then((response) => {
        const findItem = response.find((item) => item.code === params.code);
        setItem(findItem);
      });
  }
  useEffect(findInProducts, []);

  return (
    <Container className={styles.ItemPage} data-testid="ItemPage">
      {/* <<<<<<<<<< Item Description >>>>>>>>>> */}
      <Row>
        <h4 className="fontMain fw-bold my-0">{item.item_name}</h4>
        <Col>
          <span style={{ fontSize: "1.15rem" }}>
            <IconLocation color="#184D47" /> <span>{item.location}</span>
          </span>
          <Container className="p-0 mt-2">
            Rates :
            <Row className="my-2 text-center">
              <Col>
                <span className={styles.Rates}>&#8369;{rates?.day}</span>
                <span className="text-muted"> /day</span>
              </Col>
              <Col>
                <span className={styles.Rates}>&#8369;{rates?.week}</span>
                <span className="text-muted"> /week</span>
              </Col>
              <Col>
                <span className={styles.Rates}>&#8369;{rates?.month}</span>
                <span className="text-muted"> /month</span>
              </Col>
            </Row>
          </Container>
          <ul className={styles.ItemListing}>
            <li>
              Available Quantity : <b>{item.available_quantity}</b>
            </li>
            <li>
              Refundable Deposit : Php <b>{item.ref_deposit}</b>
            </li>
            <li>
              <Container fluid className="p-0 d-flex justify-content-between">
                <Stack direction="horizontal" className="d-flex ">
                  <IconStarEmpty />
                  <IconStarEmpty />
                  <IconStarEmpty />
                  <IconStarEmpty />
                  <IconStarEmpty />
                </Stack>
                <span>0 reviews</span>
              </Container>
            </li>
          </ul>
          <hr />

          {/* <<<<<<<<<< Order Form>>>>>>>>>> */}
          <Form className="p-0">
            <Form.Group
              as={Row}
              controlId="shippingMethod"
              key="shipping-method"
              required
            >
              <Col xs={3}>For:</Col>
              <Col className="d-flex justify-content-between">
                <Form.Check
                  type="radio"
                  id="pick-up"
                  label="Pick-up"
                  name="method"
                />
                <Form.Check
                  type="radio"
                  id="delivery"
                  label="Door-to-door delivery"
                  name="method"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} key="start-date">
              <Form.Label column xs={3} htmlFor="startDate">
                Start Date:
              </Form.Label>
              <Col>
                <Form.Control type="date" id="startDate" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} key="item-quantity">
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
          </Form>

          <Container className="d-flex justify-content-center mt-5">
            <AppButtonYellow type="button">Add to Cart</AppButtonYellow>
          </Container>
        </Col>

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
      </Row>
      <br />
      <br />
      <Row>
        <Container>{ControlledTabsExample()}</Container>
      </Row>
    </Container>
  );
};

ItemPage.propTypes = {};

ItemPage.defaultProps = {};

export default ItemPage;

function ControlledTabsExample() {
  let params = useParams();
  let item = getItem(parseInt(params.code, 10));
  return (
    <Tabs id="more-info" defaultActiveKey="description" className="mb-3" fill>
      <Tab eventKey="description" title="DESCRIPTION">
        <Container>
          <ul>
            {item.description.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </Container>
      </Tab>
      <Tab eventKey="instructions" title="PICK-UP & RETURN INSTRUCTIONS">
        <Container>{item.instructions}</Container>
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
