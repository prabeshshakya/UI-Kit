import React from "react";
import { Syntax } from "../../../common/syntax-highlighter";

const Color = () => {
	const code = `

$defaultSpacing: $base__font-size / 4;

$spacing: ();
$spaceFrom: -4;
$spaceTill: 20;

@for $i from $spaceFrom through $spaceTill {
	$spacing: map-merge($spacing, (getSpacingName($i) : $defaultSpacing * $i));
}
            
        `;
	return (
		<div className="page">
			<div className="title-area">
				<h2 className="page__title">Spacing</h2>
				<p className="lead-text">Sass Starter kit has a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>
			</div>
			<div className="content-block">
				<h3>Margin and Padding</h3>
				<p className="page__brief">
					We can assign responsive friendly <code>margin</code> or <code>padding</code> values to an element or subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. The spacing value can range from <code>-16px</code> to <code>80px</code>.This range can be changed in <code>variables/_spacing.scss</code> file.
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

				<blockquote className="docs-info">
					<strong>Note:</strong>
					<code>$defaultSpacing</code> is based on <code>$base__font-size</code> defined.
				</blockquote>

				<blockquote className="docs-info">
					<strong>Note:</strong>
					<code>1x</code> is equivalent to <code>4px</code>
				</blockquote>

				<h4>Example:</h4>
				<table className="table mb-8x">
					<thead>
						<tr>
							<th>className</th>
							<th>CSS Output</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<code>.m-0x</code>
							</td>
							<td>
								<code>margin: 0px</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>.m-1x</code>
							</td>
							<td>
								<code>margin: 4px</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>.m-2x</code>
							</td>
							<td>
								<code>margin: 8px</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>.m-3x</code>
							</td>
							<td>
								<code>margin: 12px</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>...</code>
							</td>
							<td>
								<code>...</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>.m-20x</code>
							</td>
							<td>
								<code>margin: 80px</code>
							</td>
						</tr>
					</tbody>
				</table>

				<h4>Variables</h4>
				<p>Spacing utilities are declared via Sass loop and then generated with our map function.</p>
				<div className="code-preview">
					<Syntax language="scss">{code}</Syntax>
				</div>
			</div>
		</div>
	);
};

export default Color;
