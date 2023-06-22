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
					to='/display/#how-it-works'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					How it works
				</NavHashLink>

				<NavHashLink
					smooth
					to='/display/#classes'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Classes
				</NavHashLink>
				<NavHashLink
					smooth
					to='/display/#usage'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Usage
				</NavHashLink>
			</div>
		</div>
	);
};

export default Sidebar;
