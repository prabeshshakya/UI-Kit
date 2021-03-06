import React from 'react';
import { Syntax } from '../../common/syntax-highlighter';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ButtonDefault = () => {
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
                                <div>
                                    <button className="btn btn--primary mr--3x">Button</button>
                                    <button className="btn btn--primary" disabled>Button</button>
                                </div>
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

export default ButtonDefault;