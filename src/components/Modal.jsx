import React, { useState } from "react";

function Modal() {
  const [isShow, setIsShow] = useState(false);

  const onShowModal = () => {
    setIsShow(!isShow);
  };

  const onClose = () => {
    setIsShow(false);
  };

  return (
    <>
      <div className={`modal ${isShow ? "modal-active" : ""}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5>Hello</h5>
            <i
              className="fas fa-times fa-2x alert-btn-close"
              onClick={onClose}
            ></i>
          </div>
          <p className="modal-body">Modal body text goes here.</p>
          <div className="modal-footer">Footer</div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={onShowModal}>
        Show Modal
      </button>
    </>
  );
}

export default Modal;
