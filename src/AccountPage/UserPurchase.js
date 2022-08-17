import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AccountPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { AppBtnWhite, AppBtnYellow } from "../CustomComponents/AppButton";

function UserPurchase() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [imageArray, setImageArray] = useState([]);

  return (
    <Container className="">
      <Row className={styles.CartItem + " d-flex gap-2"}>
        <Col xs={2} className="d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
            alt=""
            width="100%"
            style={{ objectFit: "contain" }}
          />
        </Col>
        <Col>
          <p className="mb-2">Item Name: N/A</p>
          <p className="mb-2">Owner: N/A</p>
          <p className="mb-2">Rent Dates: N/A</p>
          <p className="mb-2">Rent Duration: N/A</p>
          <p className="mb-2">Shipping Method: N/A</p>
          <p>Delivery/Pick-up Address: N/A</p>
        </Col>
        <Col xs={2}>Total Payment</Col>
        <Col
          xs={2}
          className="d-flex align-items-center text-center"
          style={{ backgroundColor: "#f5e79d" }}
        >
          Pending approval from owner
        </Col>
      </Row>
    </Container>
  );
}

UserPurchase.propTypes = {};

UserPurchase.defaultProps = {};

export default UserPurchase;
