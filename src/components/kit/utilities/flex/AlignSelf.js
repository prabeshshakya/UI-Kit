import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../common/syntax-highlighter";

const AlignSelf = () => {
	const code = `

	//Align-self-start
	<div className="d-flex">
		<div className="eg-box">Flex item</div>
		<div className="align-self-start">Aligned flex item</div>
		<div className="eg-box">Flex item</div>
	</div>
	
	//Align-self-end
	<div className="d-flex">
		<div className="eg-box">Flex item</div>
		<div className="align-self-end">Aligned flex item</div>
		<div className="eg-box">Flex item</div>
	</div>
	
	//Align-self-center
	<div className="d-flex">
		<div className="eg-box">Flex item</div>
		<div className="align-self-center">Aligned flex item</div>
		<div className="eg-box">Flex item</div>
	</div>
	
	//Align-self-baseline
	<div className="d-flex">
		<div className="eg-box">Flex item</div>
		<div className="align-self-baseline">Aligned flex item</div>
		<div className="eg-box">Flex item</div>
	</div>
	
	//Align-self-stretch
	<div className="d-flex">
		<div className="eg-box">Flex item</div>
		<div className="align-self-stretch">Aligned flex item</div>
		<div className="eg-box">Flex item</div>
	</div>

    `;
	return (
		<div className="content-block">
			<h2>Align Self</h2>
			<p className="page__brief">
				Use <code>align-self</code> utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if <code>flex-direction: column</code>). Choose from the same options as<code> align-items: start</code>, <code>end</code>, <code>center</code>, <code>baseline</code>, or <code>stretch</code> (browser default).
			</p>

			<p>
				Following are the variations for <code>align-self</code>:
			</p>
			<ul className="list-style">
				<li>
					<code>align-self-stretch</code>: Element is stretched to fit the container(Browser default)
				</li>
				<li>
					<code>align-self-center</code>: Element is positioned at the center of the container
				</li>
				<li>
					<code>align-self-start</code>: Element is positioned at the beginning of the container
				</li>
				<li>
					<code>align-self-end</code>: Element is positioned at the end of the container
				</li>
				<li>
					<code>align-self-base</code>: Element is positioned at the baseline of the container
				</li>
				<li>
					<code>align-self-initial</code>: Sets this property to its default value
				</li>
				<li>
					<code>align-self-inherit</code>: Inherits this property from its parent element
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
								<h5 className="text-center">Align-self-start</h5>
								<div className="d-flex mb-3x" style={{ height: "100px" }}>
									<div className="eg-box">Flex item</div>
									<div className="align-self-start eg-box">Aligned flex item</div>
									<div className="eg-box">Flex item</div>
								</div>

								<h5 className="text-center">Align-self-end</h5>
								<div className="d-flex mb-3x" style={{ height: "100px" }}>
									<div className="eg-box">Flex item</div>
									<div className="align-self-end eg-box">Aligned flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">Align-self-center</h5>
								<div className="d-flex mb-3x" style={{ height: "100px" }}>
									<div className="eg-box">Flex item</div>
									<div className="align-self-center eg-box">Aligned flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">Align-self-baseline</h5>
								<div className="d-flex mb-3x" style={{ height: "100px" }}>
									<div className="eg-box">Flex item</div>
									<div className="align-self-baseline eg-box">Aligned flex item</div>
									<div className="eg-box">Flex item</div>
								</div>
								<h5 className="text-center">Align-self-stretch</h5>
								<div className="d-flex mb-3x" style={{ height: "100px" }}>
									<div className="eg-box">Flex item</div>
									<div className="align-self-stretch eg-box">Aligned flex item</div>
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
							<code>align-self-start</code>
						</td>
						<td>
							<code>align-self-start-sm</code>
						</td>
						<td>
							<code>align-self-start-md</code>
						</td>
						<td>
							<code>align-self-start-lg</code>
						</td>
						<td>
							<code>align-self-start-xl</code>
						</td>
						<td>
							<code>align-self-start-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-self-end</code>
						</td>
						<td>
							<code>align-self-end-sm</code>
						</td>
						<td>
							<code>align-self-end-md</code>
						</td>
						<td>
							<code>align-self-end-lg</code>
						</td>
						<td>
							<code>align-self-end-xl</code>
						</td>
						<td>
							<code>align-self-end-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-self-center</code>
						</td>
						<td>
							<code>align-self-center-sm</code>
						</td>
						<td>
							<code>align-self-center-md</code>
						</td>
						<td>
							<code>align-self-center-lg</code>
						</td>
						<td>
							<code>align-self-center-xl</code>
						</td>
						<td>
							<code>align-self-center-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-items-baseline</code>
						</td>
						<td>
							<code>align-items-baseline-sm</code>
						</td>
						<td>
							<code>align-items-baseline-md</code>
						</td>
						<td>
							<code>align-items-baseline-lg</code>
						</td>
						<td>
							<code>align-items-baseline-xl</code>
						</td>
						<td>
							<code>align-items-baseline-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-self-stretch</code>
						</td>
						<td>
							<code>align-self-stretch-sm</code>
						</td>
						<td>
							<code>align-self-stretch-md</code>
						</td>
						<td>
							<code>align-self-stretch-lg</code>
						</td>
						<td>
							<code>align-self-stretch-xl</code>
						</td>
						<td>
							<code>align-self-stretch-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-self-auto</code>
						</td>
						<td>
							<code>align-self-auto-sm</code>
						</td>
						<td>
							<code>align-self-auto-md</code>
						</td>
						<td>
							<code>align-self-auto-lg</code>
						</td>
						<td>
							<code>align-self-auto-xl</code>
						</td>
						<td>
							<code>align-self-auto-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-self-initial</code>
						</td>
						<td>
							<code>align-self-initial-sm</code>
						</td>
						<td>
							<code>align-self-initial-md</code>
						</td>
						<td>
							<code>align-self-initial-lg</code>
						</td>
						<td>
							<code>align-self-initial-xl</code>
						</td>
						<td>
							<code>align-self-initial-xxl</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-self-inherit</code>
						</td>
						<td>
							<code>align-self-inherit-sm</code>
						</td>
						<td>
							<code>align-self-inherit-md</code>
						</td>
						<td>
							<code>align-self-inherit-lg</code>
						</td>
						<td>
							<code>align-self-inherit-xl</code>
						</td>
						<td>
							<code>align-self-inherit-xxl</code>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
export default AlignSelf;
