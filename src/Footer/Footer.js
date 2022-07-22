import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
} from "../Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <Container className={styles.Footer} data-testid="Footer">
      <div className={styles.Logo}>Handeeman</div>
      <Container className="d-flex justify-content-between mt-3 mb-5">
        <div className="vr"></div>
        <Link to="/">HOME</Link>
        <div className="vr"></div>
        <Link to="/about">ABOUT</Link>
        <div className="vr"></div>
        <Link to="/faqs">FAQs</Link>
        <div className="vr"></div>
        <Link to="/terms-of-use">TERM & CONDITIONS</Link>
        <div className="vr"></div>
        <Link to="/rental-policy">RENTAL POLICY</Link>
        <div className="vr"></div>
        <Link to="/contact-us">CONTACT US</Link>
        <div className="vr"></div>
      </Container>
      <Container className="d-flex align-items-center justify-content-center gap-3">
        <IconFacebook defaultColor="#184D47" hoverColor="#81B395" />
        <IconInstagram defaultColor="#184D47" hoverColor="#81B395" />
        <IconTwitter defaultColor="#184D47" hoverColor="#81B395" />
        <IconLinkedin defaultColor="#184D47" hoverColor="#81B395" />
      </Container>
      <Container className="text-center mt-2 fontMain">
        ©Copyright {currentYear} - Handeeman
      </Container>
    </Container>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
