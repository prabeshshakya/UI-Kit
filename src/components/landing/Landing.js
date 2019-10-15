import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <div className="kit-landing-page d-flex justify-content-center align-items-center">
            <div className="kit-landing-page__logo">
                <h1 className="font-weight--thin">Project Starter Kit</h1>
                <div className="action--button text--center">
                    <Link to="/docs" className="btn btn--primary btn--large btn--rounded">Docs</Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;