import React from 'react';

import Divider from './styles';

const DividerWithText= ({ text }) => (
    <Divider>
        <span>{text}</span>
    </Divider>
);

export default DividerWithText;
