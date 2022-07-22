import React from "react";
import { Container } from "react-bootstrap";
import notFoundImage from "../Images/notfound.png";

const PageNotFound = () => {
  return (
    <div>
      <Container className="d-flex flex-column align-items-center justify-content-center w-100 mt-5">
        <img src={notFoundImage} alt="" width="15%" />
        <h2 className="m-3">Page not found.</h2>
      </Container>
    </div>
  );
};

export default PageNotFound;
