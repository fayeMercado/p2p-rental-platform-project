import React from "react";
import { Row, Col, Container, Button, Badge } from "react-bootstrap"
import "./LandingPage.css"

import cycle from "../Images/cycle.png"


const MainPage = () => (
    <Container>
        <Row>
            <Col>
                <div>What is</div>
                <div>Handeeman</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Button variant="success" href="#" className="round" >
                    Button
                </Button>
                <Button variant="outline-success" href="#" className="round" >
                    Button
                </Button>
            </Col>
            <Col>
                <img src={cycle} />
            </Col>
        </Row>
    </Container>
);


export default MainPage;
