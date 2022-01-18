import React, { useState } from "react";

function Offcanvas() {
  const [isShow, setIsShow] = useState(false);

  const onShow = () => {
    setIsShow(true);
  };

  const onClose = () => {
    setIsShow(false);
  };

  return (
    <>
      <div className={`offcanvas-wrapper ${isShow ? "offcanvas-active" : ""}`}>
        <div className="offcanvas">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Offcanvas</h5>
            <i
              className="fas fa-times fa-2x alert-btn-close"
              onClick={onClose}
            ></i>
          </div>
          <p className="offcanvas-body">
            Content for the offcanvas goes here. You can place just about any
            Bootstrap component or custom elements here.
          </p>
        </div>
      </div>
      <button className="btn btn-primary" onClick={onShow}>
        Show offcanvas
      </button>
    </>
  );
}

export default Offcanvas;
