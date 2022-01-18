import React, { useState } from "react";

function Accordion(props) {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };
  return (
    <section className="accordion">
      <div className="accordion-header" onClick={onClick}>
        <h4 className="accordion-title">{props.title}</h4>
        <button className="accordion-btn">
          <i
            className={`fas fa-2x fa-chevron-up accordion-icon ${
              open ? "" : "accordion-icon-active"
            }`}
          ></i>
        </button>
      </div>
      <div className={`accordion-body ${open ? "accordion-body-active" : ""}`}>
        <p className="accordion-body-content">{props.content}</p>
      </div>
    </section>
  );
}

export default Accordion;
