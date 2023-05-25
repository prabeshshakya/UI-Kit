import React from "react";
import { Syntax } from "../../common/syntax-highlighter";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ButtonDefault = () => {
	const code = `<div>
    <button class="btn btn--primary mr-2x">Primary Button</button>
    <button class="btn btn--outlined--primary mr-2x">Primary Outlined Button</button>
    <button class="btn btn--text--primary mr-2x">Primary Text Button</button>
</div>
<div>
    <button class="btn btn--secondary mr-2x">Secondary Button</button>
    <button class="btn btn--outlined--secondary mr-2x">Secondary Outlined Button</button>
    <button class="btn btn--text--secondary mr-2x">Secondary Text Button</button>
</div>
<div>
    <button class="btn btn--error mr-2x">Error Button</button>
    <button class="btn btn--outlined--error mr-2x">Error Outlined Button</button>
    <button class="btn btn--text--error mr-2x">Error Text Button</button>
</div>
<div>
    <button class="btn btn--warning mr-2x">Warning Button</button>
    <button class="btn btn--outlined--warning mr-2x">Warning Outlined Button</button>
    <button class="btn btn--text--warning mr-2x">Warning Text Button</button>
</div>
<div>
    <button class="btn btn--warning-alt mr-2x">Warning Alt Button</button>
    <button class="btn btn--outlined--warning-alt mr-2x">Warning Alt Outlined Button</button>
    <button class="btn btn--text--warning-alt mr-2x">Warning Alt Text Button</button>
</div>
<div>
    <button class="btn btn--grey mr-2x">Grey Button</button>
    <button class="btn btn--outlined--grey mr-2x">Grey Outlined Button</button>
    <button class="btn btn--text--grey mr-2x">Grey Text Button</button>
</div>`;

	return (
		<div className="doc-container">
			<h4>Button Variants</h4>
			<p className="page__brief">There are several modifier classes that will apply different look to the buttons.</p>
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
							<code>.btn--primary</code>
						</td>
						<td>Applies styles that indicates primary action.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--outlined--primary</code>
						</td>
						<td>Will apply outlined style for buttons.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--text--primary</code>
						</td>
						<td>Will apply text styled button.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--secondary</code>
						</td>
						<td>Applies styles that indicates secondary action.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--outlined--secondary</code>
						</td>
						<td>Will apply outlined style for buttons.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--text--secondary</code>
						</td>
						<td>Will apply text styled button.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--error</code>
						</td>
						<td>Applies styles that indicates error action.</td>
					</tr>

					<tr>
						<td>
							<code>.btn--outlined--error</code>
						</td>
						<td>Will apply outlined style for buttons.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--text--error</code>
						</td>
						<td>Will apply text styled button.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--warning</code>
						</td>
						<td>Applies styles that indicates warning action.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--outlined--warning</code>
						</td>
						<td>Will apply outlined style for buttons.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--text--warning</code>
						</td>
						<td>Will apply text styled button.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--warning-alt</code>
						</td>
						<td>Alternate warning action button.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--outlined--warning-alt</code>
						</td>
						<td>Will apply outlined style for buttons.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--text--warning-alt</code>
						</td>
						<td>Will apply text styled button.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--grey</code>
						</td>
						<td>Applies styles for grey button.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--outlined--grey</code>
						</td>
						<td>Will apply outlined style for buttons.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--text--grey</code>
						</td>
						<td>Will apply text styled button.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--rounded</code>
						</td>
						<td>Will render rounded styled button.</td>
					</tr>
				</tbody>
			</table>
			<div className="usage-markup-preview usage-markup-preview--m-top">
				<Tabs>
					<TabList>
						<Tab>Preview</Tab>
						<Tab>Code</Tab>
					</TabList>

					<TabPanel>
						<div className="preview-container">
							<div>
								<div className="mb-2x">
									<button className="btn btn--primary mr-2x">Primary Button</button>
									<button className="btn btn--outlined--primary mr-2x">Primary Outlined Button</button>
									<button className="btn btn--text--primary mr-2x">Primary Text Button</button>
								</div>
								<div className="mb-2x">
									<button className="btn btn--secondary mr-2x">Secondary Button</button>
									<button className="btn btn--outlined--secondary mr-2x">Secondary Outlined Button</button>
									<button className="btn btn--text--secondary mr-2x">Secondary Text Button</button>
								</div>
								<div className="mb-2x">
									<button className="btn btn--error mr-2x">Error Button</button>
									<button className="btn btn--outlined--error mr-2x">Error Outlined Button</button>
									<button className="btn btn--text--error mr-2x">Error Text Button</button>
								</div>
								<div className="mb-2x">
									<button className="btn btn--warning mr-2x">Warning Button</button>
									<button className="btn btn--outlined--warning mr-2x">Warning Outlined Button</button>
									<button className="btn btn--text--warning mr-2x">Warning Text Button</button>
								</div>
								<div className="mb-2x">
									<button className="btn btn--warning-alt mr-2x">Warning Alt Button</button>
									<button className="btn btn--outlined--warning-alt mr-2x">Warning Alt Outlined Button</button>
									<button className="btn btn--text--warning-alt mr-2x">Warning Alt Text Button</button>
								</div>
								<div className="mb-2x">
									<button className="btn btn--grey mr-2x">Grey Button</button>
									<button className="btn btn--outlined--grey mr-2x">Grey Outlined Button</button>
									<button className="btn btn--text--grey mr-2x">Grey Text Button</button>
								</div>
								<div>
									<button className="btn btn--grey btn--rounded mr-2x">Grey Button</button>
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
