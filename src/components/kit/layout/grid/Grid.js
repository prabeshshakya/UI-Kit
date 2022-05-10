import React from "react";
import { Syntax } from "../../../common/syntax-highlighter";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Grid = () => {
	const columnsNormal = `	
	<div class="container">
	<div class="row">
		<div class="col-xs">1 of 2</div>
		<div class="col-xs">2 of 2</div>
	</div>
	<div class="row">
		<div class="col-xs">1 of 3</div>
		<div class="col-xs">2 of 3</div>
		<div class="col-xs">3 of 3</div>
	</div>
</div>
`;

	return (
		<div className="page mt--11x">
			<div className="title-area  mb-7x">
				<h2 className="title title--largest title--dark font-weight--thin mb-4x">Grid</h2>
				<p className="mb-5x">This section includes grid breakpoints for containers including rows and columns. This starter kit uses a 12 column grid layout which uses flexbox for responsive layouts.</p>

				<div className="doc-container">
					<h4 className="title title--medium title--dark mb-2x"># Basic Usage</h4>
					<p className="page__brief mb-4x">
						The grid items should be wrapped with the class <code>row</code>. The children should include a column class used as
						<code>.col-[column-size]-[breakpoint]</code>. The column size can have values from 1 - 12. The breakpoint can have values in the breakpoints above.
					</p>

					<h2 className="mb-2x">Grid options</h2>
					<p className="mb-4x">Grid system can adapt across all six default breakpoints, and any breakpoints you customize. The six default grid tiers are as follow:</p>
					<div className="doc-container">
						<ul className="mb-2x">
							<li>Extra small (xs)</li>
							<li>Small (sm)</li>
							<li>Medium (md)</li>
							<li>Large (lg)</li>
							<li>Extra large (xl)</li>
							<li>Extra extra large (xxl)</li>
						</ul>

						<p>As noted above, each of these breakpoints have their own container, unique class prefix, and modifiers. Here’s how the grid changes across these breakpoints:</p>

						<table className="table mb-4x">
							<thead>
								<tr>
									<th scope="col"></th>
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
									<th scope="row">
										Container <code>max-width</code>
									</th>
									<td>None (auto)</td>
									<td>540px</td>
									<td>720px</td>
									<td>960px</td>
									<td>1140px</td>
									<td>1200px</td>
								</tr>
								<tr>
									<th scope="row">Class prefix</th>
									<td>none</td>
									<td>
										<code>.col-[size]-sm</code>
									</td>
									<td>
										<code>.col-[size]-md</code>
									</td>
									<td>
										<code>.col-[size]-lg</code>
									</td>
									<td>
										<code>.col-[size]-xl</code>
									</td>
									<td>
										<code>.col-[col-size]-xxl</code>
									</td>
								</tr>
								<tr>
									<th scope="row"># of columns</th>
									<td colspan="6">12</td>
								</tr>
								<tr>
									<th scope="row">Gutter width</th>
									<td colspan="6">16px</td>
								</tr>
								<tr>
									<th scope="row">Custom gutters</th>
									<td colspan="6">
										<a href="/docs/5.1/layout/gutters/">Yes</a>
									</td>
								</tr>
								<tr>
									<th scope="row">Nestable</th>
									<td colspan="6">
										<a href="#nesting">Yes</a>
									</td>
								</tr>
								<tr>
									<th scope="row">Column ordering</th>
									<td colspan="6">
										<a href="/docs/5.1/layout/columns/#reordering">Yes</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h2>Equal-width</h2>
					<div className="usage-markup-preview">
						<Tabs>
							<TabList>
								<Tab>Preview</Tab>
								<Tab>Code</Tab>
							</TabList>

							<TabPanel>
								<div className="docs-container">
									<div class="container">
										<div class="row">
											<div class="col-xs">1 of 2</div>
											<div class="col-xs">2 of 2</div>
										</div>
										<div class="row">
											<div class="col-xs">1 of 3</div>
											<div class="col-xs">2 of 3</div>
											<div class="col-xs">3 of 3</div>
										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className="preview-container">
									<div className="d-flex">
										<div className="code-preview mt-0x">
											<Syntax>{columnsNormal}</Syntax>
										</div>
									</div>
								</div>
							</TabPanel>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Grid;
