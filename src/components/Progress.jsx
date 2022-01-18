import React from "react";

function Progress(props) {
  const value = parseInt(props.value);

  return (
    <div className="progress">
      <div
        className={`progress-bar bg-${props.color}`}
        style={{
          width: `${value > 100 || value < 0 ? 0 : value}%`,
        }}
      ></div>
    </div>
  );
}

export default Progress;
