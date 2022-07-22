import React from "react";
import { Row, Col, Container, Button, Badge } from "react-bootstrap";
import "./LandingPage.css";

import HeaderMain from "../Headers/HeaderMain";
import HeaderLanding from "../Headers/HeaderLanding";
import WhyPage from "./WhyPage";
import HowPage from "./HowPage";
import ReviewPage from "./ReviewPage";
import ScrollTop from "./ScrollTop";
import Footer from "../Footer/Footer";

import main from "../Images/main.png";

const MainPage = () => (
  <>
    <HeaderMain />
    <Container className="mt-5">
      <Row>
        <Col>
          <p className="text--what">What is</p>
          <p className="text--handeeman">Handeeman?</p>
          <p>
            Handeeman is a peer-to-peer rental marketplace that makes better use
            of products that are lying about in a garage, storage facility,
            retail space, or warehouse. We give people and businesses a new way
            to make money and save money by renting instead of purchasing
            short-term necessities.
          </p>
          <p>
            Instead of keeping your useful items in storage, why not rent it
            out? And rather than buying things you will only need for a a short
            while, why not simply rent it? It saves you money. It earns you
            money. It’s super convenient. Plus, you get to save mother earth!
            Handeeman will get you whatever you need, whenever you neet it!
          </p>
        </Col>
        <Col className="text-center">
          <img src={main} alt="" />
        </Col>
      </Row>
    </Container>
    <WhyPage />
    <HowPage />
    <ReviewPage />
    <ScrollTop />
    <Footer />
  </>
);

export default MainPage;
