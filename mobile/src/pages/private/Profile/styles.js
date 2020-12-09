import styled from 'styled-components/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Container from '../../../components/Container';

export const StyledContainer = styled(Container)`
    background: ${({ theme }) => theme.colors.secondary.lightest};
`;

export const Header = styled.View`
    flex: 1;
    padding: 32px;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    flex: 2;
    padding: 64px 32px 32px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: ${({ theme }) => theme.colors.white};
`;

export const Option = styled.View`
    /* flex: 1; */
    flex-direction: row;
    align-items: center;
    padding: 32px 0;
    justify-content: space-between;
`;

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.black.lighten};
`;
