import React from 'react';
import AlignContent from './AlignContent';
import AlignItems from './AlignItems';
import AlignSelf from './AlignSelf';
import Direction from './Direction';
import JustifyContent from './JustifyContent';
import Order from './Order';
import Sidebar from './Sidebar';
import { Syntax } from '../../../components/common/syntax-highlighter';
import Wrap from './Wrap';

const Flex = () => {
	const flex = `<div className="d-flex"></div>`;

	return (
		<div className='row'>
			<div className='col'>
				<div className='page'>
					<div className='title-area'>
						<h2 className='page__title'>Flex</h2>
						<p className='lead-text'>
							Flex Property quickly manages the layout, alignment, and sizing of
							grid columns, navigation, components, and more with a full suite
							of responsive flexbox utilities.
						</p>
					</div>

					<div className='content-block'>
						<h4>Usage</h4>
						<Syntax language='html'>{flex}</Syntax>
					</div>

					<div className='content-block'>
						<Direction />
					</div>

					<div className='content-block'>
						<Wrap />
					</div>

					<div className='content-block'>
						<JustifyContent />
					</div>
					<div className='content-block'>
						<AlignItems />
					</div>
					<div className='content-block'>
						<AlignSelf />
					</div>
					<div className='content-block'>
						<AlignContent />
					</div>
					<div className='content-block'>
						<Order />
					</div>
				</div>
			</div>
			<div className='col-2'>
				<Sidebar />
			</div>
		</div>
	);
};

export default Flex;
