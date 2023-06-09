import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Syntax } from '../../../components/common/syntax-highlighter';

const Wrap = () => {
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
		<div className='content-block'>
			<h2 id='wrap'>Wrap</h2>
			<p className='page__brief'>
				Change how flex items wrap in a flex container. Choose from no wrapping
				at all (the browser default) with <code>.flex-nowrap</code>, wrapping
				with
				<code>.flex-wrap</code>, or reverse wrapping with{' '}
				<code>.flex-wrap-reverse</code>.
			</p>

			<div className='mb-5x'>
				<strong>
					Use <code>.flex-row</code> to set a horizontal direction (the browser
					default), or <code>.flex-row-reverse</code> to start the horizontal
					direction from the opposite side.
				</strong>
			</div>
			<div className='content-block'>
				<Tabs>
					<TabList>
						<Tab>Preview</Tab>
						<Tab>Code</Tab>
					</TabList>
					<TabPanel>
						<div className='preview-container'>
							<div className='example-row'>
								<div className='d-flex flex-row'>
									<div className='eg-box'>Flex item 1</div>
									<div className='eg-box'>Flex item 2</div>
									<div className='eg-box'>Flex item 3</div>
								</div>
							</div>
							<div className='example-row'>
								<div className='d-flex flex-row-reverse'>
									<div className='eg-box'>Flex item 1</div>
									<div className='eg-box'>Flex item 2</div>
									<div className='eg-box'>Flex item 3</div>
								</div>
							</div>
						</div>
					</TabPanel>
					<TabPanel>
						<Syntax language='html'>{code}</Syntax>
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
					<tr>
						<td>
							<code>.flex-column</code>
						</td>
						<td>
							<code>.flex-sm-column</code>
						</td>
						<td>
							<code>.flex-md-column</code>
						</td>
						<td>
							<code>.flex-lg-column</code>
						</td>
						<td>
							<code>.flex-xl-column</code>
						</td>
						<td>
							<code>.flex-xxl-column</code>
						</td>
					</tr>
					<tr>
						<td>
							<code>.flex-column-reverse</code>
						</td>
						<td>
							<code>.flex-sm-column-reverse</code>
						</td>
						<td>
							<code>.flex-md-column-reverse</code>
						</td>
						<td>
							<code>.flex-lg-column-reverse</code>
						</td>
						<td>
							<code>.flex-xl-column-reverse</code>
						</td>
						<td>
							<code>.flex-xxl-column-reverse</code>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Wrap;
