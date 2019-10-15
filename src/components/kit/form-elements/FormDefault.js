import React from 'react';
import { Syntax } from '../../common/syntax-highlighter';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const FormDefault = () => {
const code=`<div>
    <button class="btn btn--primary mr--3x">Button</button>
    <button class="btn btn--primary" disabled>Button</button>
</div>`

    return(
        <div className="doc-container">
                <h4 className="title title--medium title--dark mb--2x">Basic Usage</h4>
                <p>
                    In-order to use this component, add <code>.btn</code> class and add modifiers such as <code>.btn--primary</code> to <code>button</code> tag.
                </p>
                <div className="code-preview">
                    <div className="mb--2x">
                        <Syntax>
                            {'<button class="btn btn--primary"></button>'}
                        </Syntax>
                    </div>
                    <div>
                        <Syntax>
                            {'<button class="btn btn--primary" disabled></button>'}
                        </Syntax>
                    </div>
                </div>
                <div className="usage-markup-preview">
                    <Tabs>
                        <TabList>
                            <Tab>Preview</Tab>
                            <Tab>Code</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="preview-container">
                                <form action="">
                                    <div className="form-group">
                                        <label className="form-group__label">Email address</label>
                                        <input type="email" className="form-group__control" placeholder="Email Address"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-group__label">Password</label>
                                        <input type="password" className="form-group__control" placeholder="Your Secret"/>
                                    </div>
                                    <div className="form-group c-checkbox">
                                        <input type="checkbox" className="c-checkbox__control" id="checkbox"/>
                                        <label htmlFor="checkbox">Check Me</label>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn--primary btn--rounded">Submit</button>
                                    </div>

                                </form>
                               
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="preview-container">
                                <div className="d-flex">
                                    <div className="code-preview mt--0">
                                        <Syntax>{code}</Syntax>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
    );
}

export default FormDefault;