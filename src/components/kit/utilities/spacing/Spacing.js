import React from "react";
import { Syntax } from "../../../common/syntax-highlighter";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Color = () => {
	return (
		<div className="page">
			<div className="title-area">
				<h2 className="page__title">Spacing</h2>
				<p className="lead-text">Sass Starter kit has a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>
				<div className="content-block">
					<h3>Margin and Padding</h3>
					<p className="page__brief">
						We can assign responsive friendly <code>margin</code> or <code>padding</code> values to an element or subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. The spacing value can range from <code>-16px</code> to <code>80px</code>.This range can be changed in <code>_spacing.scss</code> file.
					</p>
				</div>
				<div className="content-block">
					<h4>Notation</h4>
					<p className="page__brief">
						The classes are named using the format
						<code>[property] - [sides] - [size]</code>
						for <code>xs</code> and
						<code>[property] - [sides] - [size] - [breakpoint]</code>
						for <code> sm, md, lg, xl, and xxl.</code>
					</p>
				</div>
				<div className="content-block">
					<h5>
						Where <em>property</em> is one of :
					</h5>

					<ul>
						<li>
							<code>m</code>- for classes that set the <code>margin</code>
						</li>
						<li>
							<code>p</code>- for classes that set the <code>padding</code>
						</li>
					</ul>

					<h5>
						Where <em>sides</em> is one of :
					</h5>

					<ul>
						<li>
							<code>t</code>- for classes that set <code>margin-top</code> or <code>padding-top</code>
						</li>
						<li>
							<code>b</code>- for classes that set <code>margin-bottom</code> or <code>padding-bottom</code>
						</li>
						<li>
							<code>l</code>- for classes that set <code>margin-left</code> or <code>padding-left</code>
						</li>
						<li>
							<code>r</code>- for classes that set <code>margin-right</code> or <code>padding-right</code>
						</li>
						<li>
							<code>x</code>- for classes that set <code>*-right</code> or <code>*-right</code>
						</li>
						<li>
							<code>y</code>- for classes that set <code>*-top</code> or <code>*-bottom</code>
						</li>
						<li>
							<em>blank</em> - for classes that set a <code>margin</code> or <code>padding</code> on all 4 sides of the element.
						</li>
					</ul>

					<h5>
						Where <em>size</em> is one of:
					</h5>

					<ul>
						<li>
							<code>0</code> - for classes that eliminate the <code>margin</code> or <code>padding</code> by setting it to <code>0</code>
						</li>
						<li>
							<code>1</code> - for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacing * 1</code>
						</li>
						<li>
							<code>2</code> - for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacing * 2</code>
						</li>
						<li>
							<code>3</code> - for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacing * 3</code>
						</li>
						<li>
							<code>4</code> - for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacing * 4</code>
						</li>
						<li>
							<code>...</code> - for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacing * ...</code>
						</li>
						<li>
							<code>20</code> - for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacing * 20</code>
						</li>
						<li>
							<code>auto</code> - for classes that set the <code>margin</code> to <code>auto</code>
						</li>
					</ul>

					<p className="page__brief">Syntax for this function:</p>
					<div className="usage-markup-preview">
						<Tabs>
							<TabList>
								<Tab>Preview</Tab>
								<Tab>Code</Tab>
							</TabList>
							<TabPanel>
								<div className="preview-container">
									<div className="color-box">
										<p>This is a color sample text.</p>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className="preview-container">
									<div className="d-flex">
										<div className="code-preview"></div>
									</div>
								</div>
							</TabPanel>
						</Tabs>
					</div>
				</div>

				<div className="content-block">
					<h4>Variables</h4>
					<p className="page__brief">
						These are the color variables defined in the <code>_color.scss</code> file. You can also include your own custom color code as per your need.
					</p>
					<div className="code-preview"></div>
				</div>
			</div>
		</div>
	);
};

export default Color;
