import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="card-img" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-desc">{props.desc}</p>
        <a className="btn btn-primary" href="llll">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
