import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const FloatingActionButton = styled.button`
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    height: 50px;
    width: 50px;
    position: fixed;
    z-index: 2;
    right: 0; 
    border-radius: 25px;
    padding: 16px;
    bottom: 0;
    margin: 16px;
    box-shadow: 5px 15px 25px ${({ theme }) => theme.colors.black.lightest};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.white};
`;
