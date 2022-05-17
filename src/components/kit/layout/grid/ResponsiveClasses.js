import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../common/syntax-highlighter";

const ResponsiveClasses = () => {
	const code = `	
	<div class="container">
        <div class="row px-4x">
            <div class="col-xs">col</div>
            <div class="col-xs">col</div>
            <div class="col-xs">col</div>
            <div class="col-xs">col</div>
        </div>
        <div class="row">
            <div class="col-8">col-8</div>
            <div class="col-4">col-4</div>
        </div>
    </div>
`;
	return (
		<>
			<h2>Responsive classes</h2>
			<h2>All breakpoints</h2>
			<div class="content-block">
				<strong>Usage</strong>
				<div className="usage-markup-preview">
					<Tabs>
						<TabList>
							<Tab>Preview</Tab>
							<Tab>Code</Tab>
						</TabList>

						<TabPanel>
							<div className="docs-container">
								<div class="container">
									<div class="row px-4x">
										<div class="col-xs">col</div>
										<div class="col-xs">col</div>
										<div class="col-xs">col</div>
										<div class="col-xs">col</div>
									</div>
									<div class="row">
										<div class="col-8">col-8</div>
										<div class="col-4">col-4</div>
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

export default ResponsiveClasses;
