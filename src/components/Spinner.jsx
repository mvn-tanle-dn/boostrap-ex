import React from "react";

function Spinner(props) {
  return <div className={`${props.type} ${props.type}-${props.color}`}></div>;
}

export default Spinner;
