import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../../assets/images';

const Nav = () => {
	return (
		<nav className='navbar'>
			<div className='container navbar__flex'>
				<div className='navbar__header'>
					<img
						src={logo}
						alt='startkit Logo'
						width={120}
					/>
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
