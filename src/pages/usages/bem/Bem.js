import React from "react";
import { Syntax } from "../../../docs/syntax-highlighter";
import Sidebar from "./Sidebar";

const Helpers = () => {
  const bem = `//For Element
@mixin e($element) {
 &__#{$element} {
  @content;
 }
}

//For Modifier
@mixin m($modifier) {
 &--#{$modifier} {
  @content;
 }
}`;

  const bemUsage = `//Element
.nav {
 @include e(item) {
  ...
 }
}

//Output
.nav__item { ... }

//Modifier
.nav {
 @include e(item) {
  @include m(active) {
   ...
  }
 }
}

//Output
.nav__item--active {...}`;

  const block = `<nav class="navigation">
<!-- Content of the navigation block -->
</nav>
`;

  const element = `<nav class="navigation">
<ul class="navigation__list">
  <!-- Content of the navigation list element -->
</ul>
</nav>
`;

  const modifier = `<button class="button">Normal Button</button>
<button class="button button--primary">Primary Button</button>
`;

  return (
    <div className="row">
      <div className="col">
        <div className="page">
          <div className="title-area">
            <div className="content-block">
              <h2 id="bem" className="page__title">
                BEM
              </h2>
              <p>
                Block, Element, Modifier (BEM) is a methodology for structuring
                and naming classes in HTML and CSS to create more maintainable
                and modular code. It's commonly used in web development to
                improve the organization and scalability of stylesheets and
                front-end code. The BEM methodology consists of three main
                components: Block, Element, and Modifier.
              </p>
            </div>
            <div className="content-block">
              <ol>
                <li>
                  <b>Block:</b> A block is a standalone component or a
                  higher-level element on a webpage that has a meaningful
                  purpose on its own. It represents a distinct part of the
                  interface. Blocks are usually identified by a single class
                  name that describes the block's purpose. For example, a
                  navigation menu, a header, or a button can all be considered
                  blocks.
                </li>
                <li className="code-preview mb-5x">
                  <Syntax language="scss">{block}</Syntax>
                </li>
                <li>
                  <b>Element:</b> An element is a part of a block that doesn't
                  have a standalone meaning. It's a component that is
                  semantically tied to the block it belongs to. Elements are
                  identified by combining the block's class with a double
                  underscore (__) followed by the element's name.
                </li>
                <li className="code-preview mb-5x">
                  <Syntax language="scss">{element}</Syntax>
                </li>
                <li>
                  <b>Modifier:</b> A modifier is used to define variations or
                  different states of a block or element. Modifiers allow you to
                  apply styles that alter the appearance or behavior of the base
                  block or element. Modifiers are identified by a class name
                  that starts with a double dash (--) and is followed by the
                  modifier's name.
                </li>
                <li className="code-preview mb-5x">
                  <Syntax language="scss">{modifier}</Syntax>
                </li>
              </ol>
            </div>
            <div className="content-block">
              <p className="lead-text">
                BEM &mdash; Block Element Modifier is a methodology that helps
                you to create reusable components and code sharing in front-end
                development. This mixins is located at{" "}
                <code>mixins/_bem.scss</code>
              </p>
              <div className="code-preview mb-5x">
                <Syntax language="scss">{bem}</Syntax>
              </div>
            </div>
            <div className="content-block">
              <h4 id="usages">Usage</h4>

              <div className="code-preview mb-5x">
                <Syntax language="scss">{bemUsage}</Syntax>
              </div>
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

export default Helpers;
