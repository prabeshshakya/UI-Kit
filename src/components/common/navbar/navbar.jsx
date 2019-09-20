import React from 'react';

import {logo} from '../../../assets/images';

const NavBar = () => {
    return(
        <nav className="navbar navbar--bordered-bottom navbar--content-spread navbar--sticky">
            <div className="navbar__left">
                <div className="navbar__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="nav">
                    <div className="nav__node">
                        <a href="/" className="nav__link nav__link--active">Projects</a>
                    </div>
                    <div className="nav__node">
                        <a href="/" className="nav__link">Timesheet</a>
                    </div>
                </div> 
            </div>

            <div className="navbar__right">
                <div className="media">
                    <div className="avatar avatar--round avatar--sm mr-3x">
                        <img src="https://lms.lftechnology.com/images/349.png?6ae578d3-3a21-44c5-aaef-402cc04b55be" alt="Prabesh"/>
                    </div>
                    <div className="media__content media__content--medium-spaced">
                        <h4 className="media__title media__title--sm-font font-weight--normal">Prabesh Shakya</h4>
                        <div className="media__body media__body--xs-font">
                            UI/UX Engineer
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;