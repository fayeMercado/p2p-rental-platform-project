import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import styles from "./ItemPage.module.css";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { IconLocation, IconStarEmpty } from "../Icons.js";
import { AppBtnWhite } from "../CustomComponents/AppButton";
import { getItem } from "../dataProduct";
import { ImageCarousel } from "./ImageCarousel";
import { OrderForm } from "./SubComponents/OrderForm";

import "react-day-picker/dist/style.css";

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

  //modal>>
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //<<modal

  //datepicker>>
  const [duration, setDuration] = useState(0);
  const [range, setRange] = useState([]);
  const disabledDays = [{ from: new Date(1980, 0, 1), to: new Date() }];
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!range?.from) {
      setDuration(0);
      setOutput("Pick a date");
    } else if (range?.from) {
      setDuration(1);
      setOutput(range.from?.toLocaleDateString());
      if (range.to) {
        setDuration((range.to - range.from) / 86400000);
        setOutput(
          range.from?.toLocaleDateString() +
            " - " +
            range.to?.toLocaleDateString()
        );
      }
    }
  }, [range?.from, range?.to]);

  let footer = <p>duration {duration}</p>;
  //<<datepicker

  return (
    <div>
      <Container className={styles.ContentDivider} data-testid="ItemPage">
        {/* <<<<<<<<<< Item Description >>>>>>>>>> */}
        <Row>
          <h4 className="fontMain fw-bold my-0">{item.item_name}</h4>
          <span style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
            <IconLocation color="#184D47" /> <span>{item.location}</span>
          </span>

          <Col className="d-flex flex-column">
            <Container className="p-0">
              Rates :
              <Row className="my-2 text-center">
                <Col>
                  <span className={styles.Rates}>
                    &#8369;<b>{rates?.day.toLocaleString()}</b>
                  </span>
                  <span className="text-muted"> /day</span>
                </Col>
                <Col>
                  <span className={styles.Rates}>
                    &#8369;<b>{rates?.week.toLocaleString()}</b>
                  </span>
                  <span className="text-muted"> /week</span>
                </Col>
                <Col>
                  <span className={styles.Rates}>
                    &#8369;<b>{rates?.month.toLocaleString()}</b>
                  </span>
                  <span className="text-muted"> /mo</span>
                </Col>
              </Row>
            </Container>
            <ul className={styles.ItemListing}>
              <li>
                Available Quantity : <b>{item.available_quantity}</b>
              </li>
              <li>
                Refundable Deposit : &#8369;
                <b>{item.ref_deposit?.toLocaleString()}</b>
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

            {/* <<<<<<<<<< Order Form >>>>>>>>>> */}
            {OrderForm(
              range,
              footer,
              setRange,
              disabledDays,
              output,
              duration,
              item,
              handleShow
            )}
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
      {/* <<<<<<<<<< Owner's Section >>>>>>>>>> */}
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
          <AppBtnWhite type="button">View Products</AppBtnWhite>
          <AppBtnWhite type="button">Chat Owner</AppBtnWhite>
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
