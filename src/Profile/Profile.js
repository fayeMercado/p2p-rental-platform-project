import React, { useState, useEffect } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import {
  AppButtonYellowP,
  AppButtonGreen,
} from "../CustomComponents/AppButton";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //     fetch("http://phplaravel-821102-2821130.cloudwaysapps.com/profile")
  //         .then((result) => result.json())
  //         .then((response) => console.log(response));
  // }, []);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user-info"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://phplaravel-821102-2821130.cloudwaysapps.com/profile"
      );
      let actualData = await response.json();

      console.log(actualData);
    }
    getData();
  }, []);

  function Edit() {
    navigate("/account/profile/edit");
  }

  return (
    <div>
      <Container className="d-flex flex-column align-items-center justify-content-center w-100 mt-5">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {items.firstname} {items.lastname}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">{items.email}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">{items.mobile}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">{items.address}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <AppButtonYellowP onClick={Edit}>Edit</AppButtonYellowP>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const ProfileEdit = () => {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("Juan Cruz");
  const [email, setEmail] = useState("jc@test.com");
  const [mobile, setMobile] = useState("09173248992");
  const [address, setAddress] = useState("CEB");
  const [show, setShow] = useState(false);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //     const items = JSON.parse(localStorage.getItem('user-info'));
  //     if (items) {
  //         setItems(items);
  //     }
  // }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function saveChanges() {
    // Need to put fetch here
    // Need modal like successful change or Are you sure you want to change?
    navigate("/account/profile");
  }

  return (
    <div>
      <Container className="d-flex flex-column align-items-center justify-content-center w-100 mt-5">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="text"
                    className="form-control"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Mobile</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="text"
                    className="form-control"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-9 text-secondary">
                  <AppButtonGreen onClick={handleShow}>
                    Save Changes
                  </AppButtonGreen>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to save changes you made to your profile?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
