import React, { useState } from "react";
import styles from "./ProductPage.module.css";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { IconStarEmpty, IconLocation } from "../Icons.js";

import { useNavigate } from "react-router-dom";

export function ProductCard(props) {
  let item = props.itemCode;
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <Card
      className={styles.ProductCard + " ProductTitle"}
      onClick={() => navigate(`/products/item/${item.code}`)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ height: "50%", padding: "0.75rem" }}>
        {hover && <div className={styles.ViewItem}>VIEW ITEM</div>}

        <Card.Img
          variant="top"
          src={JSON.parse(item.images)[0]}
          className={styles.CardImage}
          height="100%"
        />
      </div>

      <Card.Body className="d-flex flex-column align-items-center text-center pt-0">
        <Card.Title className={styles.ProductTitle}>
          {item.item_name}
        </Card.Title>
        <Container className="p-0">
          <div
            className="d-flex justify-content-center align-items-center gap-1"
            style={{ margin: "0", fontWeight: "500" }}
          >
            <IconLocation color="#184D47" /> {item.location}
          </div>
          <hr className="mt-2 mb-0 p-0" />
          <Container fluid className="p-0 ">
            <div className="text-center py-2">
              <p className="m-0">Rate starts at</p>
              <span style={{ fontSize: "1.25rem" }}>
                <span className="text-muted">&#8369;</span>
                <b>{JSON.parse(item.rent_rates).day.toLocaleString()}</b>
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
