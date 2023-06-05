import React from 'react';
import AlignContent from './AlignContent';
import AlignItems from './AlignItems';
import AlignSelf from './AlignSelf';
import Direction from './Direction';
import JustifyContent from './JustifyContent';
import Order from './Order';

const Flex = () => {
	const flex = `
	<div className="d-flex"></div>`;

	return (
		<div className='page'>
			<div className='title-area'>
				<h2 className='page__title'>Flex</h2>
				<p className='lead-text'>
					Flex Property quickly manages the layout, alignment, and sizing of
					grid columns, navigation, components, and more with a full suite of
					responsive flexbox utilities.
				</p>
			</div>

			<div className='content-block'>
				<h4>Usage</h4>
				<code>{flex}</code>
			</div>

			<hr />
			<Direction />
			<hr />
			<JustifyContent />
			<hr />
			<AlignItems />
			<hr />
			<AlignSelf />
			<hr />
			<AlignContent />
			<hr />
			<Order />
		</div>
	);
};

export default Flex;
