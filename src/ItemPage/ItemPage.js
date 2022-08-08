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
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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

  //modal>>
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //<<modal

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
              <AppButtonYellow type="submit" onClick={handleShow}>
                Add to Cart
              </AppButtonYellow>
            </Container>
          </Col>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Successfully added to cart</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* <<<<<<<<<< Image Carousel >>>>>>>>>> */}
          <Col xs={6} className="d-flex flex-column justify-content-between">
            <Container className="p-0">{ImageCarousel(item)}</Container>
          </Col>
        </Row>
      </Container>

      <Container className={`${styles.ContentDivider} ${styles.OwnersSection}`}>
        <div className="d-flex flex-grow-1 justify-content-center gap-3">
          <div className={styles.imgContainer}>
            <img
              src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"
              alt=""
            />
          </div>
          <div className="d-flex flex-column justify-content-center text-center">
            <h5 className="fontMain">Owner's Name</h5>
            <span>OWNER</span>
          </div>
        </div>
        <div className="vr-light"></div>
        <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center gap-2">
          <div className="d-flex ">
            <IconStarEmpty />
            <IconStarEmpty />
            <IconStarEmpty />
            <IconStarEmpty />
            <IconStarEmpty />
          </div>
          <div className="d-flex align-items-center gap-2">
            <h5 className="m-0">0.0</h5>
            <span>of 0 ratings</span>
          </div>
        </div>
        <div className="vr-light"></div>
        <div className="d-flex flex-grow-1 align-items-center justify-content-center gap-3">
          <AppButtonWhiteGreen type="button">View Products</AppButtonWhiteGreen>
          <AppButtonWhiteGreen type="button">Chat Owner</AppButtonWhiteGreen>
        </div>
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
