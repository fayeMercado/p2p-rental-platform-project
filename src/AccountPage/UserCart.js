import React, { useEffect, useState } from "react";
import styles from "./AccountPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { AppBtnGreen } from "../CustomComponents/AppButton";
import { getCart } from "./dataCart";
import { UserCartItem } from "./UserCartItem";

export function UserCart() {
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = "";

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/cart", requestOptions)
      .then((response) => response.text())
      .then((result) => setMyCart(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Container as={Row} className={styles.UserCart}>
      <Container className="d-flex align-items-end justify-content-between">
        <h3 className="fontMain fw-bold">MY CART</h3>
        <span>0 products</span>
      </Container>

      {/* <<<<<<<<<< Cart List >>>>>>>>>> */}
      {myCart.map((item, index) => UserCartItem(item, index))}

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
