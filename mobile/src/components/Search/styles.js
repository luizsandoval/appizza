import styled from 'styled-components/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 32px 0 0;
    position: relative;
`;

export const SearchInput = styled.TextInput`
    border: none;
    padding: 16px;
    padding-left: 64px;
    font-size: 16px;
    flex: 1;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.gray.lighten};
    color: ${({ theme }) => theme.colors.black.main};
`;

export const Icon = styled(FontAwesomeIcon)`
    position: absolute;
    left: 0;
    z-index: 2;
    margin-left: 32px;
    color: ${({ theme }) => theme.colors.black.lightest};
`;
