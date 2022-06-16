import React from "react";
import { Syntax } from "../../common/syntax-highlighter";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ButtonDefault = () => {
	const code = `<button class="btn btn--primary btn--shadowed--primary m-2x">Primary Button</button>
<button class="btn btn--secondary btn--shadowed--secondary m-2x">Primary Button</button>
<button class="btn btn--error btn--shadowed--error m-2x">Primary Button</button>
<button class="btn btn--warning btn--shadowed--warning m-2x">Primary Button</button>
<button class="btn btn--warning-alt btn--shadowed--warning-alt m-2x">Primary Button</button>
<button class="btn btn--grey btn--shadowed--grey m-2x">Primary Button</button>`;
	return (
		<div className="doc-container">
			<h4>Button Shadow</h4>
			<p>This modifier will add shadow to buttons and it has color variant same as the color.</p>
			<table className="ui-html-table mt-4x mb-8x">
				<thead>
					<tr>
						<th>Class</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<code>.btn--shadowed--primary</code>
						</td>
						<td>Applies primary color shadow to button</td>
					</tr>
					<tr>
						<td>
							<code>.btn--shadowed--secondary</code>
						</td>
						<td>Applies secondary color shadow to button</td>
					</tr>
					<tr>
						<td>
							<code>.btn--shadowed--error</code>
						</td>
						<td>Applies error color shadow to button</td>
					</tr>
					<tr>
						<td>
							<code>.btn--shadowed--waeninf</code>
						</td>
						<td>Applies waeninf color shadow to button</td>
					</tr>
					<tr>
						<td>
							<code>.btn--shadowed--warning-alt</code>
						</td>
						<td>Applies warning-alt color shadow to button</td>
					</tr>
					<tr>
						<td>
							<code>.btn--shadowed--grey</code>
						</td>
						<td>Applies grey color shadow to button</td>
					</tr>
				</tbody>
			</table>
			<div className="usage-markup-preview">
				<Tabs>
					<TabList>
						<Tab>Preview</Tab>
						<Tab>Code</Tab>
					</TabList>

					<TabPanel>
						<div className="preview-container">
							<div>
								<div>
									<button className="btn btn--primary btn--shadowed--primary m-2x">Primary Button</button>
								</div>
								<div>
									<button className="btn btn--secondary btn--shadowed--secondary m-2x">Secondary Button</button>
								</div>
								<div>
									<button className="btn btn--error btn--shadowed--error m-2x">Error Button</button>
								</div>
								<div>
									<button className="btn btn--warning btn--shadowed--warning m-2x">Warning Button</button>
								</div>
								<div>
									<button className="btn btn--warning-alt btn--shadowed--warning-alt m-2x">Warning Alt Button</button>
								</div>
								<div>
									<button className="btn btn--grey btn--shadowed--grey m-2x">Grey Button</button>
								</div>
							</div>
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
	);
};

export default ButtonDefault;
