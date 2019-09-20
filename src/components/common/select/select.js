import React from 'react';

import Select from 'react-select';

const DropDown = (props) => {
    return(
        <Select 
        className="lf-select" 
        classNamePrefix="lf-select" 
        menuPortalTarget={document.body}
        menuPlacement={"auto"}
        menuPosition={'absolute'}
        {...props} />

    );
}

export default DropDown;
