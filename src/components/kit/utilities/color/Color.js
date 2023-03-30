import React from "react";
import { Syntax } from "../../../common/syntax-highlighter";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Color = () => {
  return (
    <div className="page">
      <div className="title-area">
        <h2 className="page__title">Colors / Background Colors</h2>
        <p className="lead-text">
          Include color with utility classes and add your own custom color.
        </p>
        <div className="content-block">
          <p className="page__brief">
            We can use color utility to colorize text, background. We can
            customize and add new colors as needed in <code>_color.scss</code>{" "}
            file. We can find the list of color variables and an array of color
            palettes in <code> _color.scss</code> file. Any additional colors or
            changes in existing colors can be done in this file. The array of
            colors (<code>$colorMap</code>) is being used in different functions
            and mixins to apply colors as needed.
          </p>
        </div>
        <div className="content-block mt-sm-4x">
          <h4>Color Text</h4>
          <table className="ui-html-table mb-10x">
            <tr>
              <td>
                <code>color-primary--base</code>
              </td>
              <td>
                <p className="color-primary--base mb-0x">
                  This is primary text
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code>color-secondary--light</code>
              </td>
              <td>
                <p className="color-secondary--light mb-0x">
                  This is secondary text
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code>color-white--base</code>
              </td>
              <td className=" py-1x px-2x">
                <p className="color-white--base bg-primary--base mb-0x">
                  This is white text
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code>color-black--base</code>
              </td>
              <td>
                <p className="color-black--base mb-0x">
                  This is black text
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code>color-success--base</code>
              </td>
              <td>
                <p className="color-success--base mb-0x">
                  This is success (green) text
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code>color-danger--base</code>
              </td>
              <td>
                <p className="color-danger--base mb-0x">
                  This is danger (Red) text
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code>color-warning--base</code>
              </td>
              <td>
                <p className="color-warning--base mb-0x">
                  This is warning (Yellow) text
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code>color-grey--4</code>
              </td>
              <td>
                <p className="color-grey--4 mb-0x">
                  This is grey text
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code>...</code>
              </td>
              <td>...</td>
            </tr>
          </table>

          <h4>Background Colors</h4>
          <table className="ui-html-table">
            <tr>
              <td>
                <code>bg-primary--base</code>
              </td>
              <td>
                <p className="bg-primary--base mb-0x color-white--base py-1x px-2x">
                  This is primary text
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code>bg-secondary--light</code>
              </td>
              <td>
                <p className="bg-secondary--light mb-0x color-white--base py-1x px-2x">
                  This is secondary text
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code>bg-danger--base</code>
              </td>
              <td>
                <p className="bg-danger--base mb-0x color-white--base py-1x px-2x">
                  This is danger (Red) text
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code>bg-grey--4</code>
              </td>
              <td>
                <p className="bg-grey--4 mb-0x color-white--base py-1x px-2x">
                  This is grey text
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <code>...</code>
              </td>
              <td>...</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Color;
