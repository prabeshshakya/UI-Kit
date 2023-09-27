import React from "react";
import { Syntax } from "../../../docs/syntax-highlighter";

const Breakpoints = () => {
  const breakpoints = `
$sm-device: 576px; 
$md-device: 768px; 
$lg-device: 992px; 
$xl-device: 1200px;
		`;

  const mobileFirstBreakpoints = `
@include mq('sm') {...}
@include mq('md') {...}
@include mq('xl') {...}
@include mq('xxl') {...}
	`;

  const desktopFirstBreakpoints = `
@include mqmax('sm') {...}
@include mqmax('md') {...}
@include mqmax('xl') {...}
@include mqmax('xxl') {...}
	`;

  return (
    <div className="page">
      <div className="title-area">
        <div className="content-block">
          <h2 className="page__title">Breakpoints</h2>

          <p>
            These breakpoints are customizable via Sass—you’ll find them in a
            Sass map in our <code>variables/_breakpoints.scss</code> stylesheet
            and <strong>mixins</strong> are available in our{" "}
            <code>utilities/_utilities.scss</code>
          </p>
        </div>
        <div className="content-block">
          <div className="code-preview mb-5x">
            <Syntax language="scss">{breakpoints}</Syntax>
          </div>
        </div>

        <div className="content-block">
          <h4>Basic Usage</h4>
          <p className="page__brief mb-4x">
            In-order to use this <strong>mediaquery</strong> we have two way
            approches.
          </p>

          <h4>Min width (Mobile First approach)</h4>
          <p className="page__brief">
            <strong>Syntax: mq($break)</strong>
          </p>

          <div className="code-preview mb-5x">
            <Syntax language="scss">{mobileFirstBreakpoints}</Syntax>
          </div>

          <h4>Max width (Desktop First approach)</h4>
          <p className="page__brief">
            <strong>Syntax: mqmax($break)</strong>
          </p>

          <div className="code-preview mb-5x">
            <Syntax language="scss">{desktopFirstBreakpoints}</Syntax>
          </div>

          <p className="page__brief">
            Here <code>$break</code> is a required argument where RWD breakpoint
            values should be provided.
          </p>

          <blockquote className="docs-info">
            <strong>Note:</strong> Some of the <code>$break</code> value are
            <code>xs, sm, md, lg, xl.</code> These will be apply for both
            <code>mq()</code> and <code>mqmax()</code> mixin's{" "}
            <code>$break</code>
            value.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Breakpoints;
