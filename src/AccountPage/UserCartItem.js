import React from "react";
import styles from "./AccountPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { AppBtnWhite, AppBtnYellow } from "../CustomComponents/AppButton";
import { getItem } from "../dataProduct";
import { IconClose, IconLocation } from "../Icons";

export function UserCartItem(itemcode, index) {
  let item = getItem(itemcode);
  return (
    <Container key={index} className={styles.CartItem}>
      <Container as={Row} className="m-0">
        <Col xs={10}>
          <h5 className="m-0">{item.itemName}</h5>
        </Col>
        <Col className="text-end">
          <IconClose defaultColor="#184d47" hoverColor="#b84141" />
        </Col>
      </Container>
      <Row className="m-0 gap-3">
        <Col>
          <Container as={Row} className="m-0 mb-2">
            <Col>
              <IconLocation color="#184D47" /> {item.location}
            </Col>
            <Col className="text-end">Owner: Owner's Name</Col>
          </Container>
          <Container as={Row} className="m-0 gap-3">
            <Col>
              <img
                src={item.images[0]}
                alt=""
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </Col>
            <Col xs={10}>
              <Row className="m-0 gap-5">
                <Col xs={5}>
                  <div className="d-flex justify-content-between">
                    <span>Quantity : </span>
                    <span>{item.quantity}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Rent Duration : </span>
                    <span>5 days</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Shipping : </span>
                    <span>Pick-up</span>
                  </div>
                  <div>
                    <span>Addresss : </span>
                    <p className="m-0">N/A</p>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex justify-content-between">
                    <span>Refundable Deposit : </span>
                    <span>&#8369;{item.deposit}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Rent Rate Subtotal : </span>
                    <span>&#8369;0</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Delivery Charges : </span>
                    <span>&#8369;0</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span>Item Total : </span>
                    <span>&#8369;0</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Container>
        </Col>
        <Col xs={2} className="d-flex flex-column justify-content-end gap-2">
          <AppBtnWhite className="white-green" type="button">
            Edit
          </AppBtnWhite>
          <AppBtnWhite className="white-green" type="button">
            Move to Wishlist
          </AppBtnWhite>
          <AppBtnYellow className="white-green" type="button">
            Proceed to Checkout
          </AppBtnYellow>
        </Col>
      </Row>
    </Container>
  );
}
