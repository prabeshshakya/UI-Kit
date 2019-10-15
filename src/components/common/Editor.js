import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/xcode';


const Editor = (props) => {
    return(
        <AceEditor
            mode="javascript"
            theme="xcode"
            {...props}
        />
    );
}

export default Editor;