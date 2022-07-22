import React from "react";
import styles from "./ProductPage.module.css";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { IconStarEmpty } from "../Icons.js";

import { getItem } from "../dataProduct";

export function ProductCard(itemCode) {
  let params = useParams();
  let item = getItem(itemCode);
  return (
    <Col xs={3}>
      <Card style={{ width: "100%", height: "375px" }} className="ProductTitle">
        <Card.Img
          variant="top"
          src="https://p.rmjo.in/productSquare/9lx10mln-500x500.jpg"
        />
        <Card.Body className="d-flex flex-column justify-content-between align-items-center text-center">
          <Card.Title className={styles.ProductTitle}>
            {item.itemName}
          </Card.Title>
          <Card.Text>
            <Container fluid className="p-0 ">
              <div className="text-center py-2">
                <span>Price</span>
                <span className="text-muted">/day</span>
              </div>
              <Stack direction="horizontal" className="d-flex ">
                <IconStarEmpty />
                <IconStarEmpty />
                <IconStarEmpty />
                <IconStarEmpty />
                <IconStarEmpty />
              </Stack>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
