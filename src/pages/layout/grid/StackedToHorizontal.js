import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Syntax } from '../../../components/common/syntax-highlighter';

const StackedToHorizontal = () => {
	const code = `	
	<div class="container">
        <div class="row">
            <div class="col-sm-8">col-sm-8</div>
            <div class="col-sm-4">col-sm-4</div>
        </div>
        <div class="row">
            <div class="col-sm">col-sm</div>
            <div class="col-sm">col-sm</div>
            <div class="col-sm">col-sm</div>
        </div>
    </div>
`;
	return (
		<>
			<h2>Stacked to horizontal</h2>
			<div class='content-block'>
				<div className='usage-markup-preview'>
					<Tabs>
						<TabList>
							<Tab>Preview</Tab>
							<Tab>Code</Tab>
						</TabList>

						<TabPanel>
							<div className='docs-container'>
								<div class='container'>
									<div class='row'>
										<div class='col-sm-8'>col-sm-8</div>
										<div class='col-sm-4'>col-sm-4</div>
									</div>
									<div class='row'>
										<div class='col-sm'>col-sm</div>
										<div class='col-sm'>col-sm</div>
										<div class='col-sm'>col-sm</div>
									</div>
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
		</>
	);
};

export default StackedToHorizontal;
