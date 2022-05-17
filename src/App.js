import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { NavLink } from "react-router-dom";
import "./assets/sass/style.scss";

import MainRouter from "./routes";

const App = () => {
	return (
		<>
			<Router>
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
							<div className="menu-group">
								<h4 className="menu-group__title">General</h4>
								<NavLink to="/" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
									Introduction
								</NavLink>
								<NavLink to="/#filestructure" className="menu-group__nodes__single">
									File Structure
								</NavLink>
								<NavLink to="/getting-started" className="menu-group__nodes__single">
									Getting Started
								</NavLink>
							</div>

							<div className="menu-group">
								<h4 className="menu-group__title">Components</h4>
								<div className="menu-group__contents">
									<div className="menu-group__nodes">
										<NavLink to="/accordion" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
											Accordion
										</NavLink>
									</div>
									<div className="menu-group__nodes">
										<NavLink to="/button" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
											Button
										</NavLink>
									</div>
									<div className="menu-group__nodes">
										<NavLink to="/forms" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
											Form Elements
										</NavLink>
									</div>
								</div>
							</div>
							<div className="menu-group">
								<h4 className="menu-group__title">Utilities</h4>
								<div className="menu-group__contents">
									<div className="menu-group__nodes">
										<NavLink to="/colors" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
											Colors
										</NavLink>
									</div>
									<div className="menu-group__nodes">
										<NavLink to="/fonts" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
											Fonts
										</NavLink>
									</div>
									<div className="menu-group__nodes">
										<NavLink to="/spacing" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
											Spacing
										</NavLink>
									</div>
									<div className="menu-group__nodes">
										<NavLink to="/units" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
											Units
										</NavLink>
									</div>
								</div>
							</div>
							<div className="menu-group">
								<h4 className="menu-group__title">Layouts</h4>
								<div className="menu-group__contents">
									<div className="menu-group__nodes">
										<NavLink to="/breakpoints" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
											Breakpoints
										</NavLink>
									</div>
									<div className="menu-group__nodes">
										<NavLink to="/grid" className="menu-group__nodes__single" activeClassName="menu-group__nodes__single--active">
											Grid
										</NavLink>
									</div>
								</div>
							</div>
						</div>
						<div className="guide-content">
							<div className="container">
								<MainRouter />
							</div>
						</div>
					</div>
				</div>
			</Router>
		</>
	);
};

export default App;
