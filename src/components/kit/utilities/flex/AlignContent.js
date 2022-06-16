import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../common/syntax-highlighter";

const AlignContent = () => {
	const code = `
	//Align-content-start
	<div className="d-flex flex-wrap align-content-start mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>

	//Align-content-end
	<div className="d-flex flex-wrap align-content-end mb-3x">
		<div>Flex item</div>
		<div>Aligned flex item</div>
		<div>Flex item</div>
	</div>
	//Align-content-center
	<div className="d-flex flex-wrap align-content-center mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>
	//Align-content-between
	<div className="d-flex flex-wrap align-content-between mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>
	//Align-content-around
	<div className="d-flex flex-wrap align-content-around mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>
	//Align-content-stretch
	<div className="d-flex flex-wrap align-content-stretch mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>

    `;
	return (
		<div className="content-block">
			<h2>Align Content</h2>
			<p className="page__brief">The align-content property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines. There must be multiple lines of items for this property to have any effect.</p>

			<p>
				Following are the variations for <code>align-content</code>:
			</p>
			<ul className="list-style">
				<li>
					<code>align-content-stretch</code>: Lines are stretched to fit the container(Browser default)
				</li>
				<li>
					<code>align-content-center</code>: Lines are packed towards the center of the container
				</li>
				<li>
					<code>align-content-start</code>: Lines are packed towards the beginning of the container
				</li>
				<li>
					<code>align-content-end</code>: Lines are packed towards the end of the container
				</li>
				<li>
					<code>align-content-base</code>: Lines are packed towards the baseline of the container
				</li>
				<li>
					<code>align-content-between</code>: Lines are evenly distributed in the flex container
				</li>
				<li>
					<code>align-content-around</code>: Lines are evenly distributed in the flex container, with half-size spaces on either end
				</li>
				<li>
					<code>align-content-initial</code>: Sets this property to its default value
				</li>
				<li>
					<code>align-content-inherit</code>: Inherits this property from its parent element
				</li>
			</ul>

			<div className="usage-markup-preview">
				<Tabs>
					<TabList>
						<Tab>Preview</Tab>
						<Tab>Code</Tab>
					</TabList>
					<TabPanel>
						<div className="preview-container">
							<div className="example-row">
								<h5 className="text-center">Align-content-start</h5>
								<div className="d-flex flex-wrap align-content-start mb-3x" style={{ height: "150px" }}>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>

								<h5 className="text-center">Align-content-end</h5>
								<div className="d-flex flex-wrap align-content-end mb-3x" style={{ height: "150px" }}>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Aligned flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">Align-content-center</h5>
								<div className="d-flex flex-wrap align-content-center mb-3x" style={{ height: "150px" }}>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">Align-content-between</h5>
								<div className="d-flex flex-wrap align-content-between mb-3x" style={{ height: "150px" }}>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">Align-content-around</h5>
								<div className="d-flex flex-wrap align-content-around mb-3x" style={{ height: "150px" }}>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">Align-content-stretch</h5>
								<div className="d-flex flex-wrap align-content-stretch mb-3x" style={{ height: "150px" }}>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
							</div>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="preview-container">
							<div className="d-flex">
								<div className="code-preview">
									<Syntax language="html">{code}</Syntax>
								</div>
							</div>
						</div>
					</TabPanel>
				</Tabs>
			</div>

			<h4>Available Classes</h4>

			<table className="table mb-4x">
				<thead>
					<tr>
						<th scope="col">
							xs
							<br />
							<span>&lt;576px</span>
						</th>
						<th scope="col">
							sm
							<br />
							<span>≥576px</span>
						</th>
						<th scope="col">
							md
							<br />
							<span>≥768px</span>
						</th>
						<th scope="col">
							lg
							<br />
							<span>≥992px</span>
						</th>
						<th scope="col">
							xl
							<br />
							<span>≥1200px</span>
						</th>
						<th scope="col">
							xxl
							<br />
							<span>≥1400px</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<code>align-content-start</code>
						</td>
						<td>
							<code>align-content-start-sm</code>
						</td>
						<td>
							<code>align-content-start-md</code>
						</td>
						<td>
							<code>align-content-start-lg</code>
						</td>
						<td>
							<code>align-content-start-xl</code>
						</td>
						<td>
							<code>align-content-start-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-end</code>
						</td>
						<td>
							<code>align-content-end-sm</code>
						</td>
						<td>
							<code>align-content-end-md</code>
						</td>
						<td>
							<code>align-content-end-lg</code>
						</td>
						<td>
							<code>align-content-end-xl</code>
						</td>
						<td>
							<code>align-content-end-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-center</code>
						</td>
						<td>
							<code>align-content-center-sm</code>
						</td>
						<td>
							<code>align-content-center-md</code>
						</td>
						<td>
							<code>align-content-center-lg</code>
						</td>
						<td>
							<code>align-content-center-xl</code>
						</td>
						<td>
							<code>align-content-center-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-between</code>
						</td>
						<td>
							<code>align-content-between-sm</code>
						</td>
						<td>
							<code>align-content-between-md</code>
						</td>
						<td>
							<code>align-content-between-lg</code>
						</td>
						<td>
							<code>align-content-between-xl</code>
						</td>
						<td>
							<code>align-content-between-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-stretch</code>
						</td>
						<td>
							<code>align-content-stretch-sm</code>
						</td>
						<td>
							<code>align-content-stretch-md</code>
						</td>
						<td>
							<code>align-content-stretch-lg</code>
						</td>
						<td>
							<code>align-content-stretch-xl</code>
						</td>
						<td>
							<code>align-content-stretch-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-auto</code>
						</td>
						<td>
							<code>align-content-auto-sm</code>
						</td>
						<td>
							<code>align-content-auto-md</code>
						</td>
						<td>
							<code>align-content-auto-lg</code>
						</td>
						<td>
							<code>align-content-auto-xl</code>
						</td>
						<td>
							<code>align-content-auto-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-initial</code>
						</td>
						<td>
							<code>align-content-initial-sm</code>
						</td>
						<td>
							<code>align-content-initial-md</code>
						</td>
						<td>
							<code>align-content-initial-lg</code>
						</td>
						<td>
							<code>align-content-initial-xl</code>
						</td>
						<td>
							<code>align-content-initial-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-inherit</code>
						</td>
						<td>
							<code>align-content-inherit-sm</code>
						</td>
						<td>
							<code>align-content-inherit-md</code>
						</td>
						<td>
							<code>align-content-inherit-lg</code>
						</td>
						<td>
							<code>align-content-inherit-xl</code>
						</td>
						<td>
							<code>align-content-inherit-xxl</code>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
export default AlignContent;
