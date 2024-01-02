import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Syntax } from "../../../docs/syntax-highlighter";

const AlignSelf = () => {
  const code = `

	//Align-self-start
	<div className="d-flex">
		<div className="eg-box">Flex item</div>
		<div className="align-self-start">Aligned flex item</div>
		<div className="eg-box">Flex item</div>
	</div>
	
	//Align-self-end
	<div className="d-flex">
		<div className="eg-box">Flex item</div>
		<div className="align-self-end">Aligned flex item</div>
		<div className="eg-box">Flex item</div>
	</div>
	
	//Align-self-center
	<div className="d-flex">
		<div className="eg-box">Flex item</div>
		<div className="align-self-center">Aligned flex item</div>
		<div className="eg-box">Flex item</div>
	</div>
	
	//Align-self-baseline
	<div className="d-flex">
		<div className="eg-box">Flex item</div>
		<div className="align-self-baseline">Aligned flex item</div>
		<div className="eg-box">Flex item</div>
	</div>
	
	//Align-self-stretch
	<div className="d-flex">
		<div className="eg-box">Flex item</div>
		<div className="align-self-stretch">Aligned flex item</div>
		<div className="eg-box">Flex item</div>
	</div>

    `;
  return (
    <>
      <div className="content-block">
        <h2 id="align-self">Align Self</h2>
        <p className="page__brief">
          Use <code>align-self</code> utilities on flexbox items to individually
          change their alignment on the cross axis (the y-axis to start, x-axis
          if <code>flex-direction: column</code>). Choose from the same options
          as
          <code> align-items: start</code>, <code>end</code>,{" "}
          <code>center</code>, <code>baseline</code>, or <code>stretch</code>{" "}
          (browser default).
        </p>

        <p>
          Following are the variations for <code>align-self</code>:
        </p>
        <ul className="list-style">
          <li>
            <code>align-self-stretch</code>: Element is stretched to fit the
            container(Browser default)
          </li>
          <li>
            <code>align-self-center</code>: Element is positioned at the center
            of the container
          </li>
          <li>
            <code>align-self-start</code>: Element is positioned at the
            beginning of the container
          </li>
          <li>
            <code>align-self-end</code>: Element is positioned at the end of the
            container
          </li>
          <li>
            <code>align-self-base</code>: Element is positioned at the baseline
            of the container
          </li>
          <li>
            <code>align-self-initial</code>: Sets this property to its default
            value
          </li>
          <li>
            <code>align-self-inherit</code>: Inherits this property from its
            parent element
          </li>
        </ul>

        <div className="usage-markup-preview">
          <Tabs>
            <TabList>
              <Tab>Preview</Tab>
              <Tab>Code</Tab>
            </TabList>
            <TabPanel>
              <div className="preview-container">
                <h5 className="text-center">Align-self-start</h5>
                <div className="example-row p-0x">
                  <div className="d-flex mb-3x" style={{ height: "100px" }}>
                    <div className="eg-box">Flex item</div>
                    <div className="align-self-start eg-box">
                      Aligned flex item
                    </div>
                    <div className="eg-box">Flex item</div>
                  </div>
                </div>

                <h5 className="text-center">Align-self-end</h5>
                <div className="example-row p-0x">
                  <div className="d-flex mb-3x" style={{ height: "100px" }}>
                    <div className="eg-box">Flex item</div>
                    <div className="align-self-end eg-box">
                      Aligned flex item
                    </div>
                    <div className="eg-box">Flex item</div>
                  </div>
                </div>
                <h5 className="text-center">Align-self-center</h5>
                <div className="example-row p-0x">
                  <div className="d-flex mb-3x" style={{ height: "100px" }}>
                    <div className="eg-box">Flex item</div>
                    <div className="align-self-center eg-box">
                      Aligned flex item
                    </div>
                    <div className="eg-box">Flex item</div>
                  </div>
                </div>
                <h5 className="text-center">Align-self-baseline</h5>
                <div className="example-row p-0x">
                  <div className="d-flex mb-3x" style={{ height: "100px" }}>
                    <div className="eg-box">Flex item</div>
                    <div className="align-self-baseline eg-box">
                      Aligned flex item
                    </div>
                    <div className="eg-box">Flex item</div>
                  </div>
                </div>
                <h5 className="text-center">Align-self-stretch</h5>
                <div className="example-row p-0x">
                  <div className="d-flex mb-3x" style={{ height: "100px" }}>
                    <div className="eg-box">Flex item</div>
                    <div className="align-self-stretch eg-box">
                      Aligned flex item
                    </div>
                    <div className="eg-box">Flex item</div>
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
          <h4 className="mt-4x"> Available Classes</h4>
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
                    <code>align-self-start</code>
                  </td>
                  <td>
                    <code>align-self-sm-start</code>
                  </td>
                  <td>
                    <code>align-self-md-start</code>
                  </td>
                  <td>
                    <code>align-self-lg-start</code>
                  </td>
                  <td>
                    <code>align-self-xl-start</code>
                  </td>
                  <td>
                    <code>align-self-xxl-start</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>align-self-end</code>
                  </td>
                  <td>
                    <code>align-self-sm-end</code>
                  </td>
                  <td>
                    <code>align-self-md-end</code>
                  </td>
                  <td>
                    <code>align-self-lg-end</code>
                  </td>
                  <td>
                    <code>align-self-xl-end</code>
                  </td>
                  <td>
                    <code>align-self-xxl-end</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>align-self-center</code>
                  </td>
                  <td>
                    <code>align-self-sm-center</code>
                  </td>
                  <td>
                    <code>align-self-md-center</code>
                  </td>
                  <td>
                    <code>align-self-lg-center</code>
                  </td>
                  <td>
                    <code>align-self-xl-center</code>
                  </td>
                  <td>
                    <code>align-self-xxl-center</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>align-items-baseline</code>
                  </td>
                  <td>
                    <code>align-items-sm-baseline</code>
                  </td>
                  <td>
                    <code>align-items-md-baseline</code>
                  </td>
                  <td>
                    <code>align-items-lg-baseline</code>
                  </td>
                  <td>
                    <code>align-items-xl-baseline</code>
                  </td>
                  <td>
                    <code>align-items-xxl-baseline</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>align-self-stretch</code>
                  </td>
                  <td>
                    <code>align-self-sm-stretch</code>
                  </td>
                  <td>
                    <code>align-self-md-stretch</code>
                  </td>
                  <td>
                    <code>align-self-lg-stretch</code>
                  </td>
                  <td>
                    <code>align-self-xl-stretch</code>
                  </td>
                  <td>
                    <code>align-self-xxl-stretch</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>align-self-auto</code>
                  </td>
                  <td>
                    <code>align-self-sm-auto</code>
                  </td>
                  <td>
                    <code>align-self-md-auto</code>
                  </td>
                  <td>
                    <code>align-self-lg-auto</code>
                  </td>
                  <td>
                    <code>align-self-xl-auto</code>
                  </td>
                  <td>
                    <code>align-self-xxl-auto</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>align-self-initial</code>
                  </td>
                  <td>
                    <code>align-self-sm-initial</code>
                  </td>
                  <td>
                    <code>align-self-md-initial</code>
                  </td>
                  <td>
                    <code>align-self-lg-initial</code>
                  </td>
                  <td>
                    <code>align-self-xl-initial</code>
                  </td>
                  <td>
                    <code>align-self-xxl-initial</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>align-self-inherit</code>
                  </td>
                  <td>
                    <code>align-self-sm-inherit</code>
                  </td>
                  <td>
                    <code>align-self-md-inherit</code>
                  </td>
                  <td>
                    <code>align-self-lg-inherit</code>
                  </td>
                  <td>
                    <code>align-self-xl-inherit</code>
                  </td>
                  <td>
                    <code>align-self-xxl-inherit</code>
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
export default AlignSelf;
