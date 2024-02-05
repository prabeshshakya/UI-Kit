import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../docs/syntax-highlighter";
import { ReactComponent as CustomIconUrl1 } from "../../assets/customicon/custom-icon-1.svg";
import { FaCoffee } from "react-icons/fa";

const Icons = () => {
  const customIconCode = `
    import { ReactComponent as CustomIconUrl1 } from "../../assets/customicon/custom-icon-1.svg";

    <CustomIconUrl1 height="20" width="20" fill="red" />
    {/* Add other instances of MyIconComponent with different icons as needed */}
   
    `;

  const externalIconCode = `
    import { FaCoffee } from "react-icons/fa"; // Example of a React-icons icon

    <FaCoffee />
   
    `;

  return (
    <>
      <div className="content-block">
        <h4>Icon</h4>
        <p>
          Guidance and suggestions for using custom icon and external icon
          libraries.
        </p>
      </div>
      <div className="content-block">
        <h2 className="mb-2x">Custom Icon</h2>
        <p>Import custom Icon from local storage.</p>
        <div className="usage-markup-preview">
          <Tabs>
            <TabList>
              <Tab>Preview</Tab>
              <Tab>Code</Tab>
            </TabList>

            <TabPanel>
              <div className="docs-container">
                <div class="container">
                  <CustomIconUrl1 height="20" width="20" fill="red" />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="preview-container">
                <div className="code-preview">
                  <Syntax language="html">{customIconCode}</Syntax>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className="content-block">
        <h2 className="mb-2x">External Library Icon</h2>
        <p>Import Icon from React Icons library.</p>
        <div className="usage-markup-preview">
          <Tabs>
            <TabList>
              <Tab>Preview</Tab>
              <Tab>Code</Tab>
            </TabList>

            <TabPanel>
              <div className="docs-container">
                <div class="container">
                  <FaCoffee size="20" color="red" />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="preview-container">
                <div className="code-preview">
                  <Syntax language="html">{externalIconCode}</Syntax>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Icons;
