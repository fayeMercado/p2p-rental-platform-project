import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";

export function OrderForm(item, handleShow, rates) {
  const [duration, setDuration] = useState(0);
  const [range, setRange] = useState([]);
  const productCode = useParams().code;
  const disabledDays = [
    { from: new Date(1980, 0, 1), to: new Date() },
    // { from: new Date(2022, 7, 20), to: undefined },
    // { from: new Date(2022, 7, 25), to: new Date(new Date(2022, 7, 25)) },
  ];
  const [output, setOutput] = useState("");

  useEffect(() => {
    let nextDay = new Date(range?.from).getTime() + 86400000;
    if (!range?.from) {
      setDuration(0);
      setOutput("Pick a date");
    } else if (range?.from) {
      setDuration(1);
      setOutput(
        range.from?.toLocaleDateString() +
          " - " +
          new Date(nextDay).toLocaleDateString()
      );
      if (range.to) {
        setDuration((range.to - range.from) / 86400000);
        setOutput(
          range.from?.toLocaleDateString() +
            " - " +
            range.to?.toLocaleDateString()
        );
      }
    }
  }, [range?.from, range?.to]);

  const dateFormat = (date) => {
    return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
  };

  // console.log(dateFormat(range?.from));

  const submitOrder = (event) => {
    event.preventDefault();

    const totalRent = () => {
      let days = duration;
      let mo = 0;
      let week = 0;
      let day = 0;
      if (duration >= 30) {
        mo = Math.floor(duration / 30);
        days %= 30;
        if (days >= 7) {
          week = Math.floor(days / 7);
          day = days % 7;
        } else {
          day = days % 7;
        }
      } else if (days >= 7) {
        week = Math.floor(days / 7);
        day = days % 7;
      } else {
        day = days;
      }

      let rent_mo = rates?.month * mo;
      let rent_week = rates?.week * week;
      let rent_day = rates?.day * day;

      return rent_mo + rent_week + rent_day;
    };

    let order = {
      cart_id: "C0000001",
      product_code: productCode,
      shipping_method: event.target.method.value,
      shipping_rates: 0,
      quantity: event.target.ItemQuantity.value,
      rent_fromDate: range?.from && dateFormat(range?.from),
      rent_toDate: range?.to ? dateFormat(range?.to) : null,
      rent_duration: duration,
      total_rent: totalRent() * event.target.ItemQuantity.value,
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(order);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/cart", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  // return console.log(addDays(range.from, 3));
  // console.log(Date.parse("2022-08-17"));
  // console.log(new Date(Date.parse(range?.from)));

  return (
    <Form
      className="p-0 h-100 d-flex flex-column justify-content-between"
      onSubmit={(event) => submitOrder(event)}
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
              value="pick-up"
            />
            <Form.Check
              type="radio"
              id="delivery"
              label="Door-to-door delivery"
              name="method"
              value="delivery"
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
                      required
                      min={1}
                      selected={range}
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
              This item will be rented for <b>{duration}</b>
              {duration > 1 ? " days" : " day"}.
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
