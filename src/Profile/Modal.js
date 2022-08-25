import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { AppButtonYellow, AppButtonGreen } from "../CustomComponents/AppButton";
import { nanoid } from "nanoid";

export function Signup(show, handleClose) {
  const provinces = require("philippines/provinces");
  const cities = require("philippines/cities");
  const navigate = useNavigate();
  const cart_id = nanoid(10);

  // const [cart_id, setCartId] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [block, setBlock] = useState("");
  const [city, setCity] = useState("");
  const [filteredCity, setFilteredCity] = useState([]);
  const [province, setProvince] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getProvince = (entry) => {
    let find = provinces?.find((province) => province.name === entry);
    return find?.key;
  };

  const filterCity = (entry) => {
    let key = getProvince(entry);
    return cities?.filter((city) => city.province === key);
  };

  useEffect(() => {
    setFilteredCity(filterCity(province));
    setCity("Select City");
  }, [province]);

  // console.log({ city: city, province: province });

  async function signUp(event) {
    setCity(event.target.city.value);
    let address = JSON.stringify({
      city: event.target.city.value,
      province: province,
    });
    let item = {
      cart_id,
      firstname,
      lastname,
      address,
      mobile,
      username,
      email,
      password,
    };
    // console.log(item);
    event.preventDefault();
    // setFirstName("");
    // setLastName("");
    // setAddress("");
    // setMobile("");
    // setUsername("");
    // setEmail("");
    // setPassword("");

    let result = await fetch("https://p2p-database.herokuapp.com/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    navigate("/");
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ backgroundColor: "rgba(0,0,0, 0.7)" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>REGISTER A NEW ACCOUNT</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => signUp(e)}>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoFocus
                />
              </Form.Group>
            </Col>
            <Col xs={6} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  autoFocus
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <label htmlFor="province">Select Province</label>
            <Form.Select
              aria-label="Select Province"
              controlId="province"
              name="province"
              defaultValue="Select Province"
              onChange={(e) => setProvince(e.target.value)}
            >
              <option disabled>--</option>
              {provinces.map((province) => (
                <option key={province.key} value={province.name}>
                  {province.name}
                </option>
              ))}
            </Form.Select>

            <label htmlFor="city" className="mt-3">
              Select City/Municipality
            </label>
            <Form.Select
              aria-label="Select City/Municipality"
              controlId="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option disabled>--</option>
              {filteredCity.length &&
                filteredCity.map((entry) => (
                  <option key={entry.key} value={entry.name}>
                    {entry.name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="09XXXXXXXXX"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="on"
              autoFocus
            />
          </Form.Group>
          <AppButtonGreen type="submit">Register</AppButtonGreen>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
                <AppButtonGreen
                    type="button"
                    onClick={props.onHide}>
                    Register
                </AppButtonGreen>
            </Modal.Footer> */}
    </Modal>
  );
}

export function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(email, password);
  //     setEmail("");
  //     setPassword("");
  // };

  // async function logIn(event) {
  //   console.log(email, password);
  //   event.preventDefault();
  //   setEmail("");
  //   setPassword("");

  //   let item = { email, password };
  //   let result = await fetch(
  //     "https://p2p-database.herokuapp.com/login",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(item),
  //     }
  //   );
  //   result = await result.json();
  //   localStorage.setItem("user-info", JSON.stringify(result));
  //   navigate("/products/all");
  // }
  function handleSubmit(e) {
    const item = { email, password };
    e.preventDefault();
    fetch("https://p2p-database.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(item),
    }).then(async (response) => {
      if (!response.ok) {
        const validation = await response.json();
        console.log(validation.errors);
      } else {
        const result = await response.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/products/all");
      }
    });
  }

  // const [loginInfo, setLoginInfo] = useState({
  //     email: "",
  //     password: "",
  // });

  // const handleChange = (event) => {
  //     setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(loginInfo);
  //     setLoginInfo({ email: "", password: "" });
  // };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ backgroundColor: "rgba(0,0,0, 0.7)" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">LOG IN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // value={loginInfo.email}
              // name="email"
              // onChange={handleChange}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // value={loginInfo.password}
              // name="password"
              // onChange={handleChange}
              autoComplete="on"
              autoFocus
              required
            />
          </Form.Group>
          <AppButtonYellow type="submit">Login</AppButtonYellow>
        </Form>
      </Modal.Body>
      {/* <span
                style={{
                    fontWeight: '700',
                    fontSize: '12px',
                    color: '#184D47',
                    marginLeft: 'auto',
                }}
            >Forgot Password</span>
            <Modal.Footer>
                <AppButtonYellow
                    type="button"
                    onSubmit={handleSubmit}
                >
                    Login
                </AppButtonYellow>
            </Modal.Footer> */}
    </Modal>
  );
}
