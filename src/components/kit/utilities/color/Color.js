import React from "react";
import { Syntax } from "../../../common/syntax-highlighter";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Color = () => {
	const colorMap = `
  $colorMap: (
    "white": (
      "base": $white,
    ),
    "black": (
      "base": $black
    ),
    "primary": (
      "base": $primary,
      "dark": darken($primary, 10%),
      "light": lighten($primary, 10%),
    ),
    "secondary": (
      "base": $secondary,
      "dark": darken($secondary, 10%),
      "light": lighten($secondary, 10%),
    ),
    "danger": (
      "base": $red,
      "light": lighten($red, 10%),
      "dark": darken($red, 10%),
    ),
    "success": (
      "base": $green,
      "light": lighten($green, 10%),
      "dark": darken($green, 10%),
    ),
    "grey": (
      'base': #f5f8fa,
      'disabled': #e6ebee,
      '1': #f9f9f9,
      '2': #b8c2c8,
      '3': #959595,
      '4': #979797,
      '5': rgba($black, 0.2),
      '6': rgba($black, 0.6)
    )
  );
        `;

	const code = `
    .color-box-1 p {
      color:getColor("primary.base")
    }
    .color-box-2 p {
      color:getColor("danger.light")
    }
    .color-box-3 p {
      color:getColor("grey.4")
    }
            
        `;

	return (
		<div className="page">
			<div className="title-area">
				<h2 className="page__title">Colors</h2>
				<p className="lead-text">Include color with utility classes and add your own custom color.</p>
				<div className="content-block">
					<h3>Colors</h3>
					<p className="page__brief">
						We can use color utility to colorize text, background, buttons. We can customize and add new colors as needed in <code>_color.scss</code> file. We can find the list of color variables and an array of color palettes in <code> _color.scss</code> file. Any additional colors or changes in existing colors can be done in this file. The array of colors (<code>$colorMap</code>) is being used in different functions and mixins to apply colors as needed.
					</p>
					<div className="code-preview">
						<Syntax language="scss">{colorMap}</Syntax>
					</div>
				</div>
				<div className="content-block">
					<h3>Classes</h3>
					<table className="ui-html-table">
						<tr>
							<td>
								<code>color-primary--base</code>
							</td>
							<td>
								<p className="color-primary--base mb-0x">This is primary text</p>
							</td>
						</tr>
						<tr>
							<td>
								<code>color-secondary--light</code>
							</td>
							<td>
								<p className="color-secondary--light mb-0x">This is secondary text</p>
							</td>
						</tr>
						<tr>
							<td>
								<code>color-danger--base</code>
							</td>
							<td>
								<p className="color-danger--base mb-0x">This is danger (Red) text</p>
							</td>
						</tr>
						<tr>
							<td>
								<code>color-grey--4</code>
							</td>
							<td>
								<p className="color-grey--4 mb-0x">This is grey text</p>
							</td>
						</tr>
						<tr>
							<td>
								<code>...</code>
							</td>
							<td>...</td>
						</tr>
					</table>
				</div>
				<div className="content-block">
					<h4>getColor()</h4>
					<p className="page__brief">
						In <code>_helpers.scss</code> file, we can find a function
						<code>getColor()</code>, which maps the color from the color map variable in
						<code>_color.scss</code>.The <code>getColor()</code> function then helps us to easily apply color from the variable file to the respective component as necessary.
					</p>
				</div>
				<div className="content-block">
					<h4>Examples:</h4>
					<p className="page__brief">Syntax for this function:</p>
					<div className="usage-markup-preview">
						<Tabs>
							<TabList>
								<Tab>Preview</Tab>
								<Tab>Code</Tab>
							</TabList>
							<TabPanel>
								<div className="preview-container">
									<div className="color-box-1">
										<p>This is a color sample text.</p>
									</div>
									<div className="color-box-2">
										<p>This is a color sample text.</p>
									</div>
									<div className="color-box-3">
										<p>This is a color sample text.</p>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className="preview-container">
									<div className="d-flex">
										<div className="code-preview">
											<Syntax language="css">{code}</Syntax>
										</div>
									</div>
								</div>
							</TabPanel>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Color;
