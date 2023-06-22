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
					to='/fonts/#font-size'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Font Size
				</NavHashLink>
				<NavHashLink
					smooth
					to='/fonts/#font-weight'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Font Weight
				</NavHashLink>

				<NavHashLink
					smooth
					to='/fonts/#font-style'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Font Style
				</NavHashLink>
				<NavHashLink
					smooth
					to='/fonts/#text-transform'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Text Transform
				</NavHashLink>
				<NavHashLink
					smooth
					to='/fonts/#text-utilities'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Text Utilities
				</NavHashLink>
			</div>
		</div>
	);
};

export default Sidebar;
