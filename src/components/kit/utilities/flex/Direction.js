import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../common/syntax-highlighter";

const Direction = () => {
	const code = `
    <div class="d-flex flex-row mb-3">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
    </div>
    
    
    <div class="d-flex flex-row-reverse">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
    </div>
        `;
	return (
		<div className="content-block">
			<h2>Direction</h2>
			<p className="page__brief">
				We can set the direction of flex items in a flex container with direction utilities. By default, the flex-direction is set to horizontal i.e. <code>flex-direction: row</code>. However, we may encounter situations where we need to change the direction of flex items. We can use the following properties for changing the flex-direction property :
			</p>

			<div className="mb-5x">
				<strong>
					Use <code>.flex-row</code> to set a horizontal direction (the browser default), or <code>.flex-row-reverse</code> to start the horizontal direction from the opposite side.
				</strong>
			</div>
			<div className="usage-markup-preview">
				<Tabs>
					<TabList>
						<Tab>Preview</Tab>
						<Tab>Code</Tab>
					</TabList>
					<TabPanel>
						<div className="preview-container">
							<div className="example-row">
								<div className="d-flex flex-row mb-3x">
									<div className="eg-box">Flex item 1</div>
									<div className="eg-box">Flex item 2</div>
									<div className="eg-box">Flex item 3</div>
								</div>

								<div className="d-flex flex-row-reverse">
									<div className="eg-box">Flex item 1</div>
									<div className="eg-box">Flex item 2</div>
									<div className="eg-box">Flex item 3</div>
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
							<code>.flex-row</code>
						</td>
						<td>
							<code>.flex-sm-row</code>
						</td>
						<td>
							<code>.flex-md-row</code>
						</td>
						<td>
							<code>.flex-lg-row</code>
						</td>
						<td>
							<code>.flex-xl-row</code>
						</td>
						<td>
							<code>.flex-xxl-row</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>.flex-row-reverse</code>
						</td>
						<td>
							<code>.flex-sm-row-reverse</code>
						</td>
						<td>
							<code>.flex-md-row-reverse</code>
						</td>
						<td>
							<code>.flex-lg-row-reverse</code>
						</td>
						<td>
							<code>.flex-xl-row-reverse</code>
						</td>
						<td>
							<code>.flex-xxl-row-reverse</code>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Direction;
