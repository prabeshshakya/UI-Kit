import React from "react";
import { Syntax } from "../../../common/syntax-highlighter";

const Responsive = () => {
  const cssUsages = `
  @mixin mq($break) {
    @if $break== "xs" {
      //lowest breakpoint value
      @content;
    } @else if $break== "sm" {
      // phone
      @media (min-width: $sm-device) {
        @content;
      }
    } @else if $break== "md" {
      // tablet
      @media (min-width: $md-device) {
        @content;
      }
    } @else if $break== "lg" {
      // laptop and desktop
      @media (min-width: $lg-device) {
        @content;
      }
    } @else if $break== "xl" {
      // High res desktop and TVs
      @media (min-width: $xl-device) {
        @content;
      }
    } @else {
      @error "No value could be retrieved for '#{$break}'";
    }
  }
    `;

  const mqMaxUsages = `
  @mixin mqmax($break, $custom: false) {
    @if $custom==true {
      @media (max-width: $break + "px") {
        @content;
      }
    } @else {
      @if $break== "xs" {
        //lowest breakpoint value
        @content;
      } @else if $break== "sm" {
        // phone
        @media (max-width: $sm-device) {
          @content;
        }
      } @else if $break== "md" {
        // tablet
        @media (max-width: $md-device) {
          @content;
        }
      } @else if $break== "lg" {
        // laptop and desktop
        @media (max-width: $lg-device) {
          @content;
        }
      } @else if $break== "xl" {
        // High res desktop and TVs
        @media (max-width: $xl-device) {
          @content;
        }
      } @else {
        @error "No value could be retrieved for '#{$break}'";
      }
    }
  }
    `;

  return (
    <div className="page">
      <div className="title-area">
        <h2 className="page__title">Responsive</h2>
        <p className="lead-text">
          Here are few responsive mixins, which will help us building responsive
          layout across devices.
        </p>
        <div className="content-block">
          <h4>mq()</h4>
          <p className="page__brief">
            This mixins is used for mobile first approach.
          </p>
          <p className="page__brief">
            <strong>Syntax: mq($break)</strong>
          </p>
          <p className="page__brief">
            Here <code>$break</code> is a required argument where RWD breakpoint
            values should be provided.
          </p>
        </div>
        {/* <div className="doc-container">
          <h4>CSS Usages</h4>
          <div className="code-preview">
            <Syntax language="scss">{cssUsages}</Syntax>
          </div>
        </div> */}
        <blockquote className="docs-info">
          <strong>Note:</strong> Some of the <code>$break</code> value are
          <code>xs, sm, md, lg, xl.</code> These will be apply for both
          <code>mq()</code> and <code>mqmax()</code> mixin's <code>$break</code>
          value.
        </blockquote>

        {/* <div className="content-block">
          <h4>mqmax()</h4>
          <p className="page__brief">
            This mixins is used for desktop first approach.
          </p>
          <p className="page__brief">
            <strong>Syntax: mqmax($break, $custom: false)</strong>
          </p>
          <p className="page__brief">
            In this case, if <code>$break</code> argument is passed and
            <code>$custom</code> is set to false then it will take
            <code>$break</code> value. And if <code>$custom</code>is set to
            true, <code>$break</code> value or custom value should be given and
            it will work as a breakpoint.
          </p>
        </div> */}
        <div className="doc-container">
          <h4>CSS Usages</h4>
          <div className="code-preview">
            <Syntax language="scss">{mqMaxUsages}</Syntax>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Responsive;
