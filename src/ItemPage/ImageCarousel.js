import React, { useState } from "react";
import styles from "./ItemPage.module.css";
import Container from "react-bootstrap/Container";

export function ImageCarousel(item) {
  const images = item.images && JSON.parse(item.images);
  const [currentImage, setCurrentImage] = useState(0);

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
            src={images && images[currentImage]}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </div>
      </Container>
      <Container className="px-3 py-2">
        <div
          className={styles.collection + " d-inline-flex p-2"}
          style={{ width: "100%", overflow: "auto", padding: "0 24px" }}
        >
          {images?.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentImage(index);
              }}
            >
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
}
