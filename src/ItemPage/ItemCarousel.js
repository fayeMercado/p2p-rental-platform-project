import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ItemPage.module.css";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import { getItem } from "../dataProduct";

const ItemCarousel = (props) => {
  let params = useParams();
  let item = getItem(parseInt(params.code, 10));
  const [currentImage, setCurrentImage] = useState(0);
  const ImageCollection = item.images;

  return (
    <Container
      className="p-0"
      style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}
    >
      <Container className="p-3" style={{ height: "300px" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={ImageCollection[currentImage]}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </div>
      </Container>
      <Container className="px-3 py-2">
        <div
          className="d-inline-flex p-2"
          style={{ width: "100%", overflow: "auto", padding: "0 24px" }}
        >
          {ImageCollection.map((image, index) => (
            <div key={index} onClick={() => setCurrentImage(index)}>
              <div
                style={{
                  width: "100px",
                  height: "75px",
                  margin: "0 3px",
                  padding: "5px",
                  border: "1px solid #eeeeee",
                }}
              >
                <img
                  src={image}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default ItemCarousel;
