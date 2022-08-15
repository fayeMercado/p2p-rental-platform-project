import React, { useEffect, useState } from "react";
import styles from "./AccountPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import {
  AppBtnGreen,
  AppBtnWhite,
  AppBtnYellow,
} from "../CustomComponents/AppButton";
import { UserCartItem } from "./UserCartItem";

export function UserCart() {
  const [myCart, setMyCart] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const cart = { cart_id: "C0000001" }; //change to dynamic

  //modal>>
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deleteItem, setDeleteItem] = useState("");

  //<<modal

  const getCart = () => {
    fetch(`http://127.0.0.1:8000/cart/${cart.cart_id}`)
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
    checked.length &&
    checked
      .map((x) => {
        const current = allProducts.find(
          (item) => item.code === x.product_code
        );
        return x.quantity * current.ref_deposit;
      })
      .reduce((a, b) => a + b);

  const totalRent =
    checked.length && checked.map((x) => x.total_rent)?.reduce((a, b) => a + b);

  const totalDelivery =
    checked.length &&
    checked.map((x) => x.shipping_rates)?.reduce((a, b) => a + b);

  const cartTotal = totalRefundable + totalRent + totalDelivery;

  const deleteConfirm = () => {
    let itemToBeDeleted = {
      id: deleteItem,
    };
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemToBeDeleted),
    };

    fetch("http://localhost:8000/cart", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const filteredCart = result.filter(
          (item) => item.cart_id === cart.cart_id
        );
        setMyCart(filteredCart);
      });

    return handleClose();
  };

  const handleChange = (event) => {
    let updatedList = [...checked];
    let findItem = myCart.find(
      (item) => item.id === parseInt(event.target.value)
    );
    if (event.target.checked) {
      updatedList = [...checked, findItem];
    } else {
      updatedList.splice(checked.indexOf(findItem), 1);
    }
    setChecked(updatedList);
  };

  return myCart.length && allProducts.length ? (
    <Container as={Row} className={styles.UserCart}>
      <Container className="d-flex align-items-end justify-content-between">
        <h3 className="fontMain fw-bold">MY CART</h3>
        <span className="m-2">{myCart.length} products found.</span>
      </Container>

      <Form className="p-0">
        {/* <<<<<<<<<< Cart List >>>>>>>>>> */}
        {myCart.map((cartItem, index) => (
          <Form.Group
            className={styles.CartItem + " d-flex gap-2"}
            controlId={index}
            key={index}
          >
            <Form.Check
              type="checkbox"
              aria-label={cartItem.product_code}
              id="default-checkbox-2"
              value={cartItem.id}
              onChange={(e) => handleChange(e)}
            />

            {UserCartItem(
              cartItem,
              allProducts,
              handleShow,
              deleteItem,
              setDeleteItem
            )}
          </Form.Group>
        ))}

        <Modal show={show} onHide={handleClose} size="sm" centered backdrop>
          <Modal.Body>
            Are you sure you want to delete this item from your cart?
          </Modal.Body>
          <Modal.Footer>
            <AppBtnWhite type="button" onClick={handleClose}>
              No
            </AppBtnWhite>
            <AppBtnYellow type="button" onClick={deleteConfirm}>
              Yes
            </AppBtnYellow>
          </Modal.Footer>
        </Modal>

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
              <AppBtnGreen type="submit">Proceed to Payment</AppBtnGreen>
            </div>
          </div>
        </Container>
      </Form>
    </Container>
  ) : (
    <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
      "No items in your cart."
    </p>
  );
}
