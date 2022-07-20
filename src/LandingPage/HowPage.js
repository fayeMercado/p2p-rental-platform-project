import React from "react";
import { Row, Col, Container } from "react-bootstrap"
import "./LandingPage.css"

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
            <div>How does <span className="span--handeeman">Handeeman</span> work</div>
        </Container>
        <Container className="nice" >
            <div>if you are the <span className="span--owner">owner</span> and wants to <span className="span--owner">rent out your items</span></div>
            <Row>
                <Col>
                    <div>
                        <img src={owner1} />
                        <p>Set up your <span>Handeeman</span> account</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={owner2} />
                        <p>Upload your item's photo and add details</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={owner3} />
                        <p>Set your rental rates (daily, weekly and/or monthly)</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={owner4} />
                        <p>Earn money on renting out tru <span>Handeeman</span></p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className="nice" >
            <div>if you are the <span className="span--renter">renter</span> and wants to <span className="span--renter">rent</span> items</div>
            <Row>
                <Col>
                    <div>
                        <img src={rent1} />
                        <p>Set up your <span>Handeeman</span> account</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={rent2} />
                        <p>Browse for available items to rent</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={rent3} />
                        <p>Request rentals from verified owners</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={rent4} />
                        <p>Save money by renting on <span>Handeeman</span></p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container>
);


export default HowPage;