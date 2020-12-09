import React from 'react';

import styled from 'styled-components/native';

const StyledLabel = styled.Text`
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.black.lighten};
`;

const Label = ({ children }) => (
    <StyledLabel>
        {children}
    </StyledLabel>
);

export default Label;
