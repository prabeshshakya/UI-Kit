import React from 'react';

import { MdSearch } from "react-icons/md";

import NavBar from '../common/navbar';
import DropDown from '../common/select';

const Kit = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ];
    
    return (
        <div className="guide-wrapper d-flex">
            <div className="sidebar sidebar--bordered-right-1x">

            </div>

            <div className="guide-content">
            <div className="header">
                <NavBar />
            </div>
            <div className="guide-content__inner col-8">
            <div className="typography mb-5x">
            <h3 className="title--lg mb-8">Typography</h3>
            </div>

            <div className="app-buttons mb-3x">
            <div className="d-flex mb-3x">
                <button className="btn btn--primary mr-2x">
                Button Primary
                </button>
                <button className="btn btn--outline--primary">
                Button Primary Outline
                </button>
            </div>
            <div className="d-flex mb-3x">
                <button className="btn btn--secondary mr-2x">
                 Button Primary
                </button>
                <button className="btn btn--outline--secondary">
                  Button Secondary Outline
                </button>
            </div>
                <div className="d-flex mb-3x">
                    <button className="btn btn--outline--grey">
                        Button Grey Outline
                    </button>
                </div>
                <div className="d-flex mb-3x">
                    <button className="btn btn--text--primary btn--text mr-2x">
                    Button Text Primary
                    </button>
                    <button className="btn btn--text--secondary btn--text mr-2x">
                    Button Text Primary
                    </button>
                    <button className="btn btn--text--warning btn--text mr-2x">
                    Button Text Primary
                    </button>
                    <button className="btn btn--text--error btn--text mr-2x">
                    Button Text Primary
                    </button>
                </div>
            </div>

                <div className="form-group-elements">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label className="form-group__label">
                                    Label
                                </label>
                                <div className="form-group__control-container">
                                <input type="text" placeholder="eg. input something" className="form-group__control"/>
                                </div>
                                <div className="form-group__error">
                                    Your name is required
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group form-group--has-error">
                                <label className="form-group__label">
                                    Label
                                </label>
                                <div className="form-group__control-container">
                                <input type="text" placeholder="eg. input something" className="form-group__control"/>
                                </div>
                                <div className="form-group__error">
                                    Your name is required
                                </div>
                            </div>

                            <div className="form-group form-group--has-icon form-group--has-icon--left">
                                <label className="form-group__label">
                                    Label
                                </label>
                                <div className="form-group__control-container">
                                <MdSearch className="form-group__icon"/>
                                <input type="text" placeholder="eg. input something" className="form-group__control"/>
                                </div>
                                <div className="form-group__error">
                                    Your name is required
                                </div>
                            </div>

                            <div className="form-group form-group--has-icon form-group--has-icon--right">
                                <label className="form-group__label">
                                    Label
                                </label>
                                <div className="form-group__control-container">
                                <MdSearch className="form-group__icon"/>
                                <input type="text" placeholder="eg. input diabled" className="form-group__control" disabled/>
                                </div>
                                <div className="form-group__error">
                                    Your name is required
                                </div>
                            </div>

                            <div className="form-group form-group--has-icon form-group--has-icon--right">
                                <label className="form-group__label">
                                    Label
                                </label>
                                <div className="form-group__control-container">
                                <select name="" id="" className="form-group__control">
                                    <option value="" selected>Select Me</option>
                                    <option value="">Option 2</option>
                                    <option value="">Option 3</option>
                                </select>
                                </div>
                                <div className="form-group__error">
                                    Your name is required
                                </div>
                            </div>

                            <div className="form-group form-group--has-icon form-group--has-icon--right">
                                <label className="form-group__label">
                                    Label
                                </label>
                                <div className="form-group__control-container">
                                    <DropDown options={options} isMulti/>
                                </div>
                                <div className="form-group__error">
                                    Your name is required
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="radio-inputs mb-10x">
                        <div className="c-radio">
                            <input type="radio" id="radio1" name="try" className="c-radio__control"/>
                            <label htmlFor="radio1" className="c-radio__label">Male</label>
                        </div>
                        <div className="c-radio">
                            <input type="radio" id="radio2" name="try" className="c-radio__control"/>
                            <label htmlFor="radio2" className="c-radio__label">Female</label>
                        </div>
                    </div>
                </div>
        </div>
        
        </div>
        </div>
    )
}

export default Kit;
