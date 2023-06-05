import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Syntax } from '../../../components/common/syntax-highlighter';

const VariableWidthContent = () => {
	const code = `	
	<div class="container">
        <div class="row justify-content-center-md">
            <div class="c-lgol-2">1 of 3</div>
            <div class="col-md-auto">variable with content</div>
            <div class="c-lgol-2">3 of 3</div>
        </div>
        <div class="row">
            <div class="col-xs">1 of 3</div>
            <div class="col-md-auto">variable with content</div>
            <div class="c-lgol-2">3 of 3</div>
        </div>
    </div>
`;
	return (
		<>
			<h2>Variable width content</h2>
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
									<div class='row justify-content-center-md'>
										<div class='col-lg-2'>1 of 3</div>
										<div class='col-md-auto'>variable with content</div>
										<div class='col-lg-2'>3 of 3</div>
									</div>
									<div class='row'>
										<div class='col-xs'>1 of 3</div>
										<div class='col-md-auto'>variable with content</div>
										<div class='col-lg-2'>3 of 3</div>
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

export default VariableWidthContent;
