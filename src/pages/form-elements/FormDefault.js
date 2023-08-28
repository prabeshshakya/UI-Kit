import React from "react";
import { Syntax } from "../../docs/syntax-highlighter";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const FormDefault = () => {
  const code = `<div class="row">
    <div class="col--7--md">
        <form action="">
            <div class="form-group">
                <label class="form-group__label">Email Address</label>
                <input type="email" class="form-group__control mt-2x" placeholder="Email Address"/>
            </div>
            <div class="form-group">
                <label class="form-group__label">Password</label>
                <input type="password" class="form-group__control mt-2x" placeholder="Your Secret"/>
            </div>
            <div class="form-group c-checkbox d-flex align-items-center">
                <input type="checkbox" class="c-checkbox__control" id="checkbox"/>
                <label class="ml-2x" htmlFor="checkbox">Check Me</label>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn--primary btn--rounded">Submit</button>
            </div>
        </form>
    </div>
</div>`;

  const SampleUsageCode = `<div className="form-group">
    <label className="form-group__label">Email Address</label>
    <input type="email" className="form-group__control mt-2x" placeholder="Email Address"/>
</div>`;

  return (
    <div className="doc-container">
      <h4>Basic Usage</h4>
      <p className="page__brief">
        Below is the sample code that generates a email input field.
      </p>
      <div className="code-preview">
        <div className="mb-2x">
          <Syntax>{SampleUsageCode}</Syntax>
        </div>
      </div>
      <div className="usage-markup-preview">
        <Tabs>
          <TabList>
            <Tab>Preview</Tab>
            <Tab>Code</Tab>
          </TabList>

          <TabPanel>
            <div className="preview-container">
              <div className="row m-0x">
                <div className="col--7--md">
                  <form action="">
                    <div className="form-group">
                      <label className="form-group__label">Email Address</label>
                      <input
                        type="email"
                        className="form-group__control mt-2x"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-group__label">Password</label>
                      <input
                        type="password"
                        className="form-group__control mt-2x"
                        placeholder="Your Secret"
                      />
                    </div>
                    <div className="form-group c-checkbox d-flex align-items-center">
                      <input
                        type="checkbox"
                        className="c-checkbox__control"
                        id="checkbox"
                      />
                      <label className="ml-2x" htmlFor="checkbox">
                        Check Me
                      </label>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn--primary btn--rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
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
  );
};

export default FormDefault;
