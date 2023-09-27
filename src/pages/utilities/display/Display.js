import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../docs/syntax-highlighter";
import Sidebar from "./Sidebar";

const Display = () => {
  const inlineBlockCode = `
    //For Non Block Element
    <div class="d-inline mr-4x">d-inline</div>
    <div class="d-inline mr-4x">d-inline</div> 
    
    //For Block Element
    <span class="d-block mb-4x">d-block</span>
    <span class="d-block mb-4x">d-block</span> 

    `;
  return (
    <div className="row">
      <div className="col">
        <div className="page">
          <div className="title-area">
            <div className="content-block">
              <h2 className="page__title">Display</h2>
              <p className="lead-text">
                We can use our display utilities for responsively toggling
                common values of the display property. Mix it with our grid
                system, content, or components to show or hide them across
                specific viewports.
              </p>
            </div>
          </div>

          <div className="content-block">
            <h3 id="how-it-works">How it works</h3>
            <p className="page__brief">
              Change the value of the{" "}
              <a
                target="blank"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
              >
                display property
              </a>{" "}
              with our responsive display utility classes. We purposely support
              only a subset of all possible values for <code>display</code>.
              Classes can be combined for various effects as you need.
            </p>
            <p>As such, the classes are named using the format:</p>
            <ul className="list-style">
              <li>
                <code>d-[value]</code> for <code>xs</code>
              </li>
              <li>
                <code>d-[breakpoint]-[value]</code> for{" "}
                <code>sm, md, lg, xl,</code> and <code>xxl</code>.
              </li>
            </ul>
            <p>Where value is one of:</p>
            <ul className="list-style">
              <li>
                <code>none</code>
              </li>
              <li>
                <code>inline </code>
              </li>
              <li>
                <code>inline-block </code>
              </li>
              <li>
                <code>block </code>
              </li>
              <li>
                <code>table </code>
              </li>
              <li>
                <code>table-cell </code>
              </li>
              <li>
                <code>table-row </code>
              </li>
              <li>
                <code>flex </code>
              </li>
              <li>
                <code>inline-flex</code>
              </li>
            </ul>

            <p>
              The media queries affect screen widths with the given breakpoint
              or larger. For example, <code>.d-lg-none</code> sets{" "}
              <code>display: none;</code> on <code>lg, xl,</code> and{" "}
              <code>xxl</code> screens.
            </p>
          </div>

          <div className="content-block">
            <h4 id="classes">Classes</h4>

            <div class="table__wrapper">
              <table className="table mb-4x">
                <thead>
                  <tr>
                    <th scope="col">ClassName</th>
                    <th scope="col">
                      xs
                      <br />
                      <span>&lt;576px</span>
                    </th>
                    <th scope="col">
                      sm
                      <br />
                      <span>≥576px</span>
                    </th>
                    <th scope="col">
                      md
                      <br />
                      <span>≥768px</span>
                    </th>
                    <th scope="col">
                      lg
                      <br />
                      <span>≥992px</span>
                    </th>
                    <th scope="col">
                      xl
                      <br />
                      <span>≥1200px</span>
                    </th>
                    <th scope="col">
                      xxl
                      <br />
                      <span>≥1400px</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <code>d-inline</code>
                    </th>
                    <td>
                      <code>d-inline</code>
                    </td>
                    <td>
                      <code>d-sm-inline</code>
                    </td>
                    <td>
                      <code>d-md-inline</code>
                    </td>
                    <td>
                      <code>d-lg-inline</code>
                    </td>
                    <td>
                      <code>d-xl-inline</code>
                    </td>
                    <td>
                      <code>d-xxl-inline</code>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>d-inline-block</code>
                    </th>
                    <td>
                      <code>d-inline-block</code>
                    </td>
                    <td>
                      <code>d-sm-inline-block</code>
                    </td>
                    <td>
                      <code>d-md-inline-block</code>
                    </td>
                    <td>
                      <code>d-lg-inline-block</code>
                    </td>
                    <td>
                      <code>d-xl-inline-block</code>
                    </td>
                    <td>
                      <code>d-xxl-inline-block</code>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>d-block</code>
                    </th>
                    <td>
                      <code>d-block</code>
                    </td>
                    <td>
                      <code>d-sm-block</code>
                    </td>
                    <td>
                      <code>d-md-block</code>
                    </td>
                    <td>
                      <code>d-lg-block</code>
                    </td>
                    <td>
                      <code>d-xl-block</code>
                    </td>
                    <td>
                      <code>d-xxl-block</code>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>d-table</code>
                    </th>
                    <td>
                      <code>d-table</code>
                    </td>
                    <td>
                      <code>d-sm-table</code>
                    </td>
                    <td>
                      <code>d-md-table</code>
                    </td>
                    <td>
                      <code>d-lg-table</code>
                    </td>
                    <td>
                      <code>d-xl-table</code>
                    </td>
                    <td>
                      <code>d-xxl-table</code>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>d-table-cell</code>
                    </th>
                    <td>
                      <code>d-table-cell</code>
                    </td>
                    <td>
                      <code>d-sm-table-cell</code>
                    </td>
                    <td>
                      <code>d-md-table-cell</code>
                    </td>
                    <td>
                      <code>d-lg-table-cell</code>
                    </td>
                    <td>
                      <code>d-xl-table-cell</code>
                    </td>
                    <td>
                      <code>d-xxl-table-cell</code>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>d-table-row</code>
                    </th>
                    <td>
                      <code>d-table-row</code>
                    </td>
                    <td>
                      <code>d-sm-table-row</code>
                    </td>
                    <td>
                      <code>d-md-table-row</code>
                    </td>
                    <td>
                      <code>d-lg-table-row</code>
                    </td>
                    <td>
                      <code>d-xl-table-row</code>
                    </td>
                    <td>
                      <code>d-xxl-table-row</code>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>d-flex</code>
                    </th>
                    <td>
                      <code>d-flex</code>
                    </td>
                    <td>
                      <code>d-sm-flex</code>
                    </td>
                    <td>
                      <code>d-md-flex</code>
                    </td>
                    <td>
                      <code>d-lg-flex</code>
                    </td>
                    <td>
                      <code>d-xl-flex</code>
                    </td>
                    <td>
                      <code>d-xxl-flex</code>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>d-inline-flex</code>
                    </th>
                    <td>
                      <code>d-inline-flex</code>
                    </td>
                    <td>
                      <code>d-sm-inline-flex</code>
                    </td>
                    <td>
                      <code>d-md-inline-flex</code>
                    </td>
                    <td>
                      <code>d-lg-inline-flex</code>
                    </td>
                    <td>
                      <code>d-xl-inline-flex</code>
                    </td>
                    <td>
                      <code>d-xxl-inline-flex</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="content-block">
            <h4 id="usage">Usage</h4>
            <div className="usage-markup-preview">
              <Tabs>
                <TabList>
                  <Tab>Preview</Tab>
                  <Tab>Code</Tab>
                </TabList>
                <TabPanel>
                  <div className="preview-container">
                    <br />
                    <div
                      class="d-inline mr-2x mt-5x"
                      style={{ padding: "10px", background: "#ccc" }}
                    >
                      d-inline
                    </div>
                    <div
                      class="d-inline mr-2x"
                      style={{ padding: "10px", background: "#ccc" }}
                    >
                      d-inline
                    </div>
                    <br />
                    <br />
                    <span
                      class="d-block mb-2x mt-5x"
                      style={{ padding: "10px", background: "#ccc" }}
                    >
                      d-block
                    </span>
                    <span
                      class="d-block mb-2x"
                      style={{ padding: "10px", background: "#ccc" }}
                    >
                      d-block
                    </span>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="preview-container">
                    <div className="d-flex">
                      <div className="code-preview">
                        <Syntax>{inlineBlockCode}</Syntax>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
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

export default Display;
