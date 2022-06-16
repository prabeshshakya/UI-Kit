import React from "react";

import ButtonDefault from "./ButtonDefault";
import ButtonVariants from "./ButtonVariants";
import ButtonSize from "./ButtonSize";
import ButtonShadow from "./ButtonShadow";

const Button = () => {
	return (
		<div className="page">
			<div className="title-area">
				<h2 className="page__title">Button</h2>
				<p className="lead-text">Create button with variety of Styles</p>
			</div>

			<div className="mb-11x">
				<ButtonDefault />
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

export default Button;
