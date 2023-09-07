import React from "react";

import Folderstructure from "./Folderstructure";
// import Filestructure from "./Filestructure";
import Sidebar from "./Sidebar";
import { Syntax } from "../../../docs/syntax-highlighter";
import { Link } from "react-router-dom";

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
            <div className="content-block">
              <h2 id="setup" className="page__title">
                Setup
              </h2>

              <p>
                To use our build system and run our documentation locally,
                you’ll need to install <code>Node.</code> Follow these steps and
                you should be ready to rock:
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
                  Navigate to the root <code>/UI-KIT</code> directory and run
                  <code>npm install</code> to install our local dependencies
                  listed in package.json.
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

            <div class="content-block">
              <h3 id="download">How to install Sass in New project.</h3>
              <p>
                To create and install a React app, you can use the official
                Create React App tool, which simplifies the setup process.
                Here's a step-by-step guide on how to do this:
              </p>
            </div>
            <div class="content-block">
              <h4>Prerequisites:</h4>
              <p>
                Before you begin, make sure you have Node.js and npm (Node
                Package Manager) installed on your system. You can download and
                install them from the official Node.js website.
              </p>
              <p>Now, follow these steps to create and install a React app:</p>
            </div>
            <div class="content-block">
              <h3>Step 1: Install Create React App</h3>
              <p>
                Open your terminal (command prompt or terminal emulator) and run
                the following command to install Create React App globally:
              </p>
              <div className="code-preview">
                <Syntax language="properties">
                  npm install -g create-react-app
                </Syntax>
              </div>
            </div>

            <div class="content-block">
              <h3>Step 2: Create a New React App</h3>
              <p>
                Once Create React App is installed, you can create a new React
                app by running the following command:
              </p>
              <div className="code-preview">
                <Syntax language="properties">
                  npx create-react-app my-react-app
                </Syntax>
              </div>
              <p>
                Replace my-react-app with your desired app name. This command
                will set up a new React project with all the necessary files and
                dependencies.
              </p>
            </div>

            <div class="content-block">
              <h3>Step 3: Navigate to the Project Directory</h3>
              <p>
                Change your current directory to the newly created app folder:
              </p>
              <div className="code-preview">
                <Syntax language="properties">cd my-react-app</Syntax>
              </div>
            </div>
            <div class="content-block">
              <h3>Step 4: Start the Development Server</h3>
              <p>
                To start the development server and see your React app in
                action, run the following command:
              </p>
              <div className="code-preview">
                <Syntax language="properties">npm start</Syntax>
              </div>
            </div>
            <div class="content-block">
              <h3>
                Step 5: Clone the sass starter kit and paste src folder to the
                new project.
              </h3>
            </div>
            <div class="content-block">
              <h3>Step 6: Import the style.scss file to App.js</h3>
              <div className="code-preview">
                <Syntax language="properties">
                  import "./docs/docs.scss";
                </Syntax>
              </div>
            </div>

            <div className="content-block">
              <Folderstructure />
            </div>
            {/* <div className="content-block">
              <Filestructure />
            </div> */}
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
