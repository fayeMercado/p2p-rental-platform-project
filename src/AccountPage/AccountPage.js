import React from "react";
// import PropTypes from "prop-types";
import styles from "./AccountPage.module.css";

import { Outlet, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import HeaderProducts from "../Headers/HeaderProducts";
import { AppButtonWhite } from "../CustomComponents/AppButton";
import Footer from "../Footer/Footer";

const AccountPage = () => {
  const navigate = useNavigate();
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
              <img
                src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"
                alt=""
                width="75%"
              />
              <h3 className="mt-3">Juan dela Cruz</h3>
              <p>Username</p>
            </Container>
            <Stack className="gap-3">
              <AppButtonWhite
                type="button"
                onClick={() => navigate("/account/profile")}
              >
                PROFILE
              </AppButtonWhite>
              <AppButtonWhite
                type="button"
                onClick={() => navigate("/account/my-cart")}
              >
                MY CART
              </AppButtonWhite>
              <AppButtonWhite
                type="button"
                onClick={() => navigate("/account/purchases")}
              >
                MY PURCHASES
              </AppButtonWhite>
              <AppButtonWhite
                type="button"
                onClick={() => navigate("/account/wishlist")}
              >
                WISHLIST
              </AppButtonWhite>
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
