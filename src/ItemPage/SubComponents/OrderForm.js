import React from "react";
import styles from "../ItemPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { IconCalendar } from "../../Icons.js";
import { AppBtnWhite, AppBtnYellow } from "../../CustomComponents/AppButton";
import { DayPicker } from "react-day-picker";

export function OrderForm(
  range,
  footer,
  setRange,
  disabledDays,
  output,
  duration,
  item,
  handleShow,
  onSubmit
) {
  return (
    <Form
      className="p-0 h-100 d-flex flex-column justify-content-between"
      onSubmit={onSubmit}
    >
      <div className="d-flex flex-column gap-2">
        <Form.Group
          as={Row}
          controlId="shippingMethod"
          key="shipping-method"
          required
        >
          <Col xs={3}>Shipping :</Col>
          <Col className="d-flex justify-content-between">
            <Form.Check
              type="radio"
              id="pick-up"
              label="Pick-up"
              name="method"
            />
            <Form.Check
              type="radio"
              id="delivery"
              label="Door-to-door delivery"
              name="method"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} key="start-date">
          <Form.Label column xs={3} htmlFor="startDate">
            Rent Date :
          </Form.Label>
          <Col>
            <OverlayTrigger
              trigger="click"
              key="right"
              placement="right"
              rootClose
              overlay={
                <Popover id={`popover-positioned-right`}>
                  <Popover.Body>
                    <DayPicker
                      fixedWeeks
                      mode="range"
                      defaultMonth={new Date()}
                      selected={range}
                      footer={footer}
                      onSelect={setRange}
                      disabled={disabledDays}
                    />
                  </Popover.Body>
                </Popover>
              }
            >
              <Row style={{ marginRight: "0rem" }}>
                <Col>
                  <Form.Control
                    className={styles.CustomField}
                    style={{ backgroundColor: "#f7f7fa" }}
                    type="text"
                    id="rentDate"
                    value={output}
                    readOnly
                  />
                </Col>
                <Col xs={1} className="p-0 d-flex align-items-center">
                  <IconCalendar defaultColor="#184D47" hoverColor="#81B395" />
                </Col>
              </Row>
            </OverlayTrigger>
            <div className="my-2">
              This item will be rented for <b>{duration}</b>{" "}
              {duration > 1 ? "days" : "day"}.
            </div>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="d-flex align-items-center">
          <Form.Label column xs={3} htmlFor="ItemQuantity">
            Quantity :
          </Form.Label>
          <Col xs={2}>
            <Form.Control
              className={styles.CustomField}
              type="number"
              id="ItemQuantity"
              defaultValue={1}
              min={1}
              max={item.available_quantity}
            />
          </Col>
        </Form.Group>
      </div>

      <Container className="d-flex justify-content-center mt-3 gap-3">
        <AppBtnWhite type="button">Add to Wishlist</AppBtnWhite>
        <AppBtnYellow type="submit" onClick={handleShow}>
          Add to Cart
        </AppBtnYellow>
      </Container>
    </Form>
  );
}
