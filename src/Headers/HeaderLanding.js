import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Container, Card, Form, InputGroup, Button, Stack } from "react-bootstrap"
import styles from "./Headers.module.css";
import choose1 from "./images/c1.png";
import choose2 from "./images/c2.png";
import choose3 from "./images/c3.png";
import choose4 from "./images/c4.png";
import choose5 from "./images/c5.png";
import choose6 from "./images/c6.png";
import owner1 from "./images/owner1.png"
import owner2 from "./images/owner2.png"
import owner3 from "./images/owner3.png"
import owner4 from "./images/owner4.png"
import rent1 from "./images/rent1.png"
import rent2 from "./images/rent2.png"
import rent3 from "./images/rent3.png"
import rent4 from "./images/rent4.png"

const HeaderLanding = () => (
  <div className={styles.Headers} data-testid="Headers">
    <Container>
      <Stack direction="horizontal" gap={3}>
        <div>Handeeman</div>
        <div className="bg-light border ms-auto">Log in</div>
        <div className="bg-light border">Sign Up</div>
      </Stack>
      <div>
        Placeholder for short description or tagline
      </div>
    </Container>
    <Container>
      <div>
        Search for items to rent near you. . .
      </div>
      <Row>
        <Col xs={3}>
          <Form.Select aria-label="Default select example">
            <option>Select location (optional)</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <InputGroup>
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </Col>
        <Col md="auto">
          or
        </Col>
        <Col md="auto">
          <Button variant="warning">Explore</Button>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          <div>What is</div>
          <div>Handeeman</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        <Col>
          <h1>Hello 1</h1>
        </Col>
      </Row>
    </Container>
    <Container>
      <div>
        Why use <span className="span--handeeman">Handeeman</span>?
      </div>
    </Container>
    <Container className={styles.nice} >
      <Row>
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
      <Row>
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
    <Container>
      <div>How does <span className="span--handeeman">Handeeman</span> work</div>
    </Container>
    <Container className={styles.nice} >
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
    <Container className={styles.nice} >
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
  </div>
);

HeaderLanding.propTypes = {};

HeaderLanding.defaultProps = {};

export default HeaderLanding;
