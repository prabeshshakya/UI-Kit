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
		<div className="page">
			<div className="title-area">
				<h2 className="page__title">Accordion</h2>
				<p className="lead-text">Create accordion with variety of Styles</p>
				<div className="content-block">
					<h4>Usage</h4>
					<p className="page__brief">
						This component consist of parent container with the <code>accordion</code> attribute, title and content part of each accordion items.
					</p>
				</div>
				<div className="content-block">
					<h4>Examples:</h4>
					<p className="page__brief">Click the accordion title to expand/collapse to see the accordion content.</p>
					<AccordionCollapsing accordionData={accordionData} />
				</div>
			</div>
		</div>
	);
};

export default AccordionDefault;
