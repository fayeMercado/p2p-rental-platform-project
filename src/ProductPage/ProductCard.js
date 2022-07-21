import React from "react";
import styles from "./ProductPage.module.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { IconStarEmpty } from "../Icons.js";

export function ProductCard() {
  return (
    <Col xs={3}>
      <Card style={{ width: "100%", height: "375px" }} className="ProductTitle">
        <Card.Img
          variant="top"
          src="https://p.rmjo.in/productSquare/9lx10mln-500x500.jpg"
        />
        <Card.Body className="d-flex flex-column justify-content-between align-items-center text-center">
          <Card.Title className={styles.ProductTitle}>
            Card Title that may occupy 2 or more lines
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
