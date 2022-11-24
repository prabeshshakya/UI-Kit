import React from "react";
import EqualWidth from "./EqualWidth";
import SettingOneColumnWidth from "./SettingOneColumnWidth";
import VariableWidthContent from "./VariableWidthContent";
import ResponsiveClasses from "./ResponsiveClasses";
import StackedToHorizontal from "./StackedToHorizontal";
import MixAndMatch from "./MixAndMatch";

const Grid = () => {
	return (
		<div className="page">
			<div className="title-area  mb-7x">
				<h2 className="page__title">Grid</h2>
				<p className="lead-text mb-5x">This section includes grid breakpoints for containers including rows and columns. This starter kit uses a 12 column grid layout which uses flexbox for responsive layouts.</p>

				<div className="doc-container">
					<h4># Basic Usage</h4>
					<p className="page__brief mb-4x">
						The grid items should be wrapped with the class <code>row</code>. The children should include a column class used as
						<code>.col-[column-size]-[breakpoint]</code>. The column size can have values from 1 - 12. The breakpoint can have values in the breakpoints above.
					</p>

					<h2 className="mb-2x">Grid options</h2>
					<p className="mb-4x">Grid system can adapt across all six default breakpoints, and any breakpoints you customize. The six default grid tiers are as follow:</p>
				</div>
				<div className="doc-container">
					<ul className="mb-4x">
						<li className="title--smallest">Extra small (xs)</li>
						<li className="title--smallest">Small (sm)</li>
						<li className="title--smallest">Medium (md)</li>
						<li className="title--smallest">Large (lg)</li>
						<li className="title--smallest">Extra large (xl)</li>
						<li className="title--smallest">Extra extra large (xxl)</li>
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
									<code>.col-sm-[size]</code>
								</td>
								<td>
									<code>.col-md-[size]</code>
								</td>
								<td>
									<code>.col-lg-[size]</code>
								</td>
								<td>
									<code>.col-xl-[size]</code>
								</td>
								<td>
									<code>.col-xxl-[size]</code>
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
								<td colspan="6">Yes</td>
							</tr>
							<tr>
								<th scope="row">Nestable</th>
								<td colspan="6">Yes</td>
							</tr>
							<tr>
								<th scope="row">Column ordering</th>
								<td colspan="6">Yes</td>
							</tr>
						</tbody>
					</table>
				</div>

				<EqualWidth />
				<SettingOneColumnWidth />
				<VariableWidthContent />
				<ResponsiveClasses />
				<StackedToHorizontal />
				<MixAndMatch />
			</div>
		</div>
	);
};

export default Grid;
