import React, { useEffect } from "react";

//this is beside the index.js

//component modal, depends on the action that was performed, adding item, removing item, or if the user needs a reminder that a value must be inside the input field
const Modal = ({ closeModal, modalContent }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
