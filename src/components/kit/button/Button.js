import React from 'react';

import ButtonDefault from './ButtonDefault';
import ButtonVariants from './ButtonVariants';
import ButtonSize from './ButtonSize';
import ButtonShadow from './ButtonShadow';

const Button = () => {
    return(
        <div className="mt--11x">
            <div className="title-area  mb--7x">
                <h2 className="title title--largest title--dark font-weight--thin mb--4x">Button</h2>
                <p className="lead-text">Create button with variety of Styles</p>
            </div>

            <div className="mb--11x">
                <ButtonDefault />
            </div>

            <div className="mb--11x">
                <ButtonVariants />
            </div>

            <div className="mb--11x">
                <ButtonSize />
            </div>

            <div className="mb--11x">
                <ButtonShadow />
            </div>
        </div>
    );
}

export default Button;