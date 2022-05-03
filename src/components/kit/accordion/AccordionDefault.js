import React from "react";
import AccordionCollapsing from "./AccordionCollapsing";

const AccordionDefault = () => {
  const accordionData = [
    {
      title: "Accordion Item Title",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "Accordion Item Title",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "Accordion Item Title",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
  ];
  return (
    <div className="page mt--11x">
      <div className="title-area  mb--7x">
        <h2 className="title title--largest title--dark font-weight--thin mb--4x">
          Accordion
        </h2>
        <p className="lead-text">Create accordion with variety of Styles</p>
        <div className="content-block">
          <h3>Usage</h3>
          <p className="page__brief">
            This component consist of parent container with the{" "}
            <code>accordion</code> attribute, title and content part of each
            accordion items.
          </p>
        </div>
        <div className="content-block">
          <h3>Examples:</h3>
          <p className="page__brief">
            Click the accordion title to expand/collapse to see the accordion
            content.
          </p>
          <AccordionCollapsing accordionData={accordionData} />
        </div>
      </div>
    </div>
  );
};

export default AccordionDefault;
