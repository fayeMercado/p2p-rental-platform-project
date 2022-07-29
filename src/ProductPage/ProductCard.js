import React from "react";
import styles from "./ProductPage.module.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { IconStarEmpty } from "../Icons.js";

import { getItem } from "../dataProduct";
import { useNavigate, useParams } from "react-router-dom";

export function ProductCard(props) {
  let item = props.itemCode;
  const navigate = useNavigate();
  const categoryUrl = useParams().category;
  return (
    <Card
      className={styles.ProductCard + " ProductTitle"}
      onClick={() => navigate(`/products/item/${item.code}`)}
    >
      <Card.Img
        variant="top"
        src={item.images[0]}
        className={styles.CardImage}
      />
      <Card.Body className="d-flex flex-column justify-content-between align-items-center text-center">
        <Card.Title className={styles.ProductTitle}>{item.itemName}</Card.Title>
        <Container>
          <Container fluid className="p-0 ">
            <div className="text-center py-2">
              <span>Rate: </span>
              <span className="fw-bold">{item.rent.day}</span>
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
