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

import { IconLocation, IconStarEmpty } from "../Icons.js";
import {
  AppButtonWhiteGreen,
  AppButtonYellow,
} from "../CustomComponents/AppButton";
import { getItem } from "../dataProduct";
import { ImageCarousel } from "./ImageCarousel";

const ItemPage = () => {
  let params = useParams();
  const [item, setItem] = useState([]);
  const rates = item.rent_rates && JSON.parse(item.rent_rates); //not undefined (waiting for value) before parsing
  // const images = item.images && JSON.parse(item.images);

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
    <div>
      <Container className={styles.ContentDivider} data-testid="ItemPage">
        {/* <<<<<<<<<< Item Description >>>>>>>>>> */}
        <Row>
          <h4 className="fontMain fw-bold my-0">{item.item_name}</h4>
          <span style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
            <IconLocation color="#184D47" /> <span>{item.location}</span>
          </span>

          {/* <<<<<<<<<< Image Carousel >>>>>>>>>> */}
          <Col xs={6} className="d-flex flex-column justify-content-between">
            <Container className="p-0">{ImageCarousel(item)}</Container>
          </Col>

          <Col>
            <Container className="p-0">
              Rates :
              <Row className="my-2 text-center">
                <Col>
                  <span className={styles.Rates}>
                    &#8369;<b>{rates?.day}</b>
                  </span>
                  <span className="text-muted"> /day</span>
                </Col>
                <Col>
                  <span className={styles.Rates}>
                    &#8369;<b>{rates?.week}</b>
                  </span>
                  <span className="text-muted"> /week</span>
                </Col>
                <Col>
                  <span className={styles.Rates}>
                    &#8369;<b>{rates?.month}</b>
                  </span>
                  <span className="text-muted"> /month</span>
                </Col>
              </Row>
            </Container>
            <ul className={styles.ItemListing}>
              <li>
                Available Quantity : <b>{item.available_quantity}</b>
              </li>
              <li>
                Refundable Deposit : &#8369;<b>{item.ref_deposit}</b>
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
                <Col xs={4}>Shipping :</Col>
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
                <Form.Label column xs={4} htmlFor="startDate">
                  Start Date :
                </Form.Label>
                <Col>
                  <Form.Control
                    className={styles.CustomField}
                    type="date"
                    id="startDate"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="d-flex align-items-center">
                <Form.Label column xs={4} htmlFor="rentDuration">
                  Rent Duration <i>(days)</i> :
                </Form.Label>
                <Col xs={3}>
                  <Form.Control
                    className={styles.CustomField}
                    type="number"
                    id="rentDuration"
                    defaultValue={1}
                    min={1}
                  />
                </Col>
                <Col></Col>
                <Form.Label column xs={2} htmlFor="ItemQuantity">
                  Quantity
                </Form.Label>
                <Col xs={2}>
                  <Form.Control
                    className={styles.CustomField}
                    type="number"
                    id="ItemQuantity"
                    defaultValue={1}
                    min={1}
                    max={item.available_quantity}
                  />
                </Col>
              </Form.Group>
            </Form>

            <Container className="d-flex justify-content-center mt-3 gap-3">
              <AppButtonWhiteGreen type="button">
                Add to Wishlist
              </AppButtonWhiteGreen>
              <AppButtonYellow type="submit">Add to Cart</AppButtonYellow>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className={styles.ContentDivider}>
        <Row className="px-0">
          <Col xs={2} className="d-flex align-items-center p-0">
            <Container className="px-3">
              <img
                src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"
                alt=""
                width="100%"
              />
            </Container>
          </Col>
          <Col style={{ paddingLeft: 0 }}>
            <span className="fontMain">
              By: <b>Owner's Name</b>
            </span>
            <div className="d-flex justify-content-between p-0">
              <Stack direction="horizontal" className="d-flex ">
                <IconStarEmpty />
                <IconStarEmpty />
                <IconStarEmpty />
                <IconStarEmpty />
                <IconStarEmpty />
              </Stack>
              <span>0 reviews</span>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={styles.ContentDivider}>
        {ProductTabInfo()}
      </Container>
    </div>
  );
};

ItemPage.propTypes = {};

ItemPage.defaultProps = {};

export default ItemPage;

function ProductTabInfo() {
  let params = useParams();
  let item = getItem(parseInt(params.code, 10));
  return (
    <Tabs id="more-info" defaultActiveKey="description" className="mb-3" fill>
      <Tab eventKey="description" title="PRODUCT DESCRIPTION">
        {/* <Container>
          <ul>
            {item.description.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </Container> */}
      </Tab>
      <Tab eventKey="instructions" title="PICK-UP & RETURN INSTRUCTIONS">
        {/* <Container>{item.instructions}</Container> */}
      </Tab>
      <Tab eventKey="reviews" title="REVIEWS">
        <Container>Lorem Ipsum3</Container>
      </Tab>
    </Tabs>
  );
}
