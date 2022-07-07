import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../common/syntax-highlighter";

const EqualWidth = () => {
	const code = `	
<div class="container">
	<div class="row px-4x">
		<div class="col-12">1 of 2</div>
		<div class="col-12">2 of 2</div>
	</div>
	<div class="row px-4x">
		<div class="col-12">1 of 3</div>
		<div class="col-12">2 of 3</div>
		<div class="col-12">3 of 3</div>
	</div>
</div>
`;
	return (
		<>
			<h2>Equal-width</h2>
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
									<div class="row">
										<div class="col-xs">1 of 2</div>
										<div class="col-xs">2 of 2</div>
									</div>
									<div class="row">
										<div class="col-xs">1 of 3</div>
										<div class="col-xs">2 of 3</div>
										<div class="col-xs">3 of 3</div>
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

export default EqualWidth;