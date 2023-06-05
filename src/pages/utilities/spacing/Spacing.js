import React from 'react';
import { Syntax } from '../../../components/common/syntax-highlighter';

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
		<div className='page'>
			<div className='title-area'>
				<h2 className='page__title'>Spacing</h2>
				<p className='lead-text'>
					Sass Starter kit has a wide range of shorthand responsive margin and
					padding utility classes to modify an element’s appearance.
				</p>
			</div>
			<div className='content-block'>
				<h3>Margin and Padding</h3>
				<p className='page__brief'>
					We can assign responsive friendly <code>margin</code> or{' '}
					<code>padding</code> values to an element or subset of its sides with
					shorthand classes. Includes support for individual properties, all
					properties, and vertical and horizontal properties. The spacing value
					can range from <code>-16px</code> to <code>80px</code>.This range can
					be changed in <code>variables/_spacing.scss</code> file.
				</p>
			</div>
			<div className='content-block'>
				<h4>Notation</h4>
				<p className='page__brief'>
					The classes are named using the format
					<code>[property] - [sides] - [size]</code>
					for <code>xs</code> and
					<code>[property] - [sides] - [size] - [breakpoint]</code>
					for <code> sm, md, lg, xl, and xxl.</code>
				</p>
			</div>
			<div className='content-block'>
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
						<code>t</code>- for classes that set <code>margin-top</code> or{' '}
						<code>padding-top</code>
					</li>
					<li>
						<code>b</code>- for classes that set <code>margin-bottom</code> or{' '}
						<code>padding-bottom</code>
					</li>
					<li>
						<code>l</code>- for classes that set <code>margin-left</code> or{' '}
						<code>padding-left</code>
					</li>
					<li>
						<code>r</code>- for classes that set <code>margin-right</code> or{' '}
						<code>padding-right</code>
					</li>
					<li>
						<code>x</code>- for classes that set <code>*-right</code> or{' '}
						<code>*-right</code>
					</li>
					<li>
						<code>y</code>- for classes that set <code>*-top</code> or{' '}
						<code>*-bottom</code>
					</li>
					<li>
						<em>blank</em> - for classes that set a <code>margin</code> or{' '}
						<code>padding</code> on all 4 sides of the element.
					</li>
				</ul>

				<h5>
					Where <em>size</em> is one of:
				</h5>

				<ul>
					<li>
						<code>0</code> - for classes that eliminate the <code>margin</code>{' '}
						or <code>padding</code> by setting it to <code>0</code>
					</li>
					<li>
						<code>1</code> - for classes that set the <code>margin</code> or{' '}
						<code>padding</code> to <code>$spacing * 1</code>
					</li>
					<li>
						<code>2</code> - for classes that set the <code>margin</code> or{' '}
						<code>padding</code> to <code>$spacing * 2</code>
					</li>
					<li>
						<code>3</code> - for classes that set the <code>margin</code> or{' '}
						<code>padding</code> to <code>$spacing * 3</code>
					</li>
					<li>
						<code>4</code> - for classes that set the <code>margin</code> or{' '}
						<code>padding</code> to <code>$spacing * 4</code>
					</li>
					<li>
						<code>...</code> - for classes that set the <code>margin</code> or{' '}
						<code>padding</code> to <code>$spacing * ...</code>
					</li>
					<li>
						<code>20</code> - for classes that set the <code>margin</code> or{' '}
						<code>padding</code> to <code>$spacing * 20</code>
					</li>
					<li>
						<code>auto</code> - for classes that set the <code>margin</code> to{' '}
						<code>auto</code>
					</li>
				</ul>

				<div className='content-block'>
					<h4>Variables</h4>
					<p>
						The variables for the spacing default (<code>$defaultSpacing</code>)
						value is located on <code>variables/_config.scss</code>
					</p>
				</div>

				<h4>Example:</h4>
				<table className='table mb-4x'>
					<thead>
						<tr>
							<th scope='col'>
								xs
								<br />
								<span>&lt;576px</span>
							</th>
							<th scope='col'>
								sm
								<br />
								<span>≥576px</span>
							</th>
							<th scope='col'>
								md
								<br />
								<span>≥768px</span>
							</th>
							<th scope='col'>
								lg
								<br />
								<span>≥992px</span>
							</th>
							<th scope='col'>
								xl
								<br />
								<span>≥1200px</span>
							</th>
							<th scope='col'>
								xxl
								<br />
								<span>≥1400px</span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<code>.m-0x</code>
							</td>
							<td>
								<code>.m-sm-0x</code>
							</td>
							<td>
								<code>.m-md-0x</code>
							</td>
							<td>
								<code>.m-lg-0x</code>
							</td>
							<td>
								<code>.m-xl-0x</code>
							</td>
							<td>
								<code>.m-xxl-0x</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>.m[t,r,b,l,x,y]-0x</code>
							</td>
							<td>
								<code>.m[t,r,b,l,x,y]-sm-0x</code>
							</td>
							<td>
								<code>.m[t,r,b,l,x,y]-md-0x</code>
							</td>
							<td>
								<code>.m[t,r,b,l,x,y]-lg-0x</code>
							</td>
							<td>
								<code>.m[t,r,b,l,x,y]-xl-0x</code>
							</td>
							<td>
								<code>.m[t,r,b,l,x,y]-xxl-0x</code>
							</td>
						</tr>

						<tr>
							<td>
								<code>.p-0x</code>
							</td>
							<td>
								<code>.p-sm-0x</code>
							</td>
							<td>
								<code>.p-md-0x</code>
							</td>
							<td>
								<code>.p-lg-0x</code>
							</td>
							<td>
								<code>.p-xl-0x</code>
							</td>
							<td>
								<code>.p-xxl-0x</code>
							</td>
						</tr>

						<tr>
							<td>
								<code>.p[t,r,b,l,x,y]-0x</code>
							</td>
							<td>
								<code>.p[t,r,b,l,x,y]-sm-0x</code>
							</td>
							<td>
								<code>.p[t,r,b,l,x,y]-md-0x</code>
							</td>
							<td>
								<code>.p[t,r,b,l,x,y]-lg-0x</code>
							</td>
							<td>
								<code>.p[t,r,b,l,x,y]-xl-0x</code>
							</td>
							<td>
								<code>.p[t,r,b,l,x,y]-xxl-0x</code>
							</td>
						</tr>
					</tbody>
				</table>

				<h4>Variables</h4>
				<p>
					Spacing utilities are declared via Sass loop and then generated with
					our map function.
				</p>
				<div className='code-preview'>
					<Syntax language='scss'>{code}</Syntax>
				</div>
			</div>
		</div>
	);
};

export default Color;
