import React from "react";
import styles from "./ProductPage.module.css";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { IconStarEmpty } from "../Icons.js";

import { useNavigate, useParams } from "react-router-dom";

export function ProductCard(props) {
  let item = props.itemCode;
  const navigate = useNavigate();
  return (
    <Card
      className={styles.ProductCard + " ProductTitle"}
      onClick={() => navigate(`/products/item/${item.code}`)}
    >
      <Card.Img
        variant="top"
        src={item.images[0]}
        className={styles.CardImage}
        height="50%"
      />
      <Card.Body className="d-flex flex-column align-items-center text-center pt-0">
        <Card.Title className={styles.ProductTitle}>{item.itemName}</Card.Title>
        <Container className="p-0">
          <p style={{ margin: "0", fontWeight: "500", fontStyle: "italic" }}>
            {item.location}
          </p>
          <hr className="mt-2 mb-0 p-0" />
          <Container fluid className="p-0 ">
            <div className="text-center py-2">
              <p className="m-0">Rate starts at</p>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                {item.rent.day}
              </span>
              <span className="text-muted">/day</span>
            </div>
            <div className="d-flex justify-content-center">
              <IconStarEmpty />
              <IconStarEmpty />
              <IconStarEmpty />
              <IconStarEmpty />
              <IconStarEmpty />
            </div>
          </Container>
        </Container>
      </Card.Body>
    </Card>
  );
}
