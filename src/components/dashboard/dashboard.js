import React from 'react';
import NavBar from '../common/navbar';

import { MdEdit, MdAdd, MdSearch, MdDelete, MdAddCircle } from 'react-icons/md';
import { FiChevronDown } from 'react-icons/fi';

const Dashboard = () => {
    return(
        <div className="content-wrap mb-8x">
            <NavBar />
            <div className="container">
                <div className="title-block">
                    <h2 className="title title--large title--dark mb-6x mt-6x">Hayward Baker</h2>
                </div>

                <div className="d-flex">
                    <div className="well side-bar">
                        <h3 className="title title--smallest title--dark text-uppercase d-flex align-items-center justify-content-between mb-4x">
                            Project Information 
                            
                            <button className="btn btn--icon btn--icon--grey">
                                <MdEdit className="btn--icon__icon-node"/>
                            </button>
                        </h3>

                        <div className="project-info">
                            <div className="project-info__row mb-5x">
                                <div className="label mb-1x">Project Status</div>
                                <div className="data">
                                    <div className="project-status">
                                        <span className="status-indicator status-indicator--warning mr-2x" />
                                        <span className="font-weight--bolder warning--text text--uppercase">In Progress</span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info__row mb-5x">
                                <div className="label mb-1x">Account Manager</div>
                                <div className="data">
                                    <p className="font-weight--bolder">Chandika Bhandari</p>
                                </div>
                            </div>
                            <div className="project-info__row mb-5x">
                                <div className="label mb-1x">Industry</div>
                                <div className="data">
                                    <p className="font-weight--bolder">Infrastructure</p>
                                </div>
                            </div>
                            <div className="project-info__row mb-5x">
                                <div className="label mb-1x">Category</div>
                                <div className="data">
                                    <p className="font-weight--bolder">Product</p>
                                </div>
                            </div>
                            <div className="project-info__row mb-5x">
                                <div className="label mb-1x">Client</div>
                                <div className="data">
                                    <p className="font-weight--bolder">Mark Rohrbach</p>
                                </div>
                            </div>
                            <div className="project-info__row mb-5x">
                                <div className="label mb-1x">Tech Stacks</div>
                                <div className="data">
                                    <p className="font-weight--bolder">Sqlite, Electron, NodeJs, ReactJs</p>
                                </div>
                            </div>
                            <div className="project-info__row mb-5x">
                                <div className="label mb-1x">Project Charter</div>
                                <div className="data">
                                    <p className="font-weight--bolder">None</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-info flex--1 ml-lg-6x">
                        <div className="accordion project-health mb-6x">
                            <div className="accordion__head d-flex justify-content-between align-items-center">
                                <div className="l-section d-flex align-items-center">
                                    <h3 class="title title--medium title--dark mr-7x">Project Health</h3>
                                    <div className="p-health-status">
                                        High <span className="status-indicator status-indicator--error ml-1x" />
                                    </div>
                                </div>
                                <FiChevronDown />
                            </div>
                            <div className="accordion__body">
                                <div className="d-flex justify-content-between align-items-center mb-4x">
                                    <h4 className="title title--smaller">
                                        Risk Status
                                    </h4>
                                    <a href="/" className="font-weight--bold">+ Add Risk</a>
                                </div>
                                <div className="status-listed d-flex align-items-center mr--3x ml--3x">
                                    <div className="p-health-status-node">
                                        <button className="btn btn--text text--uppercase">Schedule <span className="status-indicator status-indicator--secondary ml-2x" /></button>
                                    </div>
                                    <div className="p-health-status-node">
                                        <button className="btn btn--text text--uppercase">Scope Creep <span className="status-indicator status-indicator--warning ml-2x" /></button>
                                    </div>
                                    <div className="p-health-status-node">
                                        <button className="btn btn--text text--uppercase">Code Quality <span className="status-indicator status-indicator--warning ml-2x" /></button>
                                    </div>
                                    <div className="p-health-status-node">
                                        <button className="btn btn--text text--uppercase">Team Motivation <span className="status-indicator status-indicator--error ml-2x" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion project-team mb-6x">
                            <div className="accordion__head d-flex justify-content-between align-items-center">
                                <div className="l-section d-flex align-items-center">
                                    <h3 class="title title--medium title--dark mr-7x">
                                        Project Team <span className="counter">(7)</span>
                                    </h3>
                                    <div className="allocation mr-6x">
                                        Allocation: <span className="font-weight--bolder">11.25</span>
                                    </div>
                                    <div className="allocation mr-6x">
                                        Billed: <span className="font-weight--bolder">12</span>
                                    </div>
                                </div>
                                <div className="form-group ml-auto mr-4x mb-0 form-group--has-icon form-group--has-icon--left">
                                    <div className="form-group__control-container">
                                    <MdSearch className="form-group__icon"/>
                                    <input type="text" placeholder="Search" className="form-group__control"/>
                                    </div>
                                </div>
                                <FiChevronDown />
                            </div>
                            <div className="accordion__body">
                                <div className="d-flex mr--4x ml--4x pb-4x">
                                    <div className="group-content">
                                        <div className="group-content__inner">
                                            <div className="group-content__title ml-4x mr-4x">
                                                PM
                                            </div>
                                            <div className="group-content__body">
                                                <div className="group-content__repeatable">
                                                    <div className="round-input">
                                                        <div className="round-input__icon">
                                                        <div className="avatar avatar--round avatar--sm">
                                                        <img src="https://lms.lftechnology.com/images/349.png?6ae578d3-3a21-44c5-aaef-402cc04b55be" alt="Prabesh"/>
                                                    </div>
                                                        </div>
                                                        <div className="round-input__title">
                                                            Prabesh
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-content">
                                        <div className="group-content__inner">
                                            <div className="group-content__title ml-4x mr-4x">
                                                Developer
                                            </div>
                                            <div className="group-content__body">
                                            <div className="group-content__repeatable">
                                            <div className="round-input">
                                                        <div className="round-input__icon">
                                                        <div className="avatar avatar--round avatar--sm">
                                                        <img src="https://lms.lftechnology.com/images/349.png?6ae578d3-3a21-44c5-aaef-402cc04b55be" alt="Prabesh"/>
                                                    </div>
                                                        </div>
                                                        <div className="round-input__title">
                                                            Prabesh
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="group-content__repeatable">
                                                <div className="round-input">
                                                        <div className="round-input__icon">
                                                        <div className="avatar avatar--round avatar--sm">
                                                        <img src="https://lms.lftechnology.com/images/349.png?6ae578d3-3a21-44c5-aaef-402cc04b55be" alt="Prabesh"/>
                                                    </div>
                                                        </div>
                                                        <div className="round-input__title">
                                                            Prabesh
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-content">
                                        <div className="group-content__inner">
                                            <div className="group-content__title ml-4x mr-4x">
                                                QA
                                            </div>
                                            <div className="group-content__body">
                                            <div className="group-content__repeatable">
                                            <div className="round-input">
                                                        <div className="round-input__icon">
                                                        <div className="avatar avatar--round avatar--sm">
                                                        <img src="https://lms.lftechnology.com/images/349.png?6ae578d3-3a21-44c5-aaef-402cc04b55be" alt="Prabesh"/>
                                                    </div>
                                                        </div>
                                                        <div className="round-input__title">
                                                            Prabesh
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="group-content__repeatable">
                                                <div className="round-input">
                                                        <div className="round-input__icon">
                                                        <div className="avatar avatar--round avatar--sm">
                                                        <img src="https://lms.lftechnology.com/images/349.png?6ae578d3-3a21-44c5-aaef-402cc04b55be" alt="Prabesh"/>
                                                    </div>
                                                        </div>
                                                        <div className="round-input__title">
                                                            Prabesh
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-content">
                                        <div className="group-content__inner">
                                            <div className="group-content__title ml-4x mr-4x">
                                                Designer
                                            </div>
                                            <div className="group-content__body">
                                                <div className="group-content__repeatable">
                                                <div className="round-input">
                                                        <div className="round-input__icon">
                                                        <div className="avatar avatar--round avatar--sm">
                                                        <img src="https://lms.lftechnology.com/images/349.png?6ae578d3-3a21-44c5-aaef-402cc04b55be" alt="Prabesh"/>
                                                    </div>
                                                        </div>
                                                        <div className="round-input__title">
                                                            Prabesh
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-content">
                                        <div className="group-content__inner">
                                                <div className="group-content__repeatable">
                                                <div className="round-input">
                                                        <div className="round-input__icon">
                                                        <div className="avatar avatar--round avatar--sm">
                                                        <img src="https://lms.lftechnology.com/images/349.png?6ae578d3-3a21-44c5-aaef-402cc04b55be" alt="Prabesh"/>
                                                    </div>
                                                        </div>
                                                        <div className="round-input__title">
                                                            Prabesh
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="group-detail">
                                    <p class="title--dark mt-3x mb-3x">Team Involvement Details</p>
                                    <div className="table">
          <div className="table__head">
            <div className="table__row">
              <div className="table__col table__col--head">
                Start Date
              </div>
              <div className="table__col table__col--head">
                End Date
              </div>
              <div className="table__col table__col--head">
                Allocation
              </div>
              <div className="table__col table__col--head">
                Role
              </div>
              <div className="table__col table__col--head">
                Billing
              </div>
              <div className="table__col table__col--head">
                Actions
              </div>
              
            </div>
          </div>
          <div className="table__body">
            <div className="table__row">
              <div className="table__col table__col--body">
                    02 Jan 2019
              </div>
              <div className="table__col table__col--body">
                  02 Jan 2019
              </div>
              <div className="table__col table__col--body">
                100%
              </div>
              <div className="table__col table__col--body">
                Developer
              </div>
              <div className="table__col table__col--body">
                Billed 100%
              </div>
              <div className="table__col table__col--body">
                <div className="table__col__action d-flex">
                  <button className="btn btn--icon btn--icon--grey mr-3x"><MdEdit className="btn--icon__icon-node"/></button>
                  <button className="btn btn--icon btn--icon--grey"><MdDelete className="btn--icon__icon-node"/></button>
                </div>
              </div>
            </div>
            <div className="table__row">
              <div className="table__col table__col--body">
                    02 Jan 2019
              </div>
              <div className="table__col table__col--body">
                  02 Jan 2019
              </div>
              <div className="table__col table__col--body">
                100%
              </div>
              <div className="table__col table__col--body">
                Developer
              </div>
              <div className="table__col table__col--body">
                Billed 100%
              </div>
              <div className="table__col table__col--body">
                <div className="table__col__action d-flex">
                  <button className="btn btn--icon btn--icon--grey mr-3x"><MdEdit className="btn--icon__icon-node"/></button>
                  <button className="btn btn--icon btn--icon--grey"><MdDelete className="btn--icon__icon-node"/></button>
                </div>
              </div>
            </div>
            
    
          </div>

        <div className="add-allocation mt-4x">
            <a href="/" className="d-flex align-items-center font-weight--bold"><MdAddCircle className="mr-2x"/>Add Allocation</a>
        </div>

        </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion project-phases mb-6x">
                            <div className="accordion__head d-flex justify-content-between align-items-center">
                                <div className="l-section d-flex align-items-center">
                                    <h3 class="title title--medium title--dark mr-7x">
                                        Project Phase <span className="counter">(2)</span>
                                    </h3>
                                </div>
                                <FiChevronDown />
                            </div>
                            <div className="accordion__body">
                                <div className="d-flex mr--4x ml--4x">
                                    <div className="group-content">
                                        <div className="group-content__inner">
                                            <div className="group-content__body">
                                                <div className="group-content__repeatable">
                                                    <div className="round-input">
                                                        <div className="round-input__icon">
                                                            1
                                                        </div>
                                                        <div className="round-input__title">
                                                            Phase 1
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="group-content__repeatable">
                                                    <div className="round-input">
                                                        <div className="round-input__icon">
                                                            2
                                                        </div>
                                                        <div className="round-input__title">
                                                            Phase 2
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-content">
                                        <div className="group-content__inner">
                                            <div className="group-content__repeatable">
                                                <div className="round-input">
                                                    <div className="round-input__icon">
                                                        <MdAdd size="32px"/>
                                                    </div>
                                                    <div className="round-input__title">
                                                        Add
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion project-phases">
                            <div className="accordion__head d-flex justify-content-between align-items-center">
                                <div className="l-section d-flex align-items-center">
                                    <h3 class="title title--medium title--dark mr-7x">
                                        Project Milestone <span className="counter">(2)</span>
                                    </h3>
                                </div>
                                <FiChevronDown />
                            </div>
                            <div className="accordion__body">
                                <div className="d-flex mr--4x ml--4x">
                                    <div className="group-content">
                                        <div className="group-content__inner">
                                            <div className="group-content__body">
                                                <div className="group-content__repeatable">
                                                    <div className="round-input">
                                                        <div className="round-input__icon">
                                                            1
                                                        </div>
                                                        <div className="round-input__title">
                                                            Milestone 1
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="group-content__repeatable">
                                                    <div className="round-input">
                                                        <div className="round-input__icon">
                                                            2
                                                        </div>
                                                        <div className="round-input__title">
                                                            Milestone 2
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-content">
                                        <div className="group-content__inner">
                                            <div className="group-content__repeatable">
                                                <div className="round-input">
                                                    <div className="round-input__icon">
                                                        <MdAdd size="32px"/>
                                                    </div>
                                                    <div className="round-input__title">
                                                        Add
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        


                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;