import React from 'react';

import styled from 'styled-components/native';

const StyledText = styled.Text`
    font-size: 16px;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.black.lighten};
`;

const Text = ({ children, ...rest }) => (
    <StyledText {...rest}>
        {children}
    </StyledText>
);

export default Text;
