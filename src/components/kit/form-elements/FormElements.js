import React from "react";

import FormDefault from "./FormDefault";
import ButtonVariants from "../button/ButtonVariants";
import ButtonSize from "../button/ButtonSize";
import ButtonShadow from "../button/ButtonShadow";

const FormElements = () => {
  return (
    <div className="page mt--11x">
      <div className="title-area  mb--7x">
        <h2 className="title title--largest title--dark font-weight--thin mb--4x">
          Form Elements
        </h2>
        <p className="lead-text">Examples for creating form elements</p>
      </div>

      <div className="mb--11x">
        <FormDefault />
      </div>

      <div className="mb--11x">
        <ButtonVariants />
      </div>

      <div className="mb--11x">
        <ButtonSize />
      </div>

      <div className="mb--11x">
        <ButtonShadow />
      </div>
    </div>
  );
};

export default FormElements;
