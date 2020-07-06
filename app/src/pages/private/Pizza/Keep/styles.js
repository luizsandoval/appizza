import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;

    & > div {
        display: flex;
        flex-direction: row;
    }
`;

export const StyledForm = styled.form`
    width: 100%;
    fieldset {
        display: flex;
        flex-direction: column;
        border: none;
        position: relative;
        margin-bottom: 16px;

        :last-of-type {
            margin-bottom: 32px;
        }

        label {
            margin-bottom: 8px;
            font-weight: bold;
        
            & small {
                color: ${({ theme }) => theme.colors.black.lighten};
                font-style: italic;
                font-weight: lighter;
            }
        }
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.black.lighten};
    margin-right: 8px;

    cursor: pointer;
`;
