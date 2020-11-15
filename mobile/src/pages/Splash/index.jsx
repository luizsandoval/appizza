import React from 'react';

import styled from 'styled-components/native';

import Container from '../../components/Container';

import Logo from '../../assets/logo.svg';

const StyledContainer = styled(Container)`
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.secondary.lightest};
`;

const Splash = () => (
    <StyledContainer>
        <Logo width={150} height={300} />
    </StyledContainer>
);

export default Splash;
