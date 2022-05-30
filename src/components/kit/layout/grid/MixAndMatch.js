import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../common/syntax-highlighter";

const MixAndMatch = () => {
	const code = `	
	<div className="container">
                               
        <div className="row">
            <div className="col-8-md">.col-8-md</div>
            <div className="col-6 col-4-md">.col-6 .col-4-md</div>
        </div>
                                
        <div className="row">
            <div className="col-6 col-4-md">.col-6 .col-4-md</div>
            <div className="col-6 col-4-md">.col-6 .col-4-md</div>
            <div className="col-6 col-4-md">.col-6 .col-4-md</div>
        </div>
                                
        <div className="row">
            <div className="col-6">.col-6</div>
            <div className="col-6">.col-6</div>
        </div>
    </div>
`;
	return (
		<>
			<h2>Mix and match</h2>
			<div className="content-block">
				<div className="usage-markup-preview">
					<Tabs>
						<TabList>
							<Tab>Preview</Tab>
							<Tab>Code</Tab>
						</TabList>

						<TabPanel>
							<div className="docs-container">
								<div className="container">
									<div className="row">
										<div className="col-8-md">.col-8-md</div>
										<div className="col-6 col-4-md">.col-6 .col-4-md</div>
									</div>

									<div className="row">
										<div className="col-6 col-4-md">.col-6 .col-4-md</div>
										<div className="col-6 col-4-md">.col-6 .col-4-md</div>
										<div className="col-6 col-4-md">.col-6 .col-4-md</div>
									</div>

									<div className="row">
										<div className="col-6">.col-6</div>
										<div className="col-6">.col-6</div>
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

export default MixAndMatch;
