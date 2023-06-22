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
					to='/grid/#grid-option'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Grid options
				</NavHashLink>

				<NavHashLink
					smooth
					to='/grid/#equal-width'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Equal-width
				</NavHashLink>
				<NavHashLink
					smooth
					to='/grid/#setting-one-column-width'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Setting one column width
				</NavHashLink>
				<NavHashLink
					smooth
					to='/grid/#variable-width-content'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Variable width content
				</NavHashLink>
				<NavHashLink
					smooth
					to='/grid/#all-breakpoint'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					All breakpoints
				</NavHashLink>
				<NavHashLink
					smooth
					to='/grid/#stacked-horizontal'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Stacked to horizontal
				</NavHashLink>
				<NavHashLink
					smooth
					to='/grid/#mix-match'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
					scroll={(el) => scrollWithOffset(el)}
				>
					Mix and match
				</NavHashLink>
			</div>
		</div>
	);
};

export default Sidebar;
