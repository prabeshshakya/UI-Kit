import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../common/syntax-highlighter";

const JustifyContent = () => {
	const code = `
    
<div className="d-flex justify-content-start mb-3x">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
</div>
<div className="d-flex justify-content-end mb-3x">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
</div>
<div className="d-flex justify-content-center mb-3x">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
</div>
<div className="d-flex justify-content-between mb-3x">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
</div>
<div className="d-flex justify-content-around mb-3x">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
</div>

    `;
	return (
		<div className="content-block">
			<h2>Justify content</h2>
			<p className="page__brief">
				Use <code>justify-content</code> utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if <code>flex-direction: column</code>). Choose from start (browser default), <code>end</code>, <code>center</code>, <code>between</code>, <code>around</code>.
			</p>

			<p>
				Following are the variations for <code>justify-content</code>:
			</p>
			<ul className="list-style">
				<li>
					<code>justify-content-start:</code> Align items from the start (Browser default)
				</li>
				<li>
					<code>justify-content-end:</code> Align items from the end
				</li>
				<li>
					<code>justify-content-center:</code> Align items at the center
				</li>
				<li>
					<code>justify-content-between:</code> Displays the flex items with space between the lines:
				</li>
				<li>
					<code>justify-content-around:</code> Displays the flex items with space before, between, and after the lines
				</li>
				<li>
					<code>justify-content-initial:</code> Sets this property to its default value.
				</li>
				<li>
					<code>justify-content-inherit:</code> Inherits this property from its parent element.
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
								<h5 className="text-center">start</h5>
								<div className="d-flex justify-content-start mb-3x">
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">End</h5>
								<div className="d-flex justify-content-end mb-3x">
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">Center</h5>
								<div className="d-flex justify-content-center mb-3x">
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">Between</h5>
								<div className="d-flex justify-content-between mb-3x">
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">Around</h5>
								<div className="d-flex justify-content-around mb-3x">
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
							<code>justify-content-initial</code>
						</td>
						<td>
							<code>justify-content-initial-sm</code>
						</td>
						<td>
							<code>justify-content-initial-md</code>
						</td>
						<td>
							<code>justify-content-initial-lg</code>
						</td>
						<td>
							<code>justify-content-initial-xl</code>
						</td>
						<td>
							<code>justify-content-initial-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>justify-content-start</code>
						</td>
						<td>
							<code>justify-content-start-sm</code>
						</td>
						<td>
							<code>justify-content-start-md</code>
						</td>
						<td>
							<code>justify-content-start-lg</code>
						</td>
						<td>
							<code>justify-content-start-xl</code>
						</td>
						<td>
							<code>justify-content-start-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>justify-content-end</code>
						</td>
						<td>
							<code>justify-content-end-sm</code>
						</td>
						<td>
							<code>justify-content-end-md</code>
						</td>
						<td>
							<code>justify-content-end-lg</code>
						</td>
						<td>
							<code>justify-content-end-xl</code>
						</td>
						<td>
							<code>justify-content-end-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>justify-content-center</code>
						</td>
						<td>
							<code>justify-content-center-sm</code>
						</td>
						<td>
							<code>justify-content-center-md</code>
						</td>
						<td>
							<code>justify-content-center-lg</code>
						</td>
						<td>
							<code>justify-content-center-xl</code>
						</td>
						<td>
							<code>justify-content-center-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>justify-content-between</code>
						</td>
						<td>
							<code>justify-content-between-sm</code>
						</td>
						<td>
							<code>justify-content-between-md</code>
						</td>
						<td>
							<code>justify-content-between-lg</code>
						</td>
						<td>
							<code>justify-content-between-xl</code>
						</td>
						<td>
							<code>justify-content-between-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>justify-content-around</code>
						</td>
						<td>
							<code>justify-content-around-sm</code>
						</td>
						<td>
							<code>justify-content-around-md</code>
						</td>
						<td>
							<code>justify-content-around-lg</code>
						</td>
						<td>
							<code>justify-content-around-xl</code>
						</td>
						<td>
							<code>justify-content-around-xxl</code>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
export default JustifyContent;
