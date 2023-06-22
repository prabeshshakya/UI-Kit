import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

const Sidebar = () => {
	const scrollWithOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -100;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	};

	return (
		<div className='sidebar--right'>
			<div className='menu-group'>
				<div className='menu-group__title'>on this page</div>
				<NavHashLink
					smooth
					to='/typography/#global-setting'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Global setting
				</NavHashLink>
				<NavHashLink
					smooth
					to='/typography/#heading'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Heading
				</NavHashLink>
			</div>
		</div>
	);
};

export default Sidebar;
