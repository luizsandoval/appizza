import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const StyledCheckbox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    border-radius: 5px;
    background: ${({ theme, checked }) => checked 
        ? theme.colors.success.main
        : theme.colors.white
    };
    margin-right: 16px;
    cursor: pointer;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ align }) => align };
    padding: 16px 0;
`;

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.white};
`;
