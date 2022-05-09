import React from "react";

const Spacing = () => {
  const notation1 = `
    {property}-{sides}-{size}
    `;
  const notation2 = `
    {property}-{sides}-{size}-{breakpoint}
    `;
  return (
    <div className="page mt--11x">
      <div className="title-area  mb--7x">
        <h2 className="title title--largest title--dark font-weight--thin mb--4x">
          Spacing
        </h2>
        <p className="lead-text">Documentation for spacing.</p>
        <p className="page__brief">
          Sass Starter kit has a wide range of shorthand responsive margin,
          padding, and gap utility classes to modify an element’s appearance.
        </p>
      </div>
      <div className="content-block">
        <h3>Margin and Padding</h3>
        <p className="page__brief">
          We can assign responsive friendly margin or padding values to an
          element or subset of its sides with shorthand classes. Includes
          support for individual properties, all properties, and vertical and
          horizontal properties. The spacing value can range from -16px to
          800px.This range can be changed in <code>_spacing.scss</code> file.
        </p>
        <h4 className="mt-2x">Notation:</h4>
        <p className="page__brief mt-2x">
          The classes are named using the format <strong>{notation1}</strong>
          for xs and <strong>{notation2}</strong> for sm, md, lg, xl, and xxl.
        </p>
        <p className="page__brief mt-2x">
          Where <strong>property</strong> is one of :
        </p>
        <ul>
          <li>m: for classes that set the margin</li>
          <li>p: for classes that set the padding</li>
        </ul>
        <p className="page__brief mt-2x">
          Where <strong>sides</strong> is one of :
        </p>
        <ul>
          <li>t: for classes that set margin-top or padding-top</li>
          <li>b: for classes that set margin-bottom or padding-bottom</li>
          <li>l: for classes that set margin-left or padding-left </li>
          <li>r: for classes that set margin-right or padding-right i</li>
          <li>x: for classes that set both *-left and *-right</li>
          <li>y: for classes that set both *-top and *-bottom</li>
          <li>
            blank: for classes that set a margin or padding on all 4 sides of
            the element
          </li>
        </ul>

        <p className="page__brief mt-2x">
          Where <strong>size</strong> is one of :
        </p>
        <ul>
          <li>
            0x: for classes that eliminate the margin or padding by setting it
            to 0
          </li>
          <li>
            1x: (by default) for classes that set the margin or padding to
            $defaultSpacing * 1
          </li>
          <li>
            2x: (by default) for classes that set the margin or padding to
            $defaultSpacing * 2
          </li>
          <li>
            3x: (by default) for classes that set the margin or padding to
            $defaultSpacing * 3
          </li>
          <li>
            4x: (by default) for classes that set the margin or padding to
            $defaultSpacing * 4
          </li>
          <li>
            5x: (by default) for classes that set the margin or padding to
            $defaultSpacing * 5{" "}
          </li>
          <li>auto: for classes that set the margin to auto</li>
        </ul>
        <div className="note-block mt-4x">
          <strong>Note:</strong>
          <p className="page__brief">
            The size can be added in <code>_spacing.scss</code> file as
            required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spacing;
