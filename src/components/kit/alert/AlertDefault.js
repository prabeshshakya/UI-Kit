import React from 'react';
import { Syntax } from '../../common/syntax-highlighter';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AlertDefault = () => {
  const code = `<div>
    <div class="alert alert--primary">
      <span class="alert__text">This is a primary alert.</span>
      <button class="alert__btn">
        <span>&times;</span>
      </button>
    </div>
</div>`

  return (
    <div className="doc-container">
      <h4 className="title title--medium title--dark mb--2x">Basic Usage</h4>
      <p>
        In-order to use this component, add <code>.alert</code> class and add modifiers such as <code>.alert--primary</code> to <code>div</code> tag.
      </p>
      <div className="code-preview">
        <div className="mb--2x">
          <Syntax>
            {'<div class="alert alert--primary">'}
          </Syntax>
        </div>
        <div className="mb--2x">
          <Syntax>
            {'  <span class="alert__text">This is a primary alert.</span>'}
          </Syntax>
        </div>
        <div className="mb--2x">
          <Syntax>
            {'  <button class="alert__btn">'}
          </Syntax>
        </div>
        <div className="mb--2x">
          <Syntax>
            {'    <span>&times;</span>'}
          </Syntax>
        </div>
        <div className="mb--2x">
          <Syntax>
            {'  </button>'}
          </Syntax>
        </div>
        <div className="mb--2x">
          <Syntax>
            {'</div>'}
          </Syntax>
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
              <div>
                <div class="alert alert--primary">
                  <span class="alert__text">This is a primary alert.</span>
                  <button class="btn alert__btn">
                    <span>&times;</span>
                  </button>
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
    </div >
  );
}

export default AlertDefault;