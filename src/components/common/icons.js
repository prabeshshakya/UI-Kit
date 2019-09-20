import React from 'react';

import { MdEdit, MdAdd, MdSearch, MdDelete, MdAddCircle } from 'react-icons/md';
import { FiChevronDown } from 'react-icons/fi'

const IconSize = '16px';

const Icons = (props) => {
    const { iconName } = props;

    switch(iconName){
        case 'MdEdit':
            return <MdEdit size={IconSize} {...props}/>;

        case 'FiChevronDown':
            return <FiChevronDown size={IconSize} {...props} />;

        case 'MdAdd':
            return <MdAdd size={IconSize} {...props} />;
        
        case 'MdSearch':
            return <MdSearch size={IconSize} {...props} />;

        case 'MdDelete':
            return <MdDelete size={IconSize} {...props} />;
        
        case 'MdAddCircle':
            return <MdAddCircle size={IconSize} {...props} />;

        default:
            return;
    }
}

export default Icons;
