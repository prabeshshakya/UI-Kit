import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Syntax } from '../../../docs/syntax-highlighter';

const MixAndMatch = () => {
	const code = `
<div className="container">
 <div className="row">
  <div className="col-md-8">.col-md-8</div>
  <div className="col-6 col-md-4">.col-6 .col-md-4</div>
 </div>

 <div className="row">
  <div className="col-6 col-md-4">.col-6 .col-md-4</div>
  <div className="col-6 col-md-4">.col-6 .col-md-4</div>
  <div className="col-6 col-md-4">.col-6 .col-md-4</div>
 </div>

 <div className="row">
  <div className="col-6">.col-6</div>
  <div className="col-6">.col-6</div>
 </div>
</div>
`;
	return (
		<>
			<h2 id='mix-match'>Mix and match</h2>
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
											<div className='col-md-8'>
												<div className='eg-box'>.col-md-8</div>
											</div>
											<div className='col-6 col-md-4'>
												<div className='eg-box'>.col-6 .col-md-4</div>
											</div>
										</div>
									</div>

									<div className='example-row'>
										<div className='row'>
											<div className='col-6 col-md-4'>
												<div className='eg-box'>.col-6 .col-md-4</div>
											</div>
											<div className='col-6 col-md-4'>
												<div className='eg-box'>.col-6 .col-md-4</div>
											</div>
											<div className='col-6 col-md-4'>
												<div className='eg-box'>.col-6 .col-md-4</div>
											</div>
										</div>
									</div>

									<div className='example-row'>
										<div className='row'>
											<div className='col-6'>
												<div className='eg-box'>.col-6</div>
											</div>
											<div className='col-6'>
												<div className='eg-box'>.col-6</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<Syntax language='html'>{code}</Syntax>
						</TabPanel>
					</Tabs>
				</div>
			</div>
		</>
	);
};

export default MixAndMatch;
