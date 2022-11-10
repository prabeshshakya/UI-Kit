import React from "react";
import { Syntax } from "../../../common/syntax-highlighter";

const FontWeight = () => {
  return (
    <>
      <div className="content-block">
        <h3>Font Weight</h3>
        <p className="page__brief">
          We can quickly change the font-weight or font style of the text with
          these utilities. Similar to the color variables, we have the array of
          variables defined for font weights in the <code>_font.scss</code>
          file.In the <code>_font.scss</code> file, we can find the list of
          objects defined for the different font weights. Then this object (
          <code>$fontWeight</code>) is being used in different functions and
          mixins to apply font weights as needed. We can add, remove, or
          customized font weights from the variables files as required
          <br />
          We have the <code>getFontWeight()</code> function to apply font-weight
          properties.
        </p>
      </div>
      <div className="content-block">
        <h4>Usage</h4>
        <table className="table">
          <thead>
            <tr>
              <th>ClassName</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>.fw-thin</code>
              </td>
              <td>
                <span className="fw-thin">This text has 100 weight</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.fw-extralight</code>
              </td>
              <td>
                <span className="fw-extralight">This text has 200 weight</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.fw-light</code>
              </td>
              <td>
                <span className="fw-light">This text has 300 weight</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.fw-normal</code>
              </td>
              <td>
                <span className="fw-normal">This text has 400 weight</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.fw-medium</code>
              </td>
              <td>
                <span className="fw-medium">This text has 500 weight</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.fw-semibold</code>
              </td>
              <td>
                <span className="fw-semibold">This text has 600 weight</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.fw-bold</code>
              </td>
              <td>
                <span className="fw-bold">This text has "bold" weight</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.fw-extrabold</code>
              </td>
              <td>
                <span className="fw-extrabold">This text has 800 weight</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.fw-black</code>
              </td>
              <td>
                <span className="fw-black">This text has 900 weight</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-block">
        <h3>Font Style</h3>
        <p className="page__brief">
          We can quickly change the font-style of the text with these utilities.
        </p>

        <h4>Usage</h4>
        <table className="table">
          <thead>
            <tr>
              <th>ClassName</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>.text-normal</code>
              </td>
              <td>
                <span className="text-normal">This is normal text</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.text-italic</code>
              </td>
              <td>
                <span className="text-italic">This is italic text</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.text-oblique</code>
              </td>
              <td>
                <span className="text-oblique">This is oblique text</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-block">
        <h3>Text Transform</h3>
        <p className="page__brief">
          We can quickly change the text transform of the text with these
          utilities.
        </p>

        <h4>Usage</h4>
        <table className="table">
          <thead>
            <tr>
              <th>ClassName</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>.text-uppercase</code>
              </td>
              <td>
                <span className="text-uppercase">This is uppercase text</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.text-lowercase</code>
              </td>
              <td>
                <span className="text-lowercase">This is lowercase text</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.text-capitalize</code>
              </td>
              <td>
                <span className="text-capitalize">This is capitalize text</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-block">
        <h3>Text Utilities</h3>
        <p className="page__brief">
          We can quickly change the text utils of the text with these utilities.
        </p>

        <h4>Usage</h4>
        <table className="table">
          <thead>
            <tr>
              <th>ClassName</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>.text-center</code>
              </td>
              <td>
                <span className="text-center d-block">This is center text</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.text-left</code>
              </td>
              <td>
                <span className="text-left d-block">This is left text</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.text-right</code>
              </td>
              <td>
                <span className="text-right d-block">This is right text</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.text-justify</code>
              </td>
              <td>
                <span className="text-justify d-block">
                  This is justify text
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.text-underline</code>
              </td>
              <td>
                <span className="text-underline d-block">
                  This is underline text
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.text-striked</code>
              </td>
              <td>
                <span className="text-striked d-block">
                  This is striked text
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FontWeight;
