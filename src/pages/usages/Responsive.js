import { Syntax } from "../../docs/syntax-highlighter";

const responsiveMixinDef = `
  // Available breakpoints
  $grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px,
  ) !default;


  // Media query with min width
  @mixin mq($mq-breakpoint, $mq-breakpoints: $grid-breakpoints) {
    @if map-has-key($mq-breakpoints, $mq-breakpoint) {
      $mq-breakpoint: map-get($mq-breakpoints, $mq-breakpoint);
    }

    @if ($generate-responsive-classes) {
      @media screen and (min-width: #{$mq-breakpoint}) {
        @content;
      }
    }
  }

  // Media query with max width
  @mixin mqmax($mq-breakpoint, $mq-breakpoints: $grid-breakpoints) {
    @if map-has-key($mq-breakpoints, $mq-breakpoint) {
      $mq-breakpoint: map-get($mq-breakpoints, $mq-breakpoint) - 1px;
    }

    @if ($generate-responsive-classes) {
      @media screen and (max-width: #{$mq-breakpoint}) {
        @content;
      }
    }
  }
`;

const mqExample = `
  .mobile-first-example::before {
    content: "Default rule";
    @include mq(map-get($grid-breakpoints, sm)) {
      content: "min-width: 576px";
    }
    @include mq(map-get($grid-breakpoints, md)) {
      content: "min-width: 768px";
    }
    @include mq(map-get($grid-breakpoints, lg)) {
      content: "min-width: 992px";
    }
    // usage with arbitrary values
    @include mq(1024px) {
      content: "min-width: 1024px";
    }
    @include mq(map-get($grid-breakpoints, xl)) {
      content: "min-width: 1200px";
    }
    @include mq(map-get($grid-breakpoints, xxl)) {
      content: "min-width: 1400px";
    }
  }
`;

const mqmaxExample = `
.non-mobile-first-example::before {
  content: "Default rule";
  @include mqmax(map-get($grid-breakpoints, xxl)) {
    content: "max-width: 1400px";
  }
  @include mqmax(map-get($grid-breakpoints, xl)) {
    content: "max-width: 1200px";
  }
  // usage with arbitrary values
  @include mqmax(1024px) {
    content: "max-width: 1024px";
  }
  @include mqmax(map-get($grid-breakpoints, lg)) {
    content: "max-width: 992px";
  }
  @include mqmax(map-get($grid-breakpoints, md)) {
    content: "max-width: 768px";
  }
  @include mqmax(map-get($grid-breakpoints, sm)) {
    content: "max-width: 576px";
  }

  @include mqmax(map-get($grid-breakpoints, xs)) {
    content: "max-width: 0";
  }
}`;



const mqInputExample = `.item{
  @include mq(992px){
    background-color: getColor(primary.base);
  }
}`
const mqOutputExample = `.item{
  @media screen and (min-width:992px){
    background-color: getColor(primary.base);
  }
}`

const mqMaxInputExapmle = `.item{
  @include mqmax(992px){
    background-color: getColor(primary.base);
  }
}`
const mqMaxOutputExample = `.item{
  @media screen and (max-width:992px){
    background-color: getColor(primary.base);
  }
}`


// const
const Responsive = () => {
  return (
    <div className="page">
      <div className="title-area">
        <h2 className="page__title">Responsive</h2>
        <p className="lead-text">
          We use media queries for making our layout and components responsive
          according to viewport or browser width. Here are some examples of the
          usage of media queries with the mixins provided.
        </p>
        {/* mobile first example with min-width */}
        <div className="content-block">
          <h4>Mobile first approach</h4>
          <p className="page__brief">
            This approach uses <b className="fw-600">min-width</b> media
            condition. For mobile first approach{" "}
            <b className="fw-600">mq($break)</b> mixin is provided. The usage of
            the mixin and the generated output is show below. Here{" "}
            <code>$break</code> is a required argument where RWD breakpoint
            values should be provided.
          </p>

          <div className="row mb-4x">
            <div className="col-6">
              <p className="page_brief">
              <p className="fw-500 mb-2x">Mixin input:</p>
                <Syntax language="scss">{mqInputExample}</Syntax>
              </p>
            </div>
            <div className="col-6">
              <p className="page_brief">
                <p className="fw-500 mb-2x">Mixin output:</p>
                <Syntax language="scss">
                  {mqOutputExample}
                </Syntax>
              </p>
            </div>
          </div>
          <h4>Example</h4>
          <div className="example-row">
            <p className="mb-1x">
              <small>Resize window to view responsive effects.</small>
            </p>
            <div className="eg-box mobile-first-example"></div>
          </div>
        </div>

        {/* non mobile first example with max-width */}
        <div className="content-block">
          <h4>Desktop first approach</h4>
          <p className="page__brief">
            This approach uses <b className="fw-600">max-width</b> media
            condition. For non-mobile first approach{" "}
            <b className="fw-600">mqmax($break)</b> mixin is provided. The usage
            of the mixin and the generated output is show below. Here{" "}
            <code>$break</code> is a required argument where RWD breakpoint
            values should be provided.
          </p>

          <div className="row mb-4x">
            <div className="col-6">
              <p className="page_brief">
                <p className="fw-500 mb-2x">Mixin input:</p>
                <Syntax language="scss">{mqMaxInputExapmle}</Syntax>
              </p>
            </div>
            <div className="col-6">
              <p className="page_brief">
                <p className="fw-500 mb-2x">Mixin output:</p>
                <Syntax language="scss">{mqMaxOutputExample}</Syntax>
              </p>
            </div>
          </div>
          <h4>Example</h4>
          <div className="example-row">
            <p className="mb-1x">
              <small>Resize window to view responsive effects.</small>
            </p>
            <div className="eg-box non-mobile-first-example"></div>
          </div>
          <div className="mb-4x">
            {/* Define how non-mobile first works */}
          </div>
        </div>

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
          <h4>Media query mixin</h4>
          <div className="code-preview">
            <Syntax language="scss">{responsiveMixinDef}</Syntax>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsive;
