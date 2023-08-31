import React from "react";

import Filestructure from "./Filestructure";
import Sidebar from "./Sidebar";
import { Syntax } from "../../../docs/syntax-highlighter";
// import { Link } from "react-router-dom";

const Intro = () => {
  const styleScss = `
  // ==========================================================================
  // Style
  // Import all manifest partials from other folder to this file.
  //
  // ---------------------------------------------------------------------------
  //
  // Scalable and Modular Architecture for CSS (SMACSS)
  // With SMACSS, we divide our styles into fives categories: base, libs, modules, states, and utilities
  // ==========================================================================

  @import 'utilities/functions/__index';
  @import 'variables/__index';
  @import 'mixins/__index';

  /* Sass Compiled Css Code Start */
  @import 'base/__index';
  @import 'utilities/__index';
  @import 'components/__index';
  @import 'shame';

  `;
  const specificScss = `
  // File: _header.scss
  // This file contains all styles related to the header of the site/application.
  /* STYLES GO HERE */
  `;

  const indexScss = `
  @import 'grid';
  @import 'colors';
  @import 'spacing';
  @import 'utilities';
  `;
  return (
    <>
      <div className="row">
        <div className="col-10">
          <div className="page">
            {/* <div className="content-block">
              <h2 id="introduction" className="page__title">
                Introduction
              </h2>
              <p className="lead-text">Sass Starter kit intro.</p>
              <p>
                A Syntactically Awesome Stylesheets (Sass) Starter Kit is a
                collection of resources, templates, and tools designed to help
                developers get started with using Sass to enhance their CSS
                workflow. This type of starter kit provides a foundation for
                creating and managing styles using the Sass preprocessor, which
                offers various features and benefits compared to writing raw
                CSS. Here's what you might find in a Sass Starter Kit:
              </p>

              <ol type="1">
                <li>
                  <b>Sass Compiler Setup:</b> Instructions on setting up a Sass
                  compiler, such as the Dart-based Sass compiler, which
                  translates your Sass code into standard CSS.
                </li>
                <li>
                  <b>File Structure:</b> Guidance on how to structure your Sass
                  project, including creating folders for partials (modular
                  style components) and main Sass files.
                </li>
                <li>
                  <b>Basic Sass Syntax:</b> An introduction to Sass syntax,
                  including variables, nesting, mixins, functions, and more.
                </li>
                <li>
                  <b>Sass Variables and Mixins:</b> Pre-defined variables and
                  mixins that you can use to streamline your styling tasks and
                  promote consistent design choices.
                </li>
                <li>
                  <b>Styling Examples:</b> Sample Sass code snippets
                  demonstrating how to create common UI elements, layouts, and
                  responsive designs using Sass features.
                </li>
                <li>
                  <b>Partials:</b> Examples of how to break down your styles
                  into smaller partial files and use the @import directive to
                  organize and manage your code.
                </li>
                <li>
                  <b>Mixins Library:</b> A library of reusable mixins that cover
                  various styling needs, such as creating gradients,
                  vendor-prefixing, and handling media queries.
                </li>
                <li>
                  <b>Functions and Operators:</b> Demonstrations of how to use
                  Sass functions and operators for calculations, color
                  manipulation, and other dynamic styling.
                </li>
                <li>
                  <b>Integration with Build Tools:</b> Information on
                  integrating Sass with build tools like Webpack, Gulp, or Grunt
                  to automate the compilation process and enhance your
                  development workflow.
                </li>
                <li>
                  <b>Debugging and Troubleshooting:</b> Tips for debugging Sass
                  code, understanding error messages, and resolving common
                  issues.
                </li>
                <li>
                  <b>Deployment and Output Styles:</b> Guidance on configuring
                  the Sass compiler to generate different output styles, such as
                  nested, compact, expanded, and compressed, for production.
                </li>
                <li>
                  <b>Resources and References:</b> Links to official Sass
                  documentation, online tutorials, and additional learning
                  resources to further develop your Sass skills.
                </li>
              </ol>
              <p>
                A Sass Starter Kit is meant to provide developers, especially
                those who are new to Sass, with a jump-start into using the
                preprocessor effectively. It can help streamline the learning
                curve and provide best practices for structuring and maintaining
                styles in a scalable and maintainable manner. As you become more
                comfortable with Sass, you can customize and expand upon the
                starter kit to suit your specific project requirements and
                preferences.
              </p>

              <h2 className="title" id="sass">
                Sass.
              </h2>
              <p>
                Syntactically Awesome Stylesheets (Sass) is a scripting language
                that serves as a powerful extension of CSS (Cascading Style
                Sheets). It introduces various enhancements and features to make
                working with stylesheets more efficient and maintainable. Sass
                is used to generate standard CSS that web browsers can
                understand, but it provides a more flexible and expressive way
                to write and organize your styles. You can find the detailed
                documentation of SASS in the given link
                <Link
                  className="ml-1x"
                  to="https://sass-lang.com/documentation"
                  target="_blank"
                >
                  sass-lang.com/documentation
                </Link>
              </p>
              <p>
                SCSS is also backward compatible. It can be used to write older
                version CSS as well.
              </p>
            </div> */}

            <div className="content-block">
              <h2 id="getstarted" className="page__title">
                Get started with Starter kit
              </h2>
              <p>
                A Syntactically Awesome Stylesheets (Sass) Starter Kit is a
                collection of resources, templates, and tools designed to help
                developers get started with using Sass to enhance their CSS
                workflow.
              </p>
            </div>

            <div className="content-block">
              <h2 id="tooling-setup" className="page__title">
                Tooling setup
              </h2>
              <p>
                To use our build system and run our documentation locally,
                you’ll need to install Node. Follow these steps and you should
                be ready to rock:
              </p>
              <ol type="1">
                <li>
                  <a
                    href="https://nodejs.org/en/download"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download and install Node.js
                  </a>
                  , which we use to manage our dependencies.
                </li>
                <li>
                  Clone the repo from github. (Contact Prabesh Shakya for github
                  access.)
                  <a
                    className="ml-1x"
                    href="https://github.com/prabeshshakya/UI-Kit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/prabeshshakya/UI-Kit
                  </a>
                </li>
                <li>
                  Navigate to the root /UI-KIT directory and run npm install to
                  install our local dependencies listed in package.json.
                </li>
              </ol>

              <div className="content-block">
                <h4 id="npm">npm</h4>
                <p className="page__list-paragraph">Install with npm:</p>
                <div className="code-preview">
                  <Syntax language="properties">$ npm install</Syntax>
                </div>
              </div>
              <div className="content-block">
                <h4 id="yarn">yarn</h4>
                <p className="page__list-paragraph">Install with yarn:</p>
                <div className="code-preview">
                  <Syntax language="properties">$ yarn install</Syntax>
                </div>
              </div>
              <div className="content-block">
                <h4 id="npm-script">Using npm scripts</h4>
                <p>
                  Run npm run to see all the npm scripts in your terminal.
                  Primary tasks include:
                </p>
                <table className="ui-html-table mt-4x mb-8x">
                  <thead>
                    <th>Task</th>
                    <th>Description</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>npm start</code>
                      </td>
                      <td>
                        Compiles CSS and JavaScript, builds the documentation,
                        and starts a local server.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>npm run dist</code>
                      </td>
                      <td>
                        Creates the dist/ directory with compiled files.
                        Requires Sass, Autoprefixer, and terser.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>npm test</code>
                      </td>
                      <td>Runs tests locally after running npm run dist</td>
                    </tr>
                    <tr>
                      <td>
                        <code>npm run docs-serve</code>
                      </td>
                      <td>Builds and runs the documentation locally.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="content-block">
              <h3 id="structure">Structuring your Sass Projects</h3>
              <p>
                We do this by dividing up our stylesheets into separate files
                using Partials. The separate files will represent different
                components. We then import our partials using an @import
                directive, into one master stylesheet — typically the style.scss
                file. For example:
              </p>
              <Syntax language="scss">{styleScss}</Syntax>
              <p>
                We could then create a layout folder for our layout specific
                files, such as:
              </p>
              <Syntax language="scss">{specificScss}</Syntax>
              <p>
                <i>Note:</i> The name of a partial file always begins with an
                underscore <code>_</code>.
              </p>
              <p>
                As you might have noticed, in every folder, there is a file,
                called <code>__index.scss</code>. It is there because you no
                longer need to import each file from the folder one by one. In
                <code>__index.scss</code> file.
              </p>
              <p>
                For example, in our case, in <code>scss/</code>
                <code>utilities/</code>
                <code>classes/</code> folder, there are different files except
                for <code>__index.scss</code> one. In <code>__index.scss</code>{" "}
                file, we can "@import" each file within that folder:
              </p>
              <Syntax language="scss">{indexScss}</Syntax>
            </div>
            <div className="content-block">
              <Filestructure />
            </div>
          </div>
        </div>
        <div className="col-2">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Intro;
