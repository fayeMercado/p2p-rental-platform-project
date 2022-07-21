import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ItemPage.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";

const ItemCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const ImageCollection = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://m.media-amazon.com/images/I/51BOsNxvFuL.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  ];
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
            backgroundImage: `url(${ImageCollection[currentImage]})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></div>
      </Container>
      <Container className="px-3 py-2">
        <div
          className="d-inline-flex p-2"
          style={{ width: "100%", overflowX: "auto", padding: "0 24px" }}
        >
          {ImageCollection.map((image, index) => (
            <div key={index} onClick={() => setCurrentImage(index)}>
              <div
                style={{
                  width: "100px",
                  height: "75px",
                  margin: "0 6px",
                  backgroundImage: `url("${image}")`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              ></div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default ItemCarousel;
