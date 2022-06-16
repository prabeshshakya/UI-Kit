import React from "react";

import Filestructure from "./Filestructure";

const Introduction = () => {
	return (
		<>
			<div className="page">
				<div className="title-area">
					<h2 className="page__title">Introduction</h2>
					<p className="lead-text">Sass Starter kit intro.</p>
					<p className="page__content">
						Sass (Syntactically Awesome Style Sheets) is a stylesheet language that gets compiled into css. It allows us to use variables, nested rules and more which is css compatible. Sass helps to organize large stylesheets and makes it easy to use within a project. You can find the detailed documentation of SASS in the given link
						<a href="https://sass-lang.com/documentation" target="_blank">
							https://sass-lang.com/documentation.
						</a>
						<br />
						<br />
						SCSS is also backward compatible. It can be used to write older version CSS as well.
					</p>
				</div>
			</div>
			<Filestructure />
		</>
	);
};

export default Introduction;
