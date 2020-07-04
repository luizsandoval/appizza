import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Label = styled.label`
    margin: 16px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    cursor: pointer;
    width: 100%;

    span {
        margin-left: 32px;
    }
`;

export const Input = styled.input`
    height: 24px;
    width: 24px;
    position: absolute;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
    top: 0;

    margin-left: ${({ margin }) => margin};
`;

export const StyledCheckbox = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    align-items:center;
    border: 1px solid ${({ theme }) => theme.colors.black.lightest};
    top: 0;

    margin-left: ${({ margin }) => margin};
    
    background: ${({ checked, theme }) => (checked 
        ? theme.colors.success.main
        : theme.colors.white
    )};
`;

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.white};
`;
