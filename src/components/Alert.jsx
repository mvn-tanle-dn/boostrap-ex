import React, { useState } from "react";

Alert.defaultProps = {
  color: "default",
};

function Alert(props) {
  const [close, setClose] = useState(true);

  const onClose = () => {
    setClose(true);
  };

  const onShow = () => {
    setClose(false);
  };

  return (
    <>
      <p className={`alert alert-${props.color} ${close ? "hidden" : ""}`}>
        <span>{props.content}</span>
        <i className="fas fa-times fa-2x alert-btn-close" onClick={onClose}></i>
      </p>
      <button className="btn btn-outline-primary" onClick={onShow}>
        Show alert
      </button>
    </>
  );
}

export default Alert;
