import styled from 'styled-components/native';

import Container from '../../../components/Container';

const PADDING = '32px';

export const StyledContainer = styled(Container)`
    background: ${({ theme }) => theme.colors.secondary.lightest};
`;

export const Header = styled.View`
    flex: 1;
    padding: 32px;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.View`
    flex: 2;
    padding: 64px ${PADDING};
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.white};
`;
