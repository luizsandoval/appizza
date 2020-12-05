import React from 'react';

import styled from 'styled-components/native';

const StyledDivider = styled.View`
    height: 1px;
    width: 100%;
    margin: 16px 0;
    background: ${({ theme }) => theme.colors.black.lightest};
`;

const Divider = () => (
    <StyledDivider />
);

export default Divider;
