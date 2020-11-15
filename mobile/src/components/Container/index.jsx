import React from 'react';

import styled from 'styled-components/native';

const StyledContainer = styled.View`
    flex: 1;
    padding: ${({ defaultPadding }) => (
        defaultPadding 
            ? '32px' 
            : 0
    )};
`;

const Container = ({ children, defaultPadding = true, ...rest }) => (
    <StyledContainer
        defaultPadding={defaultPadding} 
        {...rest}
    >
        {children}
    </StyledContainer>
);

export default Container;
