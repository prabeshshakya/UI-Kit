import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className='navbar'>
			<div className='container navbar__flex'>
				<div className='navbar__header'>
					<h1>SASS Starter Kit</h1>
				</div>
				<div className='navbar__list'>
					<NavLink
						to='/'
						className='navbar__item'
					>
						Github
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
