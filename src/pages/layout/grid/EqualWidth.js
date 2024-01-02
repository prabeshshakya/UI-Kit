import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../docs/syntax-highlighter";

const EqualWidth = () => {
  const code = `	
<div class="container">
 <div class="row">
  <div class="col-xs">1 of 2</div>
  <div class="col-xs">1 of 2</div>
 </div>
 <div class="row">
  <div class="col-xs">1 of 3</div>
  <div class="col-xs">2 of 3</div>
  <div class="col-xs">3 of 3</div>
 </div>
</div>
`;
  return (
    <>
      <div class="content-block">
        <h2 id="equal-width">Equal-width</h2>
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
                      <div class="col-xs">
                        <div className="eg-box">1 of 2</div>
                      </div>
                      <div class="col-xs">
                        <div className="eg-box">1 of 2</div>
                      </div>
                    </div>
                  </div>

                  <div className="example-row">
                    <div class="row">
                      <div class="col-xs">
                        <div className="eg-box">1 of 3</div>
                      </div>
                      <div class="col-xs">
                        <div className="eg-box">2 of 3</div>
                      </div>
                      <div class="col-xs">
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

export default EqualWidth;
