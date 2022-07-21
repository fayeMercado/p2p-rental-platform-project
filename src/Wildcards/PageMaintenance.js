import React from "react";
import { Container } from "react-bootstrap";
import maintenanceImage from "../Images/maintenance.png";

const PageMaintenance = () => {
  return (
    <div>
      <Container className="d-flex flex-column align-items-center justify-content-center w-100 mt-5">
        <img src={maintenanceImage} alt="" width="15%" />
        <h2 className="m-3">This page is under maintenance.</h2>
      </Container>
    </div>
  );
};

export default PageMaintenance;
