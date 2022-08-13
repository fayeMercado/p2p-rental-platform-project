import React from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { AppButtonYellow, AppButtonGreen } from "../CustomComponents/AppButton"

export function Signup(props) {
    const provinces = require("philippines/provinces");

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
                <Form>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="First Name"
                                    autoFocus
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Last Name"
                                    autoFocus
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Address</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                        >
                            <option>Select Address</option>
                            {provinces.map((province) => (
                                <option key={province.key} value={province.key}>
                                    {province.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="09XXXXXXXXX"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <AppButtonGreen
                    type="button"
                    onClick={props.onHide}>
                    Register
                </AppButtonGreen>
            </Modal.Footer>
        </Modal>
    );
}




export function Login(props) {
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
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <span
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
                    onClick={props.onHide}>
                    Login
                </AppButtonYellow>
            </Modal.Footer>
        </Modal>
    );
}