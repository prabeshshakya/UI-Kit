import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Syntax } from '../../docs/syntax-highlighter';
import Accordion from './Accordion';

const AccordionCollapsing = ({ accordionData }) => {
	const code = ` <div className="accordion">
    <div className="accordion__head">
        <a href="javascript:void(0)" className="accordion__title">Accordion Item Title</a>
        <span className="accordion__icon">+</span>
     </div>
    <p className="accordion__body">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit 
    commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.
    </p>
  </div>

  <div className="accordion">
    <div className="accordion__head">
        <a href="javascript:void(0)" className="accordion__title">Accordion Item Title</a>
        <span className="accordion__icon">+</span>
     </div>
    <p className="accordion__body">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit 
    commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.
    </p>
  </div>

  <div className="accordion">
    <div className="accordion__head">
        <a href="javascript:void(0)" className="accordion__title">Accordion Item Title</a>
        <span className="accordion__icon">+</span>
     </div>
    <p className="accordion__body">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit 
    commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.
    </p>
  </div>`;

	return (
		<div className='usage-markup-preview'>
			<Tabs>
				<TabList>
					<Tab>Preview</Tab>
					<Tab>Code</Tab>
				</TabList>
				<TabPanel>
					<div className='preview-container'>
						{accordionData.map(({ title, content }) => (
							<Accordion
								title={title}
								content={content}
							/>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className='preview-container'>
						<div className='d-flex'>
							<div className='code-preview'>
								<Syntax>{code}</Syntax>
							</div>
						</div>
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};
export default AccordionCollapsing;
