import React from "react";
import styles from "./ProductPage.module.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { IconStarEmpty } from "../Icons.js";

import { getItem } from "../dataProduct";
import { useNavigate } from "react-router-dom";

export function ProductCard(itemCode) {
  let item = getItem(itemCode);
  const navigate = useNavigate();
  return (
    <Col xs={3}>
      <Card
        className={styles.ProductCard + " ProductTitle"}
        onClick={() => navigate(`/products/${item.code}`)}
      >
        <Card.Img variant="top" src={item.images[0]} />
        <Card.Body className="d-flex flex-column justify-content-between align-items-center text-center">
          <Card.Title className={styles.ProductTitle}>
            {item.itemName}
          </Card.Title>
          <Card.Text>
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
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
