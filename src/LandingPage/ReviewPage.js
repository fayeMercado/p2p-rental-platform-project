import React from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import "./LandingPage.css";

import juan from "../Images/juan.png";
import maria from "../Images/maria.png";
import { AppButtonYellow } from "../CustomComponents/AppButton";

const ReviewPage = () => (
  <Container className="mt-5">
    <div
      style={{ textAlign: "center", fontWeight: "500", fontSize: "35px" }}
      className="fontMain mb-4"
    >
      What our customers have to say.
    </div>
    <Container className="w-75">
      <Row>
        <Col className="landing--border fontMain">
          <Row style={{ marginTop: "35px", marginBottom: "15px" }}>
            <Col>
              <img src={juan} />
            </Col>
            <Col>
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  color: "#184D47",
                }}
              >
                Juan Dela Cruz
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  fontStyle: "italic",
                }}
              >
                This site works so well and is convenient to use. I am able to
                save money by renting instead of buying a brand new one.
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>
        <Col className="landing--border fontMain">
          <Row style={{ marginTop: "35px", marginBottom: "15px" }}>
            <Col>
              <img src={maria} />
            </Col>
            <Col>
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  color: "#184D47",
                }}
              >
                Maria Clara
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  fontStyle: "italic",
                }}
              >
                I love this site and these products and now I love this customer service! Thank you!
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <div style={{ textAlign: "center" }} className="fontMain mt-4">
      <p style={{ margin: "0px", fontWeight: "500", fontSize: "35px" }}>
        Question? Comments?
      </p>
      <p style={{ fontWeight: "400", fontSize: "16px" }}>
        We love to hear from you! Fill out the contact form below and we'll get
        back to you within 48 hours.
      </p>
    </div>
    <Container className="landing--border w-50 mt-3">
      <Row className="mt-2">
        <Col>
          <Form.Control type="name" placeholder="Name*" />
        </Col>
        <Col>
          <Form.Control type="email" placeholder="Email*" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col></Col>
        <Col md={8}>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a message here"
              id="floatingTextarea"
              style={{ height: "150px" }}
            ></textarea>
            <label for="floatingTextarea">Message*</label>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <div className="d-flex justify-content-center mt-1 mb-3">
        <AppButtonYellow type="button">Send</AppButtonYellow>
      </div>
    </Container>
  </Container>
);

export default ReviewPage;
