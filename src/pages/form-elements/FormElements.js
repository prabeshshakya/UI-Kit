import React from "react";

import FormDefault from "./FormDefault";
import ButtonVariants from "../button/ButtonVariants";
import ButtonSize from "../button/ButtonSize";
import ButtonShadow from "../button/ButtonShadow";

const FormElements = () => {
	return (
		<div className="page">
			<div className="title-area">
				<h2 className="title">Form Elements</h2>
				<p className="lead-text">Examples for creating form elements</p>
			</div>

			<div className="mb-11x">
				<FormDefault />
			</div>

			<div className="mb-11x">
				<ButtonVariants />
			</div>

			<div className="mb-11x">
				<ButtonSize />
			</div>

			<div className="mb-11x">
				<ButtonShadow />
			</div>
		</div>
	);
};

export default FormElements;
