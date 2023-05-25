import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion__head" onClick={() => setIsActive(!isActive)}>
        <a href="javascript:void(0)" className="accordion__title">
          {title}
        </a>
        <span className="accordion__icon">{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <p className="accordion__body">{content}</p>}
    </div>
  );
};

export default Accordion;
