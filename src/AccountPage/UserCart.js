import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AccountPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { AppBtnGreen } from "../CustomComponents/AppButton";
import { UserCartItem } from "./UserCartItem";
import { ModalForDelete, ModalForPaymentConfirmation } from "./CartModals";

import { customAlphabet } from "nanoid/non-secure";

export function UserCart() {
  const navigate = useNavigate();
  const [myCart, setMyCart] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const [modal, setModal] = useState("");
  const userToken = JSON.parse(localStorage.getItem("user-info"));
  const nanoid = customAlphabet("1234567890abcdef");
  const [retriveItem, setRetriveItem] = useState({});

  const clickHandler = (e) => {
    localStorage.removeItem("temp-edit");
    navigate(`/products/item/${e.itemCode}/edit=${e.cartId}`);
    let temp = e;
    localStorage.setItem("temp-edit", JSON.stringify(temp));
  };

  //modal>>
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deleteItem, setDeleteItem] = useState("");
  const [confirmation, setConfirmation] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  //<<modal

  useEffect(() => {
    hasPickUpMethod();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  const getCart = () => {
    fetch(`http://127.0.0.1:8000/cart/${userToken.cart_id}`)
      .then((response) => response.json())
      .then((result) => {
        setMyCart(result);
      })
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myCart]);

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

    fetch("https://phplaravel-821102-2821130.cloudwaysapps.com/cart", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const filteredCart = result.filter(
          (item) => item.cart_id === userToken.cart_id
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

  const checkoutHandler = (event) => {
    event.preventDefault();
    handleShow();
    setModal("forPaymentConfirmation");
  };

  const hasPickUpMethod = () => {
    let arr = [];
    checked.map((item) => arr.push(item.shipping_method));
    return arr.includes("pick-up");
  };

  const checkoutCart = () => {
    checked.map((item) => {
      let toCheckout = {
        id: item.id,
        orderId: nanoid(13),
      };
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toCheckout),
      };

      fetch("https://phplaravel-821102-2821130.cloudwaysapps.com/cart/checkout", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("result", result);
        });
      return console.log("success");
    });
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
              setDeleteItem,
              setModal,
              retriveItem,
              setRetriveItem,
              clickHandler
            )}
          </Form.Group>
        ))}

        <Container>
          <h5 style={{ color: "#184d47", textAlign: "center" }}>
            <b>Cart Summary and Payment</b>
          </h5>
          <div className={styles.CartItem}>
            <b>Cart Summary:</b>
            <div className="d-flex justify-content-between">
              <span>Refundable Subtotal</span>
              <span className="text-end">
                &#8369;<b>{totalRefundable?.toLocaleString()}</b>
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Rent Subtotal</span>
              <span className="text-end">
                &#8369;<b>{totalRent?.toLocaleString()}</b>
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
            <br />
            <br />
            <div>
              <b>Payment Options:</b>
              <Form.Group
                className="px-4"
                controlId="shippingMethod"
                key="shipping-method"
                required
              >
                <Form.Check
                  default
                  type="radio"
                  id="wallet"
                  label="My Wallet"
                  name="payment"
                  value="wallet-up"
                />
                <p>
                  <i>Available Balance: &#8369;10000</i>
                </p>
                <Form.Check
                  type="radio"
                  id="cod"
                  label="Cash on delivery"
                  name="payment"
                  value="cod"
                  disabled={hasPickUpMethod() === true}
                />
                {hasPickUpMethod() && (
                  <p style={{ color: "#9b9c9e" }}>
                    <i>
                      Only Door-to-door deliveries are allowed for cash on
                      delivery payment option. Uncheck all "For pick-up" items
                      to use this option.
                    </i>
                  </p>
                )}
              </Form.Group>
            </div>

            <div className="text-center mt-3">
              <AppBtnGreen type="submit" onClick={(e) => checkoutHandler(e)}>
                Checkout
              </AppBtnGreen>
            </div>
          </div>
        </Container>
        <Modal show={show} onHide={handleClose} size="sm" centered backdrop>
          {modal === "forDelete" && ModalForDelete(handleClose, deleteConfirm)}
          {modal === "forPaymentConfirmation" &&
            ModalForPaymentConfirmation(
              handleClose,
              confirmation,
              setConfirmation,
              confirmed,
              setConfirmed,
              checkoutCart
            )}
        </Modal>
      </Form>
    </Container>
  ) : (
    <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
      "No items in your cart."
    </p>
  );
}
