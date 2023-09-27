import React from "react";
import Sidebar from "./Sidebar";
import { Syntax } from "../../../docs/syntax-highlighter";

export default function Typography() {
  const variables = `// Custom font url
$font-url:'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' !default;
$font-custom: 'Inter' !default;

// Font Declaration
$font-sans: $font-custom, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
sans-serif;
$font-primary: $font-sans;

$font-sizes: (
h1: (
xs: rem(30),
md: rem(32),
// so on..
),
h2: (
xs: rem(18),
md: rem(24),
// so on..
),
h3: (
xs: rem(16),
md: rem(20),
// so on..
),
h4: (
xs: rem(14),
md: rem(18),
// so on..
),
h5: (
xs: rem(16),
// so on..
),
h6: (
xs: rem(16),
// so on..
),
p: (
xs: rem(16),
// so on..
),
);
	`;
  return (
    <div className="row">
      <div className="col-10">
        <div className="page">
          <div className="content-block">
            <h2 className="page__title">Typography</h2>
            <p>
              Documentation and example of typography, including global setting,
              heading, body text, list, and more.
            </p>
          </div>
          <div className="content-block">
            <h3 id="global-setting">Global setting</h3>
            <p>
              Sass starter kit sets basic global display, typography, and link
              style. When more control is needed, check it out{" "}
              <a href="/fonts">textual utility classes.</a>
            </p>
            <ul>
              <li>
                Use{" "}
                <a href="https://fonts.google.com/" target="blank">
                  googleapis{" "}
                </a>
                that select the <code>font family</code> for each OS and device.
                Use font Inter as default.
              </li>
              <li>
                For a more inclusive and accessible type scale, we use the
                browser's default root <code>font-size</code> (typically 16px)
                so visitors can customize their browser defaults as needed.
              </li>
              <li>
                Use the <code>$font-custom</code> and <code>$font-sizes</code>{" "}
                attributes as our typographic base applied to the{" "}
                <code>&lt;body&gt;</code>.
              </li>
              <li>
                Check out <a href="/colors">background color</a> to set a
                background-color on the <code>&lt;body&gt;</code> (
                <code>#fff</code> by default).
              </li>
              <li>
                Check out <a href="/fonts">$fontWeight</a> to set font-weight on
                the <code>&lt;body&gt;</code>.
              </li>
            </ul>
          </div>
          <div className="content-block">
            <h3 id="heading">Heading</h3>
            <p>
              All HTML headings, &lt;h1&gt; through &lt;/h1&gt;, are available.
            </p>
            <div class="table__wrapper">
              <table className="ui-html-table mt-4x mb-8x">
                <thead>
                  <th>Heading</th>
                  <th>Example</th>
                  <th>Font size</th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>&lt;h1&gt; &lt;/h1&gt;</code>
                    </td>
                    <td>
                      <h1 className="mb-0x">h1 heading</h1>
                    </td>
                    <td>32px</td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;h2&gt; &lt;/h2&gt;</code>
                    </td>
                    <td>
                      <h2 className="mb-0x">h2 heading</h2>
                    </td>
                    <td>24px</td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;h3&gt; &lt;/h3&gt;</code>
                    </td>
                    <td>
                      <h3 className="mb-0x">h3 heading</h3>
                    </td>
                    <td>20px</td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;h4&gt; &lt;/h4&gt;</code>
                    </td>
                    <td>
                      <h4 className="mb-0x">h4 heading</h4>
                    </td>
                    <td>18px</td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;h5&gt; &lt;/h5&gt;</code>
                    </td>
                    <td>
                      <h5 className="mb-0x">h5 heading</h5>
                    </td>
                    <td>16px</td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;h6&gt; &lt;/h6&gt;</code>
                    </td>
                    <td>
                      <h6 className="mb-0x">h6 heading</h6>
                    </td>
                    <td>16px</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="content-block">
            <h4 id="variables">Variables</h4>
            <p>
              All the variables for typography are stored in
              <code>variables/_typography.scss</code>. The font size of text can
              be set using various units of measurement like
              <code>pixel (px)</code>, <code>Ems (em)</code> and
              <code>Rems (rem)</code> in different breakpoints like{" "}
              <code>xs</code>, <code>sm</code>, <code>md</code>, <code>xl</code>
              , and <code>xxl</code>.
            </p>
            <p>
              <code>rem(value)</code> converts a value into <code>rem</code>
              where <code>px</code> value is passed into value area.
            </p>
            <Syntax>{variables}</Syntax>
          </div>
        </div>
      </div>
      <div className="col-2">
        <Sidebar />
      </div>
    </div>
  );
}
