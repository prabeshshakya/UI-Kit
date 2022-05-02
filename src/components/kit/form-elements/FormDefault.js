import React from "react";
import { Syntax } from "../../common/syntax-highlighter";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const FormDefault = () => {
  const code = `<div class="row">
    <div class="col--7--md">
        <form action="">
            <div class="form-group">
                <label class="form-group__label">Email Address</label>
                <input type="email" class="form-group__control" placeholder="Email Address"/>
            </div>
            <div class="form-group">
                <label class="form-group__label">Password</label>
                <input type="password" class="form-group__control" placeholder="Your Secret"/>
            </div>
            <div class="form-group c-checkbox">
                <input type="checkbox" class="c-checkbox__control" id="checkbox"/>
                <label htmlFor="checkbox">Check Me</label>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn--primary btn--rounded">Submit</button>
            </div>
        </form>
    </div>
</div>`;

  const SampleUsageCode = `<div className="form-group">
    <label className="form-group__label">Email Address</label>
    <input type="email" className="form-group__control" placeholder="Email Address"/>
</div>`;

  return (
    <div className="doc-container">
      <h4 className="title title--medium title--dark mb--2x">Basic Usage</h4>
      <p className="page__brief">
        Below is the sample code that generates a email input field.
      </p>
      <div className="code-preview">
        <div className="mb--2x">
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
                        className="form-group__control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-group__label">Password</label>
                      <input
                        type="password"
                        className="form-group__control"
                        placeholder="Your Secret"
                      />
                    </div>
                    <div className="form-group c-checkbox">
                      <input
                        type="checkbox"
                        className="c-checkbox__control"
                        id="checkbox"
                      />
                      <label htmlFor="checkbox">Check Me</label>
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
                <div className="code-preview mt--0">
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
