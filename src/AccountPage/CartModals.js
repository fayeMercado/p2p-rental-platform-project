import React from "react";
import Modal from "react-bootstrap/Modal";
import { AppBtnWhite, AppBtnYellow } from "../CustomComponents/AppButton";

export function ModalForDelete(handleClose, deleteConfirm) {
  return (
    <div>
      <Modal.Body>
        Are you sure you want to delete this item from your cart?
      </Modal.Body>
      <Modal.Footer>
        <AppBtnWhite type="button" onClick={handleClose}>
          No
        </AppBtnWhite>
        <AppBtnYellow type="button" onClick={deleteConfirm}>
          Yes
        </AppBtnYellow>
      </Modal.Footer>
    </div>
  );
}

export function ModalForPaymentConfirmation(
  handleClose,
  confirmation,
  setConfirmation,
  confirmed,
  setConfirmed,
  checkoutCart,
  refresh,
  setRefresh
) {
  const confirmPayment = () => {
    checkoutCart();
    setConfirmation(false);
    setConfirmed(true);
    setRefresh(!refresh);
  };

  const resetModal = () => {
    handleClose();
    setTimeout(() => {
      setConfirmation(true);
      setConfirmed(false);
    }, 2000);
    window.location.reload();
  };
  return (
    <div>
      {confirmation && (
        <div>
          <Modal.Body>Confirm payment?</Modal.Body>
          <Modal.Footer>
            <AppBtnWhite type="button" onClick={handleClose}>
              No
            </AppBtnWhite>
            <AppBtnYellow type="button" onClick={() => confirmPayment()}>
              Confirm
            </AppBtnYellow>
          </Modal.Footer>
        </div>
      )}
      {confirmed && (
        <div>
          <Modal.Body>Checkout succesful!</Modal.Body>
          <Modal.Footer>
            <AppBtnWhite type="button" onClick={() => resetModal()}>
              Close
            </AppBtnWhite>
          </Modal.Footer>
        </div>
      )}
    </div>
  );
}
