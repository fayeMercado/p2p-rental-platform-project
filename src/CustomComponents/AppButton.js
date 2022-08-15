import React from "react";
// import PropTypes from "prop-types";
import styles from "./AppButton.module.css";

export const AppButtonWhite = (props) => (
  <button
    className={`${styles.AppButtonWhite} ${props.active && styles.active}`}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export const AppButtonYellow = (props) => (
  <button
    className={styles.AppButtonYellow}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export const AppButtonYellow100 = (props) => (
  <button
    className={styles.AppButtonYellow100}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export const AppButtonGreen = (props) => (
  <button
    className={styles.AppButtonGreen}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export const AppButtonWhiteGreen = (props) => (
  <button
    className={styles.WhiteGreen}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export const AppBtnWhite = (props) => (
  <button className={styles.White} type={props.type} onClick={props.onClick}>
    {props.children}
  </button>
);

export const AppBtnYellow = (props) => (
  <button className={styles.Yellow} type={props.type} onClick={props.onClick}>
    {props.children}
  </button>
);

export const AppBtnGreen = (props) => (
  <button className={styles.Green} type={props.type} onClick={props.onClick}>
    {props.children}
  </button>
);

export const AppButtonYellowP = (props) => (
  <button
    className={styles.AppButtonYellowP}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export const AppButtonWGY = (props) => (
  <button
    className={`${styles.WhiteGreenYellow} ${props.active && styles.active}`}
    name={props.name}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
