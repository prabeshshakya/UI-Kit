import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../docs/syntax-highlighter";

const VariableWidthContent = () => {
  const code = `	
<div class="container">
 <div class="row justify-content-md-center">
  <div class="col-2">1 of 3</div>
  <div class="col-md-auto">variable with content</div>
  <div class="col-2">3 of 3</div>
 </div>
 <div class="row">
  <div class="col">1 of 3</div>
  <div class="col-md-auto">variable with content</div>
  <div class="col-2">3 of 3</div>
 </div>
</div>
`;
  return (
    <>
      <div class="content-block">
        <h2 id="variable-width-content">Variable width content</h2>
        <div className="usage-markup-preview">
          <Tabs>
            <TabList>
              <Tab>Preview</Tab>
              <Tab>Code</Tab>
            </TabList>

            <TabPanel>
              <div className="docs-container">
                <div class="container">
                  <div className="example-row">
                    <div class="row justify-content-md-center">
                      <div class="col-lg-2">
                        <div className="eg-box">1 of 3</div>
                      </div>
                      <div class="col-md-auto">
                        <div className="eg-box">variable with content</div>
                      </div>
                      <div class="col-lg-2">
                        <div className="eg-box">3 of 3</div>
                      </div>
                    </div>
                  </div>

                  <div className="example-row">
                    <div class="row">
                      <div class="col">
                        <div className="eg-box">1 of 3</div>
                      </div>
                      <div class="col-md-auto">
                        <div className="eg-box">variable with content</div>
                      </div>
                      <div class="col-lg-2">
                        <div className="eg-box">3 of 3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="preview-container">
                <div className="d-flex">
                  <div className="code-preview">
                    <Syntax language="html">{code}</Syntax>
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
