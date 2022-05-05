import React from "react";
import KitRouter from "./KitRouter";
import { NavLink } from "react-router-dom";

const Kit = () => {
	return (
		<>
			<nav className="navbar">
				<div className="container navbar__flex">
					<div className="navbar__header">
						<h1>SASS Starter Kit</h1>
					</div>
					<div className="navbar__list">
						<a href="#" className="navbar__item">
							Github
						</a>
					</div>
				</div>
			</nav>
			<div className="container">
				<div className="guide-wrapper d-flex">
					<div className="sidebar sidebar--bordered-right-1x">
						{/* <h2 className="title title--large font-weight--thin mt--5x mb--11x">
              Documentation
            </h2> */}

						<div className="menu-group">
							<h4 className="menu-group__title">General</h4>
							<NavLink to="/docs/introduction" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
								Introduction
							</NavLink>
							<NavLink to="/docs/introduction#filestructure" className="menu-group__nodes__single">
								File Structure
							</NavLink>
							<NavLink to="/docs/getting-started" className="menu-group__nodes__single">
								Getting Started
							</NavLink>
						</div>

						<div className="menu-group">
							<h4 className="menu-group__title">Components</h4>
							<div className="menu-group__contents">
								<div className="menu-group__nodes">
									<NavLink to="/docs/accordion" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
										Accordion
									</NavLink>
								</div>
								<div className="menu-group__nodes">
									<NavLink to="/docs/button" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
										Button
									</NavLink>
								</div>
								<div className="menu-group__nodes">
									<NavLink to="/docs/forms" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
										Form Elements
									</NavLink>
								</div>
							</div>
						</div>
						<div className="menu-group">
							<h4 className="menu-group__title">Layout</h4>
							<div className="menu-group__contents">
								<div className="menu-group__nodes">
									<NavLink to="/docs/breakpoints" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
										Breakpoints
									</NavLink>
								</div>
								<div className="menu-group__nodes">
									<NavLink to="/docs/grid" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
										Grid
									</NavLink>
								</div>
								<div className="menu-group__nodes">
									<NavLink to="/docs/spacing" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
										Spacing
									</NavLink>
								</div>
								<div className="menu-group__nodes">
									<NavLink to="/docs/units" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
										Units
									</NavLink>
								</div>
							</div>
						</div>
						<div className="menu-group">
							<h4 className="menu-group__title">Utilities</h4>
							<div className="menu-group__contents">
								<div className="menu-group__nodes">
									<NavLink to="/docs/colors" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
										Colors
									</NavLink>
								</div>
								<div className="menu-group__nodes">
									<NavLink to="/docs/fonts" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
										Fonts
									</NavLink>
								</div>
								<div className="menu-group__nodes">
									<NavLink to="/docs/spacing" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
										Spacing
									</NavLink>
								</div>
								<div className="menu-group__nodes">
									<NavLink to="/docs/units" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
										Units
									</NavLink>
								</div>
							</div>
						</div>
					</div>
					<div className="guide-content">
						<div className="d--flex justify-content--center container">
							<div className="col--12--md">
								<KitRouter />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Kit;
