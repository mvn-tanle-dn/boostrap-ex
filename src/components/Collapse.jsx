import React, { useState } from "react";

function Collapse(props) {
  const [isShow, setIsShow] = useState(false);
  const onClick = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={onClick}>
        Toggle with collapse
      </button>
      <div
        className={`collapse mt-3 ${isShow ? "collapse-active" : ""}`}
        id={props.id}
      >
        <div className="card">
          <div className="card-body">{props.content}</div>
        </div>
      </div>
    </>
  );
}

export default Collapse;
