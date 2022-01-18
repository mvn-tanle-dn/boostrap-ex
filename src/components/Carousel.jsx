import React from "react";

function Carousel() {
  return (
    <div className="carousel">
      <i className="fas fa-chevron-left fa-2x carousel-prev"></i>
      <ul className="carousel-dots">
        <li className="carousel-dot"></li>
        <li className="carousel-dot"></li>
        <li className="carousel-dot"></li>
      </ul>
      <div className="carousel-wrapper">
        <ul className="carousel-main">
          <li className="carousel-item">
            <img
              className="carousel-img"
              src="https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              alt="carousel-item-1"
            />
          </li>
          <li className="carousel-item">
            <img
              className="carousel-img"
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80"
              alt="carousel-item-2"
            />
          </li>
          <li className="carousel-item">
            <img
              className="carousel-img"
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="carousel-item-2"
            />
          </li>
        </ul>
      </div>
      <i className="fas fa-chevron-right fa-2x carousel-next"></i>
    </div>
  );
}

export default Carousel;
