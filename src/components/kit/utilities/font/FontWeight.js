import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../common/syntax-highlighter";

const FontWeight = () => {
	const code = `
  .font-weight {
    @include m(thin) {
      font-weight: getFontWeight("thin") !important;
    }
    @include m(normal) {
      font-weight: getFontWeight("normal") !important;
    }
    @include m(bold) {
      font-weight: getFontWeight("bold") !important;
    }
    @include m(bolder) {
      font-weight: getFontWeight("bolder") !important;
    }
  }
  //
  <div className="font-weight--thin">This is thin text.</div>
  <div className="font-weight--bold">This is bold text.</div>
  <div className="font-weight--normal">This is normal text.</div>
  <div className="font-weight--bolder">This is bolder text.</div>
  `;
	return (
		<>
			<div className="content-block">
				<h3>Font Weight</h3>
				<p className="page__brief">
					We can quickly change the font-weight or font style of the text with these utilities. Similar to the color variables, we have the array of variables defined for font weights in the <code>_font.scss</code>
					file.In the <code>_font.scss</code> file, we can find the list of objects defined for the different font weights. Then this object (<code>$fontWeight</code>) is being used in different functions and mixins to apply font weights as needed. We can add, remove, or customized font weights from the variables files as required
					<br />
					We have the <code>getFontWeight()</code> function to apply font-weight properties.
				</p>
			</div>
			<div className="content-block">
				<h4>getFontWeight()</h4>
				<p className="page__brief">This function is used to get the font-weight from the fontWeight map dot notation as the key argument.</p>
				<p className="page__brief">
					<strong>Syntax: getFontWeight($key:””, $map:$fontWeight)</strong>
				</p>
				<p className="page__brief">
					<code>$key</code> is required and $map is an optional argument.$key argument value should be provided from <code>_fonts.scss</code> files from the variable folder where the $fontWeight variable is declared.
				</p>
			</div>
			<div className="content-block">
				<strong>Usage</strong>
				<div className="usage-markup-preview">
					<Tabs>
						<TabList>
							<Tab>Preview</Tab>
							<Tab>Code</Tab>
						</TabList>
						<TabPanel>
							<div className="preview-container">
								<div className="font-weight--thin">This is thin text.</div>
								<div className="font-weight--bold">This is bold text.</div>
								<div className="font-weight--normal">This is normal text.</div>
								<div className="font-weight--bolder">This is bolder text.</div>
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
			</div>
		</>
	);
};

export default FontWeight;
