import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../docs/syntax-highlighter";

const Order = () => {
  const code = `
<div class="d-flex">
	<div class="order-3">First flex item</div>
	<div class="order-2">Second flex item</div>
	<div class="order-1">Third flex item</div>
</div>
    `;

  return (
    <>
      <div className="content-block">
        <h2 id="order">Order</h2>
        <p className="page__brief">
          We can use order utilities on flexbox items to change the visual order
          of specific flex items. We only provide options for making an item
          first or last and a reset to use the DOM order. As order takes any
          integer value from 1 to 10. The variable for <code>order</code> is
          defined on
          <code>variables/_utilities.scss</code>
        </p>

        <div className="usage-markup-preview">
          <Tabs>
            <TabList>
              <Tab>Preview</Tab>
              <Tab>Code</Tab>
            </TabList>
            <TabPanel>
              <div className="preview-container">
                <div className="example-row">
                  <div class="d-flex">
                    <div class="order-3 eg-box">First flex item</div>
                    <div class="order-2 eg-box">Second flex item</div>
                    <div class="order-1 eg-box">Third flex item</div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="preview-container">
                <div className="d-flex">
                  <div className="code-preview">
                    <Syntax language="html">{code}</Syntax>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>

        <div>
          <h4 className="mt-4x">Available Classes</h4>
          <div className="table__wrapper">
            <table className="table mb-4x">
              <thead>
                <tr>
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
                  <td>
                    <code>order-1</code>
                  </td>
                  <td>
                    <code>order-sm-1</code>
                  </td>
                  <td>
                    <code>order-md-1</code>
                  </td>
                  <td>
                    <code>order-lg-1</code>
                  </td>
                  <td>
                    <code>order-xl-1</code>
                  </td>
                  <td>
                    <code>order-xxl-1</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>order-2</code>
                  </td>
                  <td>
                    <code>orde-sm-2</code>
                  </td>
                  <td>
                    <code>orde-md-2</code>
                  </td>
                  <td>
                    <code>orde-lg-2</code>
                  </td>
                  <td>
                    <code>orde-xl-2</code>
                  </td>
                  <td>
                    <code>orde-xxl-2</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>...</code>
                  </td>
                  <td>
                    <code>...</code>
                  </td>
                  <td>
                    <code>...</code>
                  </td>
                  <td>
                    <code>...</code>
                  </td>
                  <td>
                    <code>...</code>
                  </td>
                  <td>
                    <code>...</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>order-10</code>
                  </td>
                  <td>
                    <code>order-sm-10</code>
                  </td>
                  <td>
                    <code>order-md-10</code>
                  </td>
                  <td>
                    <code>order-lg-10</code>
                  </td>
                  <td>
                    <code>order-xl-10</code>
                  </td>
                  <td>
                    <code>order-xxl-10</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
