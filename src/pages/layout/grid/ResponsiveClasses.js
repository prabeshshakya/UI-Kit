import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../docs/syntax-highlighter";

const ResponsiveClasses = () => {
  const code = `	
<div class="container">
 <div class="row px-4x">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
 </div>
 <div class="row">
  <div class="col-8">col-8</div>
  <div class="col-4">col-4</div>
 </div>
</div>
`;
  return (
    <>
      <div class="content-block">
        <h2>Responsive classes</h2>
        <h3 id="all-breakpoint">All breakpoints</h3>
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
                    <div class="row">
                      <div class="col">
                        <div className="eg-box">col</div>
                      </div>
                      <div class="col">
                        <div className="eg-box">col</div>
                      </div>
                      <div class="col">
                        <div className="eg-box">col</div>
                      </div>
                      <div class="col">
                        <div className="eg-box">col</div>
                      </div>
                    </div>
                  </div>

                  <div className="example-row">
                    <div class="row">
                      <div class="col-8">
                        <div className="eg-box">col-8</div>
                      </div>
                      <div class="col-4">
                        <div className="eg-box">col-4</div>
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

export default ResponsiveClasses;
