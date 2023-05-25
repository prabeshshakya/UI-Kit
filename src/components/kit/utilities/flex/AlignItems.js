import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../common/syntax-highlighter";

const AlignItems = () => {
	const code = `
	<div className="d-flex align-items-start mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>

	<div className="d-flex align-items-end mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>
	
	<div className="d-flex align-items-center mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>
	
	<div className="d-flex align-items-base mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>

	<div className="d-flex align-items-stretch">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>
	

    `;
	return (
		<div className="content-block">
			<h2>Align Items</h2>
			<p className="page__brief">
				Use <code>align-items</code> utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if <code>flex-direction: column</code>). Choose from <code>start</code>, <code>end</code>, <code>center</code>, <code>baseline</code>, or <code>stretch</code> (browser default).
			</p>

			<p>
				Following are the variations for <code>align-items</code>:
			</p>
			<ul className="list-style">
				<li>
					<code>align-items-stretch:</code> Items are stretched to fit the container(Browser default)
				</li>
				<li>
					<code>align-items-center:</code> Items are positioned at the center of the container
				</li>
				<li>
					<code>align-items-start:</code> Items are positioned at the beginning of the container
				</li>
				<li>
					<code>align-items-end:</code> Items are positioned at the end of the container
				</li>
				<li>
					<code>align-items-base:</code> Items are positioned at the baseline of the container
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
								<h5 className="text-center">Start</h5>
								<div className="d-flex align-items-start mb-3x" style={{ height: "100px" }}>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">End</h5>
								<div className="d-flex align-items-end mb-3x" style={{ height: "100px" }}>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">Center</h5>
								<div className="d-flex align-items-center mb-3x" style={{ height: "100px" }}>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">Baseline</h5>
								<div className="d-flex align-items-base mb-3x" style={{ height: "100px" }}>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
									<div className="eg-box">Flex item</div>
								</div>

								<h5 className="text-center">Stretch</h5>
								<div className="d-flex align-items-stretch" style={{ height: "100px" }}>
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
							<code>align-items-start</code>
						</td>
						<td>
							<code>align-items-sm-start</code>
						</td>
						<td>
							<code>align-items-md-start</code>
						</td>
						<td>
							<code>align-items-lg-start</code>
						</td>
						<td>
							<code>align-items-xl-start</code>
						</td>
						<td>
							<code>align-items-xxl-start</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-items-end</code>
						</td>
						<td>
							<code>align-items-sm-end</code>
						</td>
						<td>
							<code>align-items-md-end</code>
						</td>
						<td>
							<code>align-items-lg-end</code>
						</td>
						<td>
							<code>align-items-xl-end</code>
						</td>
						<td>
							<code>align-items-xxl-end</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-items-base</code>
						</td>
						<td>
							<code>align-items-sm-base</code>
						</td>
						<td>
							<code>align-items-md-base</code>
						</td>
						<td>
							<code>align-items-lg-base</code>
						</td>
						<td>
							<code>align-items-xl-base</code>
						</td>
						<td>
							<code>align-items-xxl-base</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-items-stretch</code>
						</td>
						<td>
							<code>align-items-sm-stretch</code>
						</td>
						<td>
							<code>align-items-md-stretch</code>
						</td>
						<td>
							<code>align-items-lg-stretch</code>
						</td>
						<td>
							<code>align-items-xl-stretch</code>
						</td>
						<td>
							<code>align-items-xxl-stretch</code>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
export default AlignItems;
