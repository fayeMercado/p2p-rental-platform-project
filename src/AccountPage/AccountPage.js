import React from "react";
import PropTypes from "prop-types";
import styles from "./AccountPage.module.css";

import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import HeaderProducts from "../Headers/HeaderProducts";
import { MyCart } from "./MyCart";
import { AppButtonWhite } from "../CustomComponents/AppButton";

const AccountPage = () => (
  <Container fluid className={styles.AccountPage} data-testid="AccountPage">
    <HeaderProducts />
    <Container>
      <Row className="align-items-center">
        <Breadcrumb className="pt-3">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/account/profile">Account</Breadcrumb.Item>
          <Breadcrumb.Item active>My Cart</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
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
            <AppButtonWhite type="button">PROFILE</AppButtonWhite>
            <AppButtonWhite type="button">MY CART</AppButtonWhite>
            <AppButtonWhite type="button">MY PURCHASES</AppButtonWhite>
            <AppButtonWhite type="button">WISHLIST</AppButtonWhite>
          </Stack>
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  </Container>
);

AccountPage.propTypes = {};

AccountPage.defaultProps = {};

export default AccountPage;
