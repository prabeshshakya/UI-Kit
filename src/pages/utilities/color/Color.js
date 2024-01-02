import React from "react";
import Sidebar from "./Sidebar";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Syntax } from "../../../docs/syntax-highlighter";

const Color = () => {
  const colorText = `
	<table className="ui-html-table mb-10x">
        <tr>
        	<td>
        	<h3 className="color-primary--base">This is primary text</h3>
        	</td>
        </tr>
        <tr>
        	<td>
        	<h3 className="color-secondary--light">This is secondary text</h3>
        	</td>
        </tr>
        <tr>
        	<td>
        	<h3 className="color-black--base">This is black text</h3>
        	</td>
        </tr>
        <tr>
        	<td>
        	<h3 className="color-success--base">This is success text</h3>
        	</td>
        </tr>
        <tr>
        	<td>
         	...
        	</td>
        </tr>
    </table>
	
	`;

  const backgroundColor = `
  <table className="ui-html-table">
  <tr>
	<td>
	  <div className="bg-primary--base mb-0x color-white--base py-1x px-2x">
		This is primary text
	  </div>
	</td>
  </tr>
  <tr>
	<td>
	  <div className="bg-secondary--light mb-0x color-white--base py-1x px-2x">
		This is secondary text
	  </div>
	</td>
  </tr>
  <tr>
	<td>
	  <div className="bg-danger--base mb-0x color-white--base py-1x px-2x">
		This is danger (Red) text
	  </div>
	</td>
  </tr>
  <tr>
	<td>
	  <div className="bg-grey--4 mb-0x color-white--base py-1x px-2x">
		This is grey text
	  </div>
	</td>
  </tr>
  <tr>
	<td>...</td>
  </tr>
</table>
	`;

  const colorMap = `
// Base Color
$white: #ffffff !default;
$black: #000000 !default;
$primary: #4fc3f7 !default;
$secondary: #66bb6a !default;
	
$colorMap: (
"white": (
"base": $white,
),
"black": (
"base": $black,
),
"primary": (
"base": $primary,
"dark": darken($primary, 10%),
"light": lighten($primary, 10%),
),
"secondary": (
"base": $secondary,
"dark": darken($secondary, 10%),
"light": lighten($secondary, 10%),
),
	
"grey": (
"base": #f5f8fa,
"disabled": #e6ebee,
"1": #f9f9f9,
"2": #b8c2c8,
"3": #959595,
...
),
);
        `;

  const customColorVariable = `
// Base Color
$customColor: 	#28282B;
	`;

  const customColorMap = `
// Base Color
$customColor: 	#28282B;
		
$colorMap: (
"customColor": (
"base": $customColor,
)
);	
		`;

  const customColorMapUsage = `
<h2 className="color-customColor">heading</h2>
	`;

  const code = `
    .color-box-1 p {
      color:getColor("primary.base")
    }
    .color-box-2 p {
      color:getColor("danger.light")
    }
    .color-box-3 p {
      color:getColor("grey.4")
    }

	//For Background Colors
	.bg-box-1 {
		p {
		  background-color: getColor("primary.base");
		  color: getColor('white.base');
		}
	  }
	  
	  .bg-box-2 {
		p {
		  background-color: getColor("danger.light");
		  color: getColor('white.base');
		}
	  }
	  
	  .bg-box-3 {
		p {
		  background-color: getColor("grey.4");
		  color: getColor('white.base');
		}
	  }`;
  return (
    <div className="row">
      <div className="col">
        <div className="page">
          <div className="title-area">
            <div className="content-block">
              <h2 className="page__title">Colors / Background Colors</h2>
              <p className="lead-text">
                Include color with utility classes and add your own custom
                color.
              </p>
            </div>
            <div className="content-block">
              <p className="page__brief">
                We can use color utility to colorize text, background. We can
                customize and add new colors as needed in{" "}
                <code>_color.scss</code> file. We can find the list of color
                variables and an array of color palettes in{" "}
                <code> _color.scss</code> file. Any additional colors or changes
                in existing colors can be done in this file. The array of colors
                (<code>$colorMap</code>) is being used in different functions
                and mixins to apply colors as needed.
              </p>
            </div>
            <div className="content-block mt-sm-4x">
              <h4 id="text-color">Color Text</h4>

              <div className="usage-markup-preview">
                <Tabs>
                  <TabList>
                    <Tab>Preview</Tab>
                    <Tab>Code</Tab>
                  </TabList>
                  <TabPanel>
                    <div className="preview-container">
                      <div class="table__wrapper">
                        <table className="ui-html-table mb-10x">
                          <tr>
                            <td>
                              <h3 className="color-primary--base mb-0x">
                                This is primary text
                              </h3>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h3 className="color-secondary--light mb-0x">
                                This is secondary text
                              </h3>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h3 className="color-black--base mb-0x">
                                This is black text
                              </h3>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h3 className="color-success--base mb-0x">
                                This is success (green) text
                              </h3>
                            </td>
                          </tr>
                          <tr>
                            <td>...</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="preview-container">
                      <div className="d-flex">
                        <div className="code-preview">
                          <Syntax language="css">{colorText}</Syntax>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
            <div className="content-block mt-sm-4x">
              <h4 id="background-color">Background Colors</h4>

              <div className="usage-markup-preview">
                <Tabs>
                  <TabList>
                    <Tab>Preview</Tab>
                    <Tab>Code</Tab>
                  </TabList>
                  <TabPanel>
                    <div className="preview-container">
                      <table className="ui-html-table">
                        <tr>
                          <td>
                            <div className="bg-primary--base mb-0x color-white--base py-1x px-2x">
                              This is primary text
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="bg-secondary--light mb-0x color-white--base py-1x px-2x">
                              This is secondary text
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="bg-danger--base mb-0x color-white--base py-1x px-2x">
                              This is danger (Red) text
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="bg-grey--4 mb-0x color-white--base py-1x px-2x">
                              This is grey text
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>...</td>
                        </tr>
                      </table>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="preview-container">
                      <div className="d-flex">
                        <div className="code-preview">
                          <Syntax language="css">{backgroundColor}</Syntax>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>

            <div className="content-block">
              <h4 id="variables">Variables</h4>
              <p className="page__brief">
                All the variables for colors are stored in
                <code>variables/_colors.scss</code>. And those variable are
                retrieved and used in same file. All the color variable are
                stored as per project needs.
              </p>
              <div className="code-preview">
                <Syntax language="scss">{colorMap}</Syntax>
              </div>
            </div>

            <div className="content-block">
              <h2>Scss Usages</h2>
              <h4 id="getcolor">getColor()</h4>
              <p className="page__brief">
                In <code>_helpers.scss</code> file, we can find a function
                <code>getColor()</code>, which maps the color from the color map
                variable in
                <code>_color.scss</code>.The <code>getColor()</code> function
                then helps us to easily apply color from the variable file to
                the respective component as necessary.
              </p>
            </div>
            <div className="content-block">
              <h4 id="example">Examples:</h4>
              <p className="page__brief">Syntax for this function:</p>
              <div className="usage-markup-preview">
                <Tabs>
                  <TabList>
                    <Tab>Preview</Tab>
                    <Tab>Code</Tab>
                  </TabList>
                  <TabPanel>
                    <div className="preview-container">
                      <div className="color-box-1">
                        <p>This is a color sample text.</p>
                      </div>
                      <div className="color-box-2">
                        <p>This is a color sample text.</p>
                      </div>
                      <div className="color-box-3">
                        <p>This is a color sample text.</p>
                      </div>

                      <div className="bg-box-1">
                        <p>This is a color sample text.</p>
                      </div>
                      <div className="bg-box-2">
                        <p>This is a color sample text.</p>
                      </div>
                      <div className="bg-box-3">
                        <p>This is a color sample text.</p>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="preview-container">
                      <div className="d-flex">
                        <div className="code-preview">
                          <Syntax language="css">{code}</Syntax>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
            <div className="content-block">
              <h2 id="customColor">Custom Color</h2>
              <p>
                For custom color we have to add color variable in
                <code>variables/_colors.scss</code> file.
              </p>
              <h3>For setting up Scss color variable.</h3>
              <p>
                Variables in SCSS are prefixed with a <code>'$'</code> sign and
                can be named whatever you like.
              </p>
            </div>
            <div className="content-block">
              <h4>Examples:</h4>
              <div className="code-preview">
                <Syntax language="scss">{customColorVariable}</Syntax>
              </div>
            </div>
            <div className="content-block">
              <h3>
                For setting up Scss color variable with <code>$colorMap</code>
              </h3>

              <p>First, you have to created a color variable.</p>
            </div>

            <div className="content-block">
              <h4>Examples:</h4>
              <div className="code-preview">
                <Syntax language="scss">{customColorMap}</Syntax>
              </div>
            </div>
            <div className="content-block">
              <p>
                After creating Scss color with Scss map. We can use it in HTML
                as:
              </p>
              <div className="code-preview">
                <Syntax language="scss">{customColorMapUsage}</Syntax>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2">
        <Sidebar />
      </div>
    </div>
  );
};

export default Color;
