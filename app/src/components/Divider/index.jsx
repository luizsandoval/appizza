import React from 'react';

import StyledDivider from './styles';

const Divider = ({ text }) => (
    <StyledDivider>
        {
            text ?
                <span>{text}</span>
            : null
        }
    </StyledDivider>
);

export default Divider;
