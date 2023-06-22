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
					to='/bem/#bem'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					BEM
				</NavHashLink>

				<NavHashLink
					smooth
					to='/bem/#usages'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Usages
				</NavHashLink>
			</div>
		</div>
	);
};

export default Sidebar;
