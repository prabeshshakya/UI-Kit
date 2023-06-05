import React from 'react';
import { Syntax } from '../../components/common/syntax-highlighter';

export default function Typography() {
	return (
		<div className='page'>
			<div className='title-area'>
				<div className='content-block'>
					<h2 className='page__title'>Typography</h2>
					<p>
						Documentation and example of typography, including global setting,
						heading, body text, list, and more.
					</p>
				</div>
				<div className='content-block'>
					<h3>Global setting</h3>
					<p>
						Sass starter kit sets basic global display, typography, and link
						style. When more control is needed, check it out{' '}
						<a
							href='/fonts'
							target='blank'
						>
							textual utility classes.
						</a>
					</p>
					<ul>
						<li>
							Use{' '}
							<a
								href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
								target='blank'
							>
								googleapis
							</a>{' '}
							that select the <code>font family</code> for each OS and device.
							Use font Inter as default.
						</li>
						<li>
							For a more inclusive and accessible type scale, we use the
							browser's default root <code>font-size</code> (typically 16px) so
							visitors can customize their browser defaults as needed.
						</li>
						<li>
							Use the <code>$font-custom</code> and <code>$font-sizes</code>{' '}
							attributes as our typographic base applied to the{' '}
							<code>&lt;body&gt;</code>.
						</li>
						<li>
							Check out <a href='/colors'>background color</a> to set a
							background-color on the <code>&lt;body&gt;</code> (
							<code>#fff</code> by default).
						</li>
						<li>
							Check out <a href='/fonts'>$fontWeight</a> to set font-weight on
							the <code>&lt;body&gt;</code>.
						</li>
					</ul>
				</div>
				<div className='content-block'>
					<h3>Heading</h3>
					<p>
						All HTML headings, &lt;h1&gt; through &lt;/h1&gt;, are available.
					</p>
					<table className='ui-html-table mt-4x mb-8x'>
						<thead>
							<th>Heading</th>
							<th>Example</th>
							<th>Font size</th>
						</thead>
						<tbody>
							<tr>
								<td>
									<code>&lt;h1&gt; &lt;/h1&gt;</code>
								</td>
								<td>
									<h1>h1 heading</h1>
								</td>
								<td>32px</td>
							</tr>
							<tr>
								<td>
									<code>&lt;h2&gt; &lt;/h2&gt;</code>
								</td>
								<td>
									<h2>h2 heading</h2>
								</td>
								<td>24px</td>
							</tr>
							<tr>
								<td>
									<code>&lt;h3&gt; &lt;/h3&gt;</code>
								</td>
								<td>
									<h3>h3 heading</h3>
								</td>
								<td>20px</td>
							</tr>
							<tr>
								<td>
									<code>&lt;h4&gt; &lt;/h4&gt;</code>
								</td>
								<td>
									<h4>h4 heading</h4>
								</td>
								<td>18px</td>
							</tr>
							<tr>
								<td>
									<code>&lt;h5&gt; &lt;/h5&gt;</code>
								</td>
								<td>
									<h5>h5 heading</h5>
								</td>
								<td>16px</td>
							</tr>
							<tr>
								<td>
									<code>&lt;h6&gt; &lt;/h6&gt;</code>
								</td>
								<td>
									<h6>h6 heading</h6>
								</td>
								<td>16px</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
