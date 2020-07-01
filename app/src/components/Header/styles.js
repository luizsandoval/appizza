import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 32px;
`;

export const Logo = styled.img`
    height: 60px;
    width: auto;
    max-width: 100%;
    padding: 8px 0;
`;

export const UserInformation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8em;

    label {
        margin-right: 16px;

        +span {
            margin-right: 16px;
            color: ${({ theme }) => theme.colors.black.lighten};
        }
    }

    span:last-child {
        cursor: pointer;
    }
`;

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    height: 40px;
    width: 40px;
    margin-right: 8px;
    background: ${({ theme }) => theme.colors.primary.lighten};
    color: ${({ theme }) => theme.colors.white};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.black.light};
    cursor: pointer;
    margin-left: 8px;
`;
