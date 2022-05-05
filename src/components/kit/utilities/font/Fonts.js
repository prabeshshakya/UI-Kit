import React from "react";
import FontSize from "./FontSize";
import FontWeight from "./FontWeight";

const Fonts = () => {
  return (
    <div className="page mt--11x">
      <div className="title-area  mb--7x">
        <h2 className="title title--largest title--dark font-weight--thin mb--4x">
          Fonts
        </h2>
        <p className="lead-text">
          Documentation for font weight and font size.
        </p>
        <FontSize />
        <FontWeight />
      </div>
    </div>
  );
};

export default Fonts;
