import React from "react";
import { Syntax } from "../../../common/syntax-highlighter";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Color = () => {
  const colorMap = `
  // Base Color
$white: #ffffff !default;
$black: #000000 !default;

$primary: #4fc3f7 !default;
$secondary: #66bb6a !default;

$green: #249F5D !default;
$red: #ef5350 !default;

  $colorMap: (
    "white": (
      "base": $white,
    ),
    "black": (
      "base": $black
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
    "danger": (
      "base": $red,
      "light": lighten($red, 10%),
      "dark": darken($red, 10%),
    ),
    "success": (
      "base": $green,
      "light": lighten($green, 10%),
      "dark": darken($green, 10%),
    ),
    "grey": (
      'base': #f5f8fa,
      'disabled': #e6ebee,
      '1': #f9f9f9,
      '2': #b8c2c8,
      '3': #959595,
      '4': #979797,
      '5': rgba($black, 0.2),
      '6': rgba($black, 0.6)
    )
  );
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
    <div className="page">
      <div className="title-area">
        <h2 className="page__title">Colors / Background Colors</h2>
        <p className="lead-text">Mixins and CSS usage for Color.</p>
        <div className="content-block">
          <p className="page__brief">
            All the variables for colors are stored in
            <code>variables/_colors.scss</code>. And those variable are
            retrieved and used in same file. All the color variable are stored
            as per project needs.
          </p>
          <div className="code-preview">
            <Syntax language="scss">{colorMap}</Syntax>
          </div>
        </div>

        <div className="content-block">
          <h4>getColor()</h4>
          <p className="page__brief">
            In <code>_helpers.scss</code> file, we can find a function
            <code>getColor()</code>, which maps the color from the color map
            variable in
            <code>_color.scss</code>.The <code>getColor()</code> function then
            helps us to easily apply color from the variable file to the
            respective component as necessary.
          </p>
        </div>
        <div className="content-block">
          <h4>Examples:</h4>
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
      </div>
    </div>
  );
};

export default Color;