import React from "react";
import { Syntax } from "../../docs/syntax-highlighter";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Select = () => {
  const defaultCode = `<select className="form-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`;

  const disableCode = `<select className="form-select" disabled>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`;
  return (
    <div className="dooc-container">
      <h4>Select</h4>

      <p className="page__brief">
        Below is the sample code that generates a <code>select</code>.
      </p>
      <h3>Default</h3>

      <div className="usage-markup-preview mb-11x">
        <Tabs>
          <TabList>
            <Tab>Preview</Tab>
            <Tab>Code</Tab>
          </TabList>

          <TabPanel>
            <div className="preview-container">
              <div className="row m-0x">
                <div className="col--7--md">
                  <select className="form-select">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="preview-container">
              <div className="d-flex">
                <div className="code-preview">
                  <Syntax>{defaultCode}</Syntax>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <h3>Disabled</h3>
      <p className="page__brief">
        Add the disabled boolean attribute on a select to give it a grayed out
        appearance and remove pointer events.
      </p>

      <div className="usage-markup-preview mb-11x">
        <Tabs>
          <TabList>
            <Tab>Preview</Tab>
            <Tab>Code</Tab>
          </TabList>

          <TabPanel>
            <div className="preview-container">
              <div className="row m-0x">
                <div className="col--7--md">
                  <select className="form-select" disabled>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="preview-container">
              <div className="d-flex">
                <div className="code-preview">
                  <Syntax>{disableCode}</Syntax>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Select;
