import React, { useEffect, useState } from "react";
import styles from "./AccountPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { AppBtnGreen } from "../CustomComponents/AppButton";
import { UserCartItem } from "./UserCartItem";

export function UserCart() {
  const [myCart, setMyCart] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const getCart = () => {
    fetch("http://127.0.0.1:8000/cart")
      .then((response) => response.json())
      .then((result) => setMyCart(result))
      .catch((error) => console.log("error", error));
  };

  const getProducts = () => {
    fetch("http://127.0.0.1:8000/products")
      .then((response) => response.json())
      .then((result) => setAllProducts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getCart();
    getProducts();
  }, []);

  const totalRefundable =
    allProducts.length &&
    myCart
      .map((x) => {
        const current = allProducts.find(
          (item) => item.code === x.product_code
        );
        return x.quantity * current.ref_deposit;
      })
      .reduce((a, b) => a + b);

  const totalRent =
    myCart.length && myCart.map((x) => x.total_rent).reduce((a, b) => a + b);

  const totalDelivery =
    myCart.length &&
    myCart.map((x) => x.shipping_rates).reduce((a, b) => a + b);

  const cartTotal = totalRefundable + totalRent + totalDelivery;

  return (
    myCart.length &&
    allProducts.length && (
      <Container as={Row} className={styles.UserCart}>
        <Container className="d-flex align-items-end justify-content-between">
          <h3 className="fontMain fw-bold">MY CART</h3>
          <span>0 products</span>
        </Container>

        {/* <<<<<<<<<< Cart List >>>>>>>>>> */}
        {myCart.map((cartItem, index) =>
          UserCartItem(cartItem, index, allProducts)
        )}

        <hr className="my-3" />
        <Container>
          <h5 style={{ color: "#184d47", textAlign: "center" }}>
            <b>Cart Summary</b>
          </h5>
          <div className={styles.CartItem}>
            <div className="d-flex justify-content-between">
              <span>Refundable Subtotal</span>
              <span className="text-end">
                &#8369;<b>{totalRefundable.toLocaleString()}</b>
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Rent Subtotal</span>
              <span className="text-end">
                &#8369;<b>{totalRent.toLocaleString()}</b>
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Delivery Charges</span>
              <span className="text-end">
                &#8369;<b>{totalDelivery.toLocaleString()}</b>
              </span>
            </div>
            <hr className="my-2" />
            <div
              className="d-flex justify-content-between"
              style={{ fontSize: "1.25rem" }}
            >
              <b>Cart Total</b>
              <span className="text-end">
                &#8369;<b>{cartTotal.toLocaleString()}</b>
              </span>
            </div>

            <div className="text-center mt-3">
              <AppBtnGreen type="submit">Checkout all Items</AppBtnGreen>
            </div>
          </div>
        </Container>
      </Container>
    )
  );
}
