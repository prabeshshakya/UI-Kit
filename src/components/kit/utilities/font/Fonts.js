import React from "react";
import FontSize from "./FontSize";
import FontWeight from "./FontWeight";

const Fonts = () => {
	return (
		<div className="page">
			<div className="title-area">
				<h2 className="page__title">Fonts</h2>
				<p className="lead-text">Documentation for font weight and font size.</p>
				<FontSize />
				<FontWeight />
			</div>
		</div>
	);
};

export default Fonts;
