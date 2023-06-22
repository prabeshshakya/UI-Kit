import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {
	return (
		<aside className='sidebar'>
			<div className='menu-group'>
				<h4 className='menu-group__title'>General</h4>
				<NavLink
					to='/'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
				>
					Introduction
				</NavLink>

				<NavLink
					to='/getting-started'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
				>
					Getting Started
				</NavLink>
				<NavLink
					to='/tooling-setup'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
				>
					Tooling setup
				</NavLink>
				<NavLink
					to='/typography'
					className='menu-group__nodes__single'
					activeClassName='menu-group__nodes__single--active'
				>
					Typography
				</NavLink>
			</div>

			<div className='menu-group'>
				<h4 className='menu-group__title'>Components</h4>
				<div className='menu-group__contents'>
					<div className='menu-group__nodes'>
						<NavLink
							to='/accordion'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							Accordion
						</NavLink>
					</div>
					<div className='menu-group__nodes'>
						<NavLink
							to='/button'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							Button
						</NavLink>
					</div>
					<div className='menu-group__nodes'>
						<NavLink
							to='/forms'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							Form Elements
						</NavLink>
					</div>
				</div>
			</div>
			<div className='menu-group'>
				<h4 className='menu-group__title'>Utilities</h4>
				<div className='menu-group__contents'>
					<div className='menu-group__nodes'>
						<NavLink
							to='/colors'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							Colors
						</NavLink>
					</div>
					<div className='menu-group__nodes'>
						<NavLink
							to='/Display'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							Display
						</NavLink>
					</div>
					<div className='menu-group__nodes'>
						<NavLink
							to='/flex'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							Flex
						</NavLink>
					</div>
					<div className='menu-group__nodes'>
						<NavLink
							to='/fonts'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							Fonts
						</NavLink>
					</div>
					<div className='menu-group__nodes'>
						<NavLink
							to='/spacing'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							Spacing
						</NavLink>
					</div>
				</div>
			</div>
			<div className='menu-group'>
				<h4 className='menu-group__title'>Usages</h4>
				<div className='menu-group__contents'>
					<div className='menu-group__nodes'>
						<NavLink
							to='/bem'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							BEM
						</NavLink>

						<NavLink
							to='/usages/responsive'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							Responsive
						</NavLink>
						<NavLink
							to='/usages/helper'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							Helper
						</NavLink>
					</div>
				</div>
			</div>
			<div className='menu-group'>
				<h4 className='menu-group__title'>Layouts</h4>
				<div className='menu-group__contents'>
					<div className='menu-group__nodes'>
						<NavLink
							to='/breakpoints'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							Breakpoints
						</NavLink>
					</div>
					<div className='menu-group__nodes'>
						<NavLink
							to='/grid'
							className='menu-group__nodes__single'
							activeClassName='menu-group__nodes__single--active'
						>
							Grid
						</NavLink>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default LeftSidebar;
