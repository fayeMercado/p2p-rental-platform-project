import React from "react";
import { Row, Col, Container } from "react-bootstrap"
import "./LandingPage.css"
import "./ProgressBar.css"

import owner1 from "../Images/owner1.png"
import owner2 from "../Images/owner2.png"
import owner3 from "../Images/owner3.png"
import owner4 from "../Images/owner4.png"
import rent1 from "../Images/rent1.png"
import rent2 from "../Images/rent2.png"
import rent3 from "../Images/rent3.png"
import rent4 from "../Images/rent4.png"


const HowPage = () => (
    <Container>
        <Container>
            <div style={{ textAlign: "center", color: "#184D47" }} className="span--how fontMain">How does <span className="span--handeeman">Handeeman</span> work ?</div>
        </Container>
        <Container className="landing--border w-75 mt-3" >
            <div style={{ textAlign: "center", color: "#184D47" }} className="span--text">if you are the <span className="span--owner">owner</span> and wants to <span className="span--owner">rent out your items</span></div>
            <div class="stepper-wrapper mt-3">
                <div class="stepper-item completed">
                    <div class="step-counter">1</div>
                </div>
                <div class="stepper-item completed">
                    <div class="step-counter">2</div>
                </div>
                <div class="stepper-item completed">
                    <div class="step-counter">3</div>
                </div>
                <div class="stepper-item completed">
                    <div class="step-counter">4</div>
                </div>
            </div>
            <Row className="landing--margin">
                <Col className="col--align">
                    <div>
                        <img src={owner1} />
                        <p className="paragraph--text">Set up your <span className="span--textmute">Handeeman</span> account</p>
                    </div>
                </Col>
                <Col className="col--align">
                    <div>
                        <img src={owner2} />
                        <p className="paragraph--text">Upload your item's photo and add details</p>
                    </div>
                </Col>
                <Col className="col--align">
                    <div>
                        <img src={owner3} />
                        <p className="paragraph--text">Set your rental rates (daily, weekly and/or monthly)</p>
                    </div>
                </Col>
                <Col className="col--align">
                    <div>
                        <img src={owner4} />
                        <p className="paragraph--text">Earn money on renting out tru <span className="span--textmute">Handeeman</span></p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className="landing--border w-75 mt-4">
            <div style={{ textAlign: "center", color: "#184D47" }} className="span--text">if you are the <span className="span--renter">renter</span> and wants to <span className="span--renter">rent</span> items</div>
            <div class="stepper-wrapper mt-3">
                <div class="stepper-item completed">
                    <div class="step-counter">1</div>
                </div>
                <div class="stepper-item completed">
                    <div class="step-counter">2</div>
                </div>
                <div class="stepper-item completed">
                    <div class="step-counter">3</div>
                </div>
                <div class="stepper-item completed">
                    <div class="step-counter">4</div>
                </div>
            </div>
            <Row className="landing--margin">
                <Col className="col--align">
                    <div>
                        <img src={rent1} />
                        <p className="paragraph--text">Set up your <span className="span--textmute">Handeeman</span> account</p>
                    </div>
                </Col>
                <Col className="col--align">
                    <div>
                        <img src={rent2} />
                        <p className="paragraph--text">Browse for available items to rent</p>
                    </div>
                </Col>
                <Col className="col--align">
                    <div>
                        <img src={rent3} />
                        <p className="paragraph--text">Request rentals from verified owners</p>
                    </div>
                </Col>
                <Col className="col--align">
                    <div>
                        <img src={rent4} />
                        <p className="paragraph--text">Save money by renting on <span className="span--textmute">Handeeman</span></p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container >
);


export default HowPage;