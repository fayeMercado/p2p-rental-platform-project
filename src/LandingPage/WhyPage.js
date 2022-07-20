import React from "react";
import { Row, Col, Container } from "react-bootstrap"
import "./LandingPage.css"

import choose1 from "../Images/c1.png";
import choose2 from "../Images/c2.png";
import choose3 from "../Images/c3.png";
import choose4 from "../Images/c4.png";
import choose5 from "../Images/c5.png";
import choose6 from "../Images/c6.png";


const WhyPage = () => (
    <Container>
        <Container>
            <div style={{ textAlign: "center", color: "#184D47" }} className="fontMain">
                Why use <span className="span--handeeman">Handeeman</span><span className="span--question">? </span>
            </div>
        </Container>
        <Container className="landing--border w-75" >
            <Row className="landing--margin">
                <Col className="circle">
                    <div>
                        <img src={choose1} />
                        <div>
                            <p className="card--title">
                                Save money
                            </p>
                            <p className="card--body">
                                Save money by renting instead of buying new items for short-term use
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="circle">
                    <div>
                        <img src={choose2} />
                        <div>
                            <p className="card--title">
                                Make Money
                            </p>
                            <p className="card--body">
                                Monetized your unused or under-utilized items
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="circle">
                    <div>
                        <img src={choose3} />
                        <div>
                            <p className="card--title">
                                Go green
                            </p>
                            <p className="card--body">
                                Reduce landfill waste by renting (instead of buy-then-throw) infrequently used items
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="landing--margin">
                <Col className="circle">
                    <div>
                        <img src={choose4} />
                        <div>
                            <p className="card--title">
                                Convenient
                            </p>
                            <p className="card--body">
                                Look for what you need in one place
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="circle">
                    <div>
                        <img src={choose5} />
                        <div>
                            <p className="card--title">
                                Secure Transaction
                            </p>
                            <p className="card--body">
                                Worry-free transactions for both owner & renter
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="circle">
                    <div>
                        <img src={choose6} />
                        <div>
                            <p className="card--title">
                                Pick-up or Delivery
                            </p>
                            <p className="card--body">
                                Have the option to pick-up or delivery your items
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container>
);


export default WhyPage;
