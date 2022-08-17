import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AccountPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { AppBtnWhite, AppBtnYellow } from "../CustomComponents/AppButton";

function UserAddItems() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [imageArray, setImageArray] = useState([]);

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

  const user = getUserInfo();
  const userLocation = () => {
    let explode = JSON.parse(user.address);
    return explode.city + ", " + explode.province;
  };

  const addImage = () => {
    setImageArray([...imageArray, textAreaValue]);
    return setTextAreaValue("");
  };

  const addItem = (event) => {
    event.preventDefault();

    let product = {
      item_name: event.target.itemName.value,
      category: event.target.category.value,
      location: userLocation(),
      available_quantity: event.target.quantity.value,
      rent_rates: JSON.stringify({
        day: event.target.rentday.value,
        week: event.target.rentweek.value,
        month: event.target.rentmonth.value,
      }),
      ref_deposit: event.target.refundable.value,
      owner: user.username,
      item_description: event.target.description.value,
      images: JSON.stringify(imageArray),
    };

    // <<<< manual add >>>>>
    // let product = {
    //   item_name: data.item_name,
    //   category: data.category,
    //   location: userLocation(),
    //   available_quantity: data.available_quantity,
    //   rent_rates: data.rent_rates,
    //   ref_deposit: data.ref_deposit,
    //   owner: user.username,
    //   item_description: "",
    //   images: data.images,
    // };

    console.log(product);

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
          <Form.Control
            className={styles.CustomField + " mb-2"}
            as="textarea"
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
          />
          <Row>
            <Col>
              <Form.Text className="d-flex flex-column text-muted">
                <span>Added URLs:</span>
                {imageArray.map((url, index) => (
                  <span key={index}>{url}</span>
                ))}
              </Form.Text>
            </Col>
            <Col xs={2} className="d-flex justify-content-end">
              <div>
                <AppBtnWhite type="button" onClick={() => addImage()}>
                  Add URL
                </AppBtnWhite>
              </div>
            </Col>
          </Row>
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

UserAddItems.propTypes = {};

UserAddItems.defaultProps = {};

export default UserAddItems;
