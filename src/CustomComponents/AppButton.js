import React from "react";
import PropTypes from "prop-types";
import styles from "./AppButton.module.css";

export const AppButtonWhite = (props) => (
  <button
    className={styles.AppButtonWhite}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export const AppButtonYellow = (props) => (
  <button className={styles.AppButtonYellow} type={props.type}>
    {props.children}
  </button>
);

export const AppButtonGreen = (props) => (
  <button className={styles.AppButtonGreen} type={props.type}>
    {props.children}
  </button>
);
