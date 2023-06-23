import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Syntax } from '../../../docs/syntax-highlighter';

const JustifyContent = () => {
	const code = `
    
<div className="d-flex justify-content-start">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
</div>
<div className="d-flex justify-content-end">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
</div>
<div className="d-flex justify-content-center">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
</div>
<div className="d-flex justify-content-between">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
</div>
<div className="d-flex justify-content-around">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
</div>

    `;
	return (
		<>
			<h2 id='justify-content'>Justify content</h2>
			<p className='page__brief'>
				Use <code>justify-content</code> utilities on flexbox containers to
				change the alignment of flex items on the main axis (the x-axis to
				start, y-axis if <code>flex-direction: column</code>). Choose from start
				(browser default), <code>end</code>, <code>center</code>,{' '}
				<code>between</code>, <code>around</code>.
			</p>

			<p>
				Following are the variations for <code>justify-content</code>:
			</p>
			<ul className='list-style'>
				<li>
					<code>justify-content-start:</code> Align items from the start
					(Browser default)
				</li>
				<li>
					<code>justify-content-end:</code> Align items from the end
				</li>
				<li>
					<code>justify-content-center:</code> Align items at the center
				</li>
				<li>
					<code>justify-content-between:</code> Displays the flex items with
					space between the lines:
				</li>
				<li>
					<code>justify-content-around:</code> Displays the flex items with
					space before, between, and after the lines
				</li>
				<li>
					<code>justify-content-initial:</code> Sets this property to its
					default value.
				</li>
				<li>
					<code>justify-content-inherit:</code> Inherits this property from its
					parent element.
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
								<h5 className='text-center'>start</h5>
								<div className='d-flex justify-content-start'>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
								</div>
							</div>
							<div className='example-row'>
								<h5 className='text-center'>End</h5>
								<div className='d-flex justify-content-end'>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
								</div>
							</div>
							<div className='example-row'>
								<h5 className='text-center'>Center</h5>
								<div className='d-flex justify-content-center'>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
								</div>
							</div>
							<div className='example-row'>
								<h5 className='text-center'>Between</h5>
								<div className='d-flex justify-content-between'>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
									<div className='eg-box'>Flex item</div>
								</div>
							</div>
							<div className='example-row'>
								<h5 className='text-center'>Around</h5>
								<div className='d-flex justify-content-around'>
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

			<div className='content-block'>
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
								<code>justify-content-initial</code>
							</td>
							<td>
								<code>justify-content-sm-initial</code>
							</td>
							<td>
								<code>justify-content-md-initial</code>
							</td>
							<td>
								<code>justify-content-lg-initial</code>
							</td>
							<td>
								<code>justify-content-xl-initial</code>
							</td>
							<td>
								<code>justify-content-xxl-initial</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>justify-content-start</code>
							</td>
							<td>
								<code>justify-content-sm-start</code>
							</td>
							<td>
								<code>justify-content-md-start</code>
							</td>
							<td>
								<code>justify-content-lg-start</code>
							</td>
							<td>
								<code>justify-content-xl-start</code>
							</td>
							<td>
								<code>justify-content-xxl-start</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>justify-content-end</code>
							</td>
							<td>
								<code>justify-content-sm-end</code>
							</td>
							<td>
								<code>justify-content-md-end</code>
							</td>
							<td>
								<code>justify-content-lg-end</code>
							</td>
							<td>
								<code>justify-content-xl-end</code>
							</td>
							<td>
								<code>justify-content-xxl-end</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>justify-content-center</code>
							</td>
							<td>
								<code>justify-content-sm-center</code>
							</td>
							<td>
								<code>justify-content-md-center</code>
							</td>
							<td>
								<code>justify-content-lg-center</code>
							</td>
							<td>
								<code>justify-content-xl-center</code>
							</td>
							<td>
								<code>justify-content-xxl-center</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>justify-content-between</code>
							</td>
							<td>
								<code>justify-content-sm-between</code>
							</td>
							<td>
								<code>justify-content-md-between</code>
							</td>
							<td>
								<code>justify-content-lg-between</code>
							</td>
							<td>
								<code>justify-content-xl-between</code>
							</td>
							<td>
								<code>justify-content-xxl-between</code>
							</td>
						</tr>
						<tr>
							<td>
								<code>justify-content-around</code>
							</td>
							<td>
								<code>justify-content-sm-around</code>
							</td>
							<td>
								<code>justify-content-md-around</code>
							</td>
							<td>
								<code>justify-content-lg-around</code>
							</td>
							<td>
								<code>justify-content-xl-around</code>
							</td>
							<td>
								<code>justify-content-xxl-around</code>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
export default JustifyContent;
