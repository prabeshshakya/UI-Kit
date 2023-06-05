import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Syntax } from '../../../components/common/syntax-highlighter';

const AlignContent = () => {
	const code = `
	//Align-content-start
	<div className="d-flex flex-wrap align-content-start mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>

	//Align-content-end
	<div className="d-flex flex-wrap align-content-end mb-3x">
		<div>Flex item</div>
		<div>Aligned flex item</div>
		<div>Flex item</div>
	</div>
	//Align-content-center
	<div className="d-flex flex-wrap align-content-center mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>
	//Align-content-between
	<div className="d-flex flex-wrap align-content-between mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>
	//Align-content-around
	<div className="d-flex flex-wrap align-content-around mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>
	//Align-content-stretch
	<div className="d-flex flex-wrap align-content-stretch mb-3x">
		<div>Flex item</div>
		<div>Flex item</div>
		<div>Flex item</div>
	</div>

    `;
	return (
		<div className='content-block'>
			<h2>Align Content</h2>
			<p className='page__brief'>
				The align-content property modifies the behavior of the flex-wrap
				property. It is similar to align-items, but instead of aligning flex
				items, it aligns flex lines. There must be multiple lines of items for
				this property to have any effect.
			</p>

			<p>
				Following are the variations for <code>align-content</code>:
			</p>
			<ul className='list-style'>
				<li>
					<code>align-content-stretch</code>: Lines are stretched to fit the
					container(Browser default)
				</li>
				<li>
					<code>align-content-center</code>: Lines are packed towards the center
					of the container
				</li>
				<li>
					<code>align-content-start</code>: Lines are packed towards the
					beginning of the container
				</li>
				<li>
					<code>align-content-end</code>: Lines are packed towards the end of
					the container
				</li>
				<li>
					<code>align-content-base</code>: Lines are packed towards the baseline
					of the container
				</li>
				<li>
					<code>align-content-between</code>: Lines are evenly distributed in
					the flex container
				</li>
				<li>
					<code>align-content-around</code>: Lines are evenly distributed in the
					flex container, with half-size spaces on either end
				</li>
				<li>
					<code>align-content-initial</code>: Sets this property to its default
					value
				</li>
				<li>
					<code>align-content-inherit</code>: Inherits this property from its
					parent element
				</li>
			</ul>

			<div className='usage-markup-preview'>
				<Tabs>
					<TabList>
						<Tab>Preview</Tab>
						<Tab>Code</Tab>
					</TabList>
					<TabPanel>
						<div className='preview-container'>
							<div className='example-row'>
								<h5 className='text-center'>Align-content-start</h5>
								<div
									className='d-flex flex-wrap align-content-start mb-3x'
									style={{ height: '150px' }}
								>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
								</div>

								<h5 className='text-center'>Align-content-end</h5>
								<div
									className='d-flex flex-wrap align-content-end mb-3x'
									style={{ height: '150px' }}
								>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Aligned flex item</div>
									<div className='eg-box'>Flex item</div>
								</div>
								<h5 className='text-center'>Align-content-center</h5>
								<div
									className='d-flex flex-wrap align-content-center mb-3x'
									style={{ height: '150px' }}
								>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
								</div>
								<h5 className='text-center'>Align-content-between</h5>
								<div
									className='d-flex flex-wrap align-content-between mb-3x'
									style={{ height: '150px' }}
								>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
								</div>
								<h5 className='text-center'>Align-content-around</h5>
								<div
									className='d-flex flex-wrap align-content-around mb-3x'
									style={{ height: '150px' }}
								>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
								</div>
								<h5 className='text-center'>Align-content-stretch</h5>
								<div
									className='d-flex flex-wrap align-content-stretch mb-3x'
									style={{ height: '150px' }}
								>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
								</div>
							</div>
						</div>
					</TabPanel>
					<TabPanel>
						<div className='preview-container'>
							<div className='d-flex'>
								<div className='code-preview'>
									<Syntax language='html'>{code}</Syntax>
								</div>
							</div>
						</div>
					</TabPanel>
				</Tabs>
			</div>

			<h4>Available Classes</h4>

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
							<code>align-content-start</code>
						</td>
						<td>
							<code>align-content-sm-start</code>
						</td>
						<td>
							<code>align-content-md-start</code>
						</td>
						<td>
							<code>align-content-lg-start</code>
						</td>
						<td>
							<code>align-content-xl-start</code>
						</td>
						<td>
							<code>align-content-xxl-start</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-end</code>
						</td>
						<td>
							<code>align-content-sm-end</code>
						</td>
						<td>
							<code>align-content-md-end</code>
						</td>
						<td>
							<code>align-content-lg-end</code>
						</td>
						<td>
							<code>align-content-xl-end</code>
						</td>
						<td>
							<code>align-content-xxl-end</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-center</code>
						</td>
						<td>
							<code>align-content-sm-center</code>
						</td>
						<td>
							<code>align-content-md-center</code>
						</td>
						<td>
							<code>align-content-lg-center</code>
						</td>
						<td>
							<code>align-content-xl-center</code>
						</td>
						<td>
							<code>align-content-xxl-center</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-between</code>
						</td>
						<td>
							<code>align-content-sm-between</code>
						</td>
						<td>
							<code>align-content-md-between</code>
						</td>
						<td>
							<code>align-content-lg-between</code>
						</td>
						<td>
							<code>align-content-xl-between</code>
						</td>
						<td>
							<code>align-content-xxl-between</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-stretch</code>
						</td>
						<td>
							<code>align-content-sm-stretch</code>
						</td>
						<td>
							<code>align-content-md-stretch</code>
						</td>
						<td>
							<code>align-content-lg-stretch</code>
						</td>
						<td>
							<code>align-content-xl-stretch</code>
						</td>
						<td>
							<code>align-content-xxl-stretch</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-auto</code>
						</td>
						<td>
							<code>align-content-sm-auto</code>
						</td>
						<td>
							<code>align-content-md-auto</code>
						</td>
						<td>
							<code>align-content-lg-auto</code>
						</td>
						<td>
							<code>align-content-xl-auto</code>
						</td>
						<td>
							<code>align-content-xxl-auto</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-initial</code>
						</td>
						<td>
							<code>align-content-sm-initial</code>
						</td>
						<td>
							<code>align-content-md-initial</code>
						</td>
						<td>
							<code>align-content-lg-initial</code>
						</td>
						<td>
							<code>align-content-xl-initial</code>
						</td>
						<td>
							<code>align-content-xxl-initial</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>align-content-inherit</code>
						</td>
						<td>
							<code>align-content-sm-inherit</code>
						</td>
						<td>
							<code>align-content-md-inherit</code>
						</td>
						<td>
							<code>align-content-lg-inherit</code>
						</td>
						<td>
							<code>align-content-xl-inherit</code>
						</td>
						<td>
							<code>align-content-xxl-inherit</code>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
export default AlignContent;
