import React from "react";
import "../styles/Modal.css";

import { FaCheckCircle } from "react-icons/fa";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="model-header">
          <h4 className="modal-title">
            <p>
              <span>
                <FaCheckCircle />
              </span>
              Success
            </p>
          </h4>
        </div>
        <div className="modal-body">
          <p>Sign up is correct</p>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
