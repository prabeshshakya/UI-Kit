import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../common/syntax-highlighter";

const VariableWidthContent = () => {
	const code = `	
	<div class="container">
        <div class="row justify-content-center-md">
            <div class="col-2-lg">1 of 3</div>
            <div class="col-auto-md">variable with content</div>
            <div class="col-2-lg">3 of 3</div>
        </div>
        <div class="row">
            <div class="col-xs">1 of 3</div>
            <div class="col-auto-md">variable with content</div>
            <div class="col-2-lg">3 of 3</div>
        </div>
    </div>
`;
	return (
		<>
			<h2>Variable width content</h2>
			<div class="content-block">
				<div className="usage-markup-preview">
					<Tabs>
						<TabList>
							<Tab>Preview</Tab>
							<Tab>Code</Tab>
						</TabList>

						<TabPanel>
							<div className="docs-container">
								<div class="container">
									<div class="row justify-content-center-md">
										<div class="col-2-lg">1 of 3</div>
										<div class="col-auto-md">variable with content</div>
										<div class="col-2-lg">3 of 3</div>
									</div>
									<div class="row">
										<div class="col-xs">1 of 3</div>
										<div class="col-auto-md">variable with content</div>
										<div class="col-2-lg">3 of 3</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="preview-container">
								<div className="d-flex">
									<div className="code-preview">
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
