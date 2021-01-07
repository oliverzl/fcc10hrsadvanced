import React, { useEffect } from "react";

//this is beside the index.js

const Modal = ({ modalContent }) => {
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
