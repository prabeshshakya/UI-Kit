import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Syntax } from '../../../docs/syntax-highlighter';

const SettingOneColumnWidth = () => {
	const code = `	
<div class="container">
 <div class="row">
  <div class="col">1 of 3</div>
  <div class="col-6">2 of 3 (wider)</div>
  <div class="col">3 of 3</div>
 </div>
 <div class="row">
  <div class="col">1 of 3</div>
  <div class="col-5">2 of 3 (wider)</div>
  <div class="col">3 of 3</div>
 </div>
</div>
`;
	return (
		<>
			<h2 id='setting-one-column-width'>Setting one column width</h2>
			<div className='content-block'>
				<div className='usage-markup-preview'>
					<Tabs>
						<TabList>
							<Tab>Preview</Tab>
							<Tab>Code</Tab>
						</TabList>

						<TabPanel>
							<div className='docs-container'>
								<div className='container'>
									<div className='example-row'>
										<div className='row'>
											<div className='col'>
												<div className='eg-box'>1 of 3</div>
											</div>
											<div className='col-6'>
												<div className='eg-box'>2 of 3 (wider)</div>
											</div>
											<div className='col'>
												<div className='eg-box'>3 of 3</div>
											</div>
										</div>
									</div>

									<div className='example-row'>
										<div className='row'>
											<div className='col'>
												<div className='eg-box'>1 of 3</div>
											</div>
											<div className='col-5'>
												<div className='eg-box'>2 of 3 (wider)</div>
											</div>
											<div className='col'>
												<div className='eg-box'>3 of 3</div>
											</div>
										</div>
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
			</div>
		</>
	);
};

export default SettingOneColumnWidth;
