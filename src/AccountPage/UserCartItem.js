import React from "react";
// import styles from "./AccountPage.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AppBtnWhite, AppBtnYellow } from "../CustomComponents/AppButton";
import { IconClose, IconLocation } from "../Icons";

export function UserCartItem(
  cartItem,
  allProducts,
  handleShow,
  deleteItem,
  setDeleteItem
) {
  const item = allProducts.find((item) => item.code === cartItem.product_code);

  const itemTotal =
    item.ref_deposit * cartItem.quantity +
    cartItem.total_rent +
    cartItem.shipping_rates;

  deleteItem = () => {
    handleShow();
    return setDeleteItem(cartItem.id);
  };

  return (
    <Container>
      <Container as={Row} className="m-0">
        <Col>
          <h5 className="m-0">{item.item_name}</h5>
        </Col>
        <Col xs={1} className="text-end">
          <div onClick={deleteItem}>
            <IconClose defaultColor="#184d47" hoverColor="#b84141" />
          </div>
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
            <Col style={{ maxHeight: "110px" }}>
              <img
                src={JSON.parse(item.images)[0]}
                alt=""
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </Col>
            <Col xs={10} style={{ fontSize: "0.875rem" }}>
              <Row className="m-0 gap-5">
                <Col xs={5} className="d-flex flex-column gap-1">
                  <div className="d-flex justify-content-between">
                    <span>Quantity : </span>
                    <span>{cartItem.quantity}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Quantity : </span>
                    <span>{cartItem.quantity}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Rent Duration : </span>
                    <span>
                      {cartItem.rent_duration}{" "}
                      {cartItem.rent_duration > 1 ? " days" : " day"}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Shipping : </span>
                    <span>
                      {cartItem.shipping_method === "pick-up"
                        ? "For pick-up"
                        : "For delivery"}
                    </span>
                  </div>
                  {cartItem.shipping_method === "delivery" && (
                    <div>
                      <span>Delivery Address : </span>
                      <p className="m-0">N/A</p>
                    </div>
                  )}
                </Col>
                <Col className="d-flex flex-column gap-1">
                  <div className="d-flex justify-content-between">
                    <span>Refundable Deposit Subtotal: </span>
                    <span>
                      &#8369;
                      {(item.ref_deposit * cartItem.quantity).toLocaleString()}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Rent Rate Subtotal : </span>
                    <span>&#8369;{cartItem.total_rent?.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Delivery Charges : </span>
                    <span>
                      &#8369;{cartItem.shipping_rates?.toLocaleString()}
                    </span>
                  </div>
                  <hr className="my-2" />
                  <div className="d-flex justify-content-between">
                    <span>Item Total : </span>
                    <span>&#8369;{itemTotal.toLocaleString()}</span>
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
          <AppBtnWhite type="button">Move to Wishlist</AppBtnWhite>
        </Col>
      </Row>
    </Container>
  );
}
