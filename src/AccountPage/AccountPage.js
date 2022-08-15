import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import styles from "./AccountPage.module.css";

import { Outlet, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import HeaderProducts from "../Headers/HeaderProducts";
import { AppButtonWGY } from "../CustomComponents/AppButton";
import Footer from "../Footer/Footer";
import juan from "../Images/juan.png";

const AccountPage = () => {
  const navigate = useNavigate();
  // const params
  const [activeButton, setActiveButton] = useState("");
  const clickHandler = (e) => {
    navigate(`/account/${e.target.name}`);
  };

  useEffect(() => {
    const urlLast = window.location.pathname.split("/")[2];
    setActiveButton(urlLast);
  }, [window.location.pathname]);

  return (
    <Container fluid className={styles.AccountPage} data-testid="AccountPage">
      <HeaderProducts />
      <Container>
        <Row className="align-items-center">
          <Breadcrumb className="pt-3">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/account/profile">Account</Breadcrumb.Item>
            <Breadcrumb.Item active>My Cart</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row className="gap-2">
          <Col xs={3}>
            <Container className="mb-4 text-center">
              <img src={juan} alt="" width="75%" />
              <h3 className="mt-3">Juan dela Cruz</h3>
              <p>Username</p>
            </Container>
            <Stack className="gap-3">
              <AppButtonWGY
                active={activeButton === "profile"}
                type="button"
                name="profile"
                onClick={(e) => clickHandler(e)}
              >
                PROFILE
              </AppButtonWGY>
              <AppButtonWGY
                active={activeButton === "cart"}
                type="button"
                name="cart"
                onClick={(e) => clickHandler(e)}
              >
                MY CART
              </AppButtonWGY>
              <AppButtonWGY
                active={activeButton === "purchases"}
                type="button"
                name="purchases"
                onClick={(e) => clickHandler(e)}
              >
                MY PURCHASES
              </AppButtonWGY>
              <AppButtonWGY
                active={activeButton === "wishlist"}
                type="button"
                name="wishlist"
                onClick={(e) => clickHandler(e)}
              >
                WISHLIST
              </AppButtonWGY>
            </Stack>
          </Col>
          <Col className="pl-0">
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
};

AccountPage.propTypes = {};

AccountPage.defaultProps = {};

export default AccountPage;
