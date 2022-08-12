import React from "react";
import styles from "./AccountPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { AppBtnGreen, AppButtonGreen } from "../CustomComponents/AppButton";
import { getCart } from "./dataCart";
import { UserCartItem } from "./UserCartItem";

export function UserCart() {
  let myCart = getCart();
  return (
    <Container as={Row} className={styles.UserCart}>
      <Container className="d-flex align-items-end justify-content-between">
        <h3 className="fontMain fw-bold">MY CART</h3>
        <span>0 products</span>
      </Container>

      {/* <<<<<<<<<< Cart List >>>>>>>>>> */}
      {myCart.map((itemcode, index) => UserCartItem(itemcode, index))}

      <hr />
      <Container>
        <h5 className="mb-3">
          <b>Cart Summary</b>
        </h5>
        <div className="d-flex justify-content-between">
          <span>Refundable Subtotal</span>
          <span className="text-end">
            &#8369;<b>0</b>
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Rent Subtotal</span>
          <span className="text-end">
            &#8369;<b>0</b>
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Delivery Charges</span>
          <span className="text-end">
            &#8369;<b>0</b>
          </span>
        </div>
        <hr />
        <div className="text-end">
          <AppBtnGreen type="submit">Checkout all Items</AppBtnGreen>
        </div>
      </Container>
    </Container>
  );
}
