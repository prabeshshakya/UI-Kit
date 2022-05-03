import React from "react";
import { Syntax } from "../../../common/syntax-highlighter";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Color = () => {
  const colorMap = `$colorMap: (
        "white": (
          "base": $white,
        ),
        );`;

  const code = `
        .color-box p{
            color:getColor(“primary.base”)
                      }
            
        `;
  const variableCode = `
        // Default Color
        $white: #ffffff !default;
        $black: #000000 !default;
        
        // Base colors
        $primary-color: #4fc3f7 !default;
        $secondary-color: #66bb6a !default;
        $error-color: #ef5350 !default;
        $warning-color: #ffca28 !default;
        $warning-alt-color: #ff9800 !default;
        $blue-grey: #9cb2bf !default;
        $base-grey: #333333 !default;
        $light-grey: lighten($base-grey, 15%);
        $xlight-grey: lighten($light-grey, 15%);
        $xxlight-grey: lighten($xlight-grey, 15%);
        $xxxlight-grey: lighten($xxlight-grey, 15%);
        $xxxxlight-grey: lighten($xxxlight-grey, 15%);
        
        $bg-color: #f6f8f9 !default;
        
        //Color Palette
        $colorMap: (
          "white": (
            "base": $white,
          ),
          "blue-grey": (
            "lighter": lighten($blue-grey, 25%),
            "light": lighten($blue-grey, 20%),
            "base": lighten($blue-grey, 10%),
            "dark": $blue-grey,
            "darker": darken($blue-grey, 15%),
          ),
          "black": (
            "base": $black,
            "black90": rgba($black, 0.9),
            "black80": rgba($black, 0.8),
            "black70": rgba($black, 0.7),
            "black60": rgba($black, 0.6),
            "black50": rgba($black, 0.5),
            "black40": rgba($black, 0.4),
            "black30": rgba($black, 0.3),
            "black20": rgba($black, 0.2),
            "black10": rgba($black, 0.1),
            "black38": #383838,
            "black48": #f1f1f1,
          ),
          "primary": (
            "base": $primary-color,
            "dark": darken($primary-color, 10%),
            "light": lighten($primary-color, 10%),
          ),
          "secondary": (
            "base": $secondary-color,
            "dark": darken($secondary-color, 10%),
            "light": lighten($secondary-color, 10%),
          ),
          "error": (
            "base": $error-color,
            "dark": darken($error-color, 10%),
            "light": lighten($error-color, 10%),
          ),
          "warning": (
            "base": $warning-color,
            "dark": darken($warning-color, 10%),
            "light": lighten($warning-color, 10%),
          ),
          "warning-alt": (
            "base": $warning-alt-color,
            "dark": darken($warning-alt-color, 10%),
            "light": lighten($warning-alt-color, 10%),
          ),
          "grey": (
            "base": $base-grey,
            "light": $light-grey,
            "xlight": $xlight-grey,
            "xxlight": $xxlight-grey,
            "xxxlight": $xxxlight-grey,
            "xxxxlight": $xxxlight-grey,
          ),
        );
                   
        `;

  return (
    <div className="page mt--11x">
      <div className="title-area  mb--7x">
        <h2 className="title title--largest title--dark font-weight--thin mb--4x">
          Colors
        </h2>
        <p className="lead-text">
          Include color with utility classes and add your own custom color.
        </p>
        <div className="content-block">
          <h3>Colors</h3>
          <p className="page__brief">
            We can use color utility to colorize text, background, buttons. We
            can customize and add new colors as needed in _color.scss file. We
            can find the list of color variables and an array of color palettes
            in <code> _color.scss</code> file. Any additional colors or changes
            in existing colors can be done in this file. The array of colors (
            <code>$colorMap</code>) is being used in different functions and
            mixins to apply colors as needed.
          </p>
          <Syntax>{colorMap}</Syntax>
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
                  <div className="color-box">
                    <p>This is a color sample text.</p>
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

        <div className="content-block">
          <h4>Variables</h4>
          <p className="page__brief">
            These are the color variables defined in the{" "}
            <code>_color.scss</code> file. You can also include your own custom
            color code as per your need.
          </p>
          <Syntax>{variableCode}</Syntax>
        </div>
      </div>
    </div>
  );
};

export default Color;
