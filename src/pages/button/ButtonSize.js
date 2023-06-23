import React from 'react';
import { Syntax } from '../../docs/syntax-highlighter';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ButtonSize = () => {
	const code = `<div>
    <button class="btn btn--primary btn--large m-2x">Large Button</button>
    <button class="btn btn--primary btn--small m-2x">Small Button</button>
</div>
<div>
    <button class="btn btn--error btn--block m-2x">Block Button</button>
    <button class="btn btn--outlined--error btn--block m-2x">Block Button</button>
</div>`;

	return (
		<div className='doc-container'>
			<h4>Button Sizes</h4>
			<p className='page__brief'>
				There are several modifier classes that will apply different sizes to a
				button
			</p>
			<table className='ui-html-table mt-4x mb-8x'>
				<thead>
					<tr>
						<th>Class</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<code>.btn--large</code>
						</td>
						<td>Makes button large.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--small</code>
						</td>
						<td>Makes button small.</td>
					</tr>
					<tr>
						<td>
							<code>.btn--block</code>
						</td>
						<td>
							Will apply <code>width: 100%</code> so that it would cover all the
							space available.
						</td>
					</tr>
				</tbody>
			</table>
			<div className='usage-markup-preview usage-markup-preview--m-top'>
				<Tabs>
					<TabList>
						<Tab>Preview</Tab>
						<Tab>Code</Tab>
					</TabList>

					<TabPanel>
						<div className='preview-container'>
							<div>
								<button className='btn btn--primary btn--large mr-2x mb-2x'>
									Large Button
								</button>
								<button className='btn btn--primary btn--small m-2x'>
									Small Button
								</button>
							</div>
							<div>
								<button className='btn btn--error btn--block  mb-2x'>
									Block Button
								</button>
								<button className='btn btn--outlined--error btn--block'>
									Block Button
								</button>
							</div>
						</div>
					</TabPanel>
					<TabPanel>
						<div className='preview-container'>
							<div className='d-flex'>
								<div className='code-preview'>
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

export default ButtonSize;
