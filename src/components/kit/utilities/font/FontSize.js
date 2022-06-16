import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../common/syntax-highlighter";

const FontSize = () => {
	const code = `
  <div className="title--largest">This is largest text.</div>
  <div className="title--large">This is large text.</div>
  <div className="title--medium">This is medium text.</div>
  <div className="title--small">This is small text.</div>
  <div className="title--smallest">This is smallest text.</div>
  <div className="title--dark">This is dark text.</div>
  `;

	const cssUsages = `
  //sass for generated class
  .title {
    @include m(largest) {
      font-size: getFontSize("32");
      font-weight: 700;
    }
    @include m(large) {
      font-size: getFontSize("20");
      font-weight: 700;
    }
    @include m(medium) {
      font-size: getFontSize("18");
      font-weight: 600;
    }
    @include m(small) {
      font-size: getFontSize("16");
      font-weight: 700;
    }
    @include m(smaller) {
      font-size: getFontSize("14");
      font-weight: 700;
    }
    @include m(smallest) {
      font-size: getFontSize("12");
      font-weight: 700;
    }
    @include m(dark) {
      color: getColor("black.base");
    }
  }
  `;

	return (
		<>
			<div className="content-block">
				<h3>Font Size</h3>
				<p className="page__brief">
					We can use the font size utility to quickly change the font size of the text. Similar to the color variables, we have the array of variables defined for font sizes in the _font.scss file.In the
					<code> _font.scss</code> file, we can find the list of objects defined for the different sizes. Then this object (<code>$fontSize</code>) is being used in different functions and mixins to apply font sizes as needed. We can add or remove font sizes from the variables files as required.
					<br />
					We have the <code>getFontSize()</code> function to apply font size properties.
				</p>
			</div>
			<div className="content-block">
				<h4>getFontSize()</h4>
				<p className="page__brief">This function is used to get the font size from the fontSize map dot notation as the key argument.</p>
				<p className="page__brief">
					<strong>Syntax: getFontSize($key:””, $map:get(“font”,$fontSize))</strong>
				</p>
				<p className="page__brief">
					Here <code>$key</code> is a required argument and $map is where it gets the font string key where it has various key with font-size and line-height nested key in it.
				</p>
			</div>
			<div className="content-block">
				<h4>Usage</h4>
				<div className="usage-markup-preview">
					<Tabs>
						<TabList>
							<Tab>Preview</Tab>
							<Tab>Code</Tab>
						</TabList>
						<TabPanel>
							<div className="preview-container">
								<div className="title--largest mb-3x">This is largest text.</div>
								<div className="title--large mb-3x">This is large text.</div>
								<div className="title--medium mb-3x">This is medium text.</div>
								<div className="title--small mb-3x">This is small text.</div>
								<div className="title--smallest mb-3x">This is smallest text.</div>
								<div className="title--dark mb-3x">This is dark text.</div>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="preview-container">
								<div className="d-flex">
									<div className="code-preview">
										<Syntax>{code}</Syntax>
									</div>
								</div>
							</div>
						</TabPanel>
					</Tabs>
				</div>

				<h4>CSS Usages</h4>
				<div className="code-preview">
					<Syntax language="scss">{cssUsages}</Syntax>
				</div>
			</div>
		</>
	);
};

export default FontSize;
