import React, { useState } from "react";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { AppButtonYellow, AppButtonGreen } from "../CustomComponents/AppButton"

export function Signup(props) {
    const provinces = require("philippines/provinces");
    const navigate = useNavigate();


    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    async function signUp(event) {

        let item = { firstname, lastname, address, mobile, email, password };
        event.preventDefault();
        console.log(item)
        setFirstName("");
        setLastName("");
        setAddress("");
        setMobile("");
        setEmail("");
        setPassword("");

        let result = await fetch("http://localhost:8000/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem('user-info', JSON.stringify(result));
        navigate("/");
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ backgroundColor: 'rgba(0,0,0, 0.7)' }}
        >
            <Modal.Header closeButton>
                <Modal.Title>REGISTER A NEW ACCOUNT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={signUp}>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-3" >
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
                            <Form.Group className="mb-3" >
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
                    <Form.Group className="mb-3" >
                        <Form.Label>Address</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        >
                            <option>Select Address</option>
                            {provinces.map((province) => (
                                <option key={province.key} value={province.key}>
                                    {province.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="09XXXXXXXXX"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
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
                    <AppButtonGreen
                        type="submit">
                        Register
                    </AppButtonGreen>
                </Form>
            </Modal.Body>
            {/* <Modal.Footer>
                <AppButtonGreen
                    type="button"
                    onClick={props.onHide}>
                    Register
                </AppButtonGreen>
            </Modal.Footer> */}
        </Modal >
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

    async function logIn(event) {
        console.log(email, password);
        event.preventDefault();
        setEmail("");
        setPassword("");

        let item = { email, password }
        let result = await fetch("http://localhost:8000/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json()
        localStorage.setItem('user-info', JSON.stringify(result))
        navigate("/products/all")
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
            style={{ backgroundColor: 'rgba(0,0,0, 0.7)' }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">LOG IN</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={logIn}>
                    <Form.Group className="mb-3" >
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
                    <Form.Group className="mb-3" >
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
                    <AppButtonYellow
                        type="submit"
                    >
                        Login
                    </AppButtonYellow>
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