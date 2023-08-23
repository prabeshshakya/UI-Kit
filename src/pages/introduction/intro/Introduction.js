import React from "react";

import Filestructure from "./Filestructure";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="page">
            <div className="content-block">
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
