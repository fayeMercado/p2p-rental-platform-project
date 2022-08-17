import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AccountPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Categories } from "../dataCategories";
import { AppBtnWhite, AppBtnYellow } from "../CustomComponents/AppButton";

function Inventory() {
  const categorylist = Categories;
  const provinces = require("philippines/provinces");
  const getUserInfo = () => {
    if (localStorage.getItem("user-info")) {
      return JSON.parse(localStorage.getItem("user-info"));
    } else {
      return null;
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  console.log(require("philippines/cities"));

  const addItem = (event) => {
    event.preventDefault();
    let imageArray = [];

    let product = {
      item_name: event.target.itemName.value,
      category: event.target.category.value,
      location: getUserInfo().address,
      available_quantity: event.target.quantity.value,
      rent_rates: JSON.stringify({
        day: event.target.rentday.value,
        week: event.target.rentweek.value,
        month: event.target.rentmonth.value,
      }),
      ref_deposit: event.target.refundable.value,
      owner: getUserInfo().username,
      item_description: event.target.description.value,
      images: JSON.stringify(imageArray),
    };

    // <<<< manual add >>>>>
    // let product = {
    //   item_name: 'Stanley 1800W 10" Table Saw',
    //   category: "tools-equipment",
    //   location: getUserInfo().address,
    //   available_quantity: 1,
    //   rent_rates: '{"day" : 200, "week" : 1000, "month" : 3500}',
    //   ref_deposit: 2000,
    //   owner: getUserInfo().username,
    //   item_description: "",
    //   images:
    //     '["https://adamimages.sbdinc.com/GEM/Stanley/1000x1000_144r/STST1825_1.jpg", "https://adamimages.sbdinc.com/GEM/Stanley/1000x1000_144r/STST1825_2.jpg", "https://adamimages.sbdinc.com/GEM/Stanley/1000x1000_144r/STST1825_3.jpg", "https://adamimages.sbdinc.com/GEM/Stanley/1000x1000_144r/STST1825_4.jpg", "https://cdn.store-assets.com/s/14425/i/23731082.jpg?width=1024"]',
    // };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(product);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://phplaravel-821102-2821130.cloudwaysapps.com/products",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <Container className="">
      <Form onSubmit={(e) => addItem(e)}>
        <Form.Group className="mb-3" controlId="itemName">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            className={styles.CustomField}
            required
            type="text"
            placeholder="Enter item name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Select category</Form.Label>
          <Form.Select
            className={styles.CustomField}
            required
            aria-label="Select category"
            defaultValue="---"
          >
            <option disabled>---</option>
            <option>Electronics & Accessories</option>
            <option>Tools & Equipment</option>
            <option>Home Furniture & Appliances</option>
            <option>Party & Event Items</option>
            <option>Toys & Sports</option>
            <option>Fashion & Jewelries</option>
            <option>Books</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control className={styles.CustomField} required type="number" />
          <Form.Text className="text-muted">
            Enter available quantity for this product.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="refundable">
          <Form.Label>Refundable Deposit</Form.Label>
          <Form.Control className={styles.CustomField} required type="number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rent Rates</Form.Label>
          <br />
          <Row>
            <Col>
              <label htmlFor="day">Rate per day:</label>
            </Col>
            <Col>
              <Form.Control
                className={styles.CustomField}
                required
                id="day"
                name="rentday"
                type="number"
              />
            </Col>
            <Col>
              <label htmlFor="day">Rate per week:</label>
            </Col>
            <Col>
              <Form.Control
                className={styles.CustomField}
                required
                name="rentweek"
                type="number"
              />
            </Col>
            <Col>
              <label htmlFor="day">Rate per month:</label>
            </Col>
            <Col>
              <Form.Control
                className={styles.CustomField}
                required
                name="rentmonth"
                type="number"
              />
            </Col>
          </Row>

          <Form.Text className="text-muted">
            Please fill out ALL boxes.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="images">
          <Form.Label>Insert Image URL</Form.Label>
          <Form.Control className={styles.CustomField} as="textarea" />

          <Form.Text className="d-flex flex-column text-muted">
            <span>Added URLs:</span>
            <span>aaa</span>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            className={styles.CustomField}
            as="textarea"
            placeholder="Add item description"
            style={{ height: "100px" }}
          />
        </Form.Group>
        <AppBtnYellow type="submit">Add Product</AppBtnYellow>
      </Form>
    </Container>
  );
}

Inventory.propTypes = {};

Inventory.defaultProps = {};

export default Inventory;
