import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    overflow: hidden;
    height: 24px;
    width: 24px;
    position: absolute;
    padding: 0;
    top: 0;
    left: 0;
    opacity:0;
    white-space: nowrap;
`;

export const StyledCheckbox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
    background: ${({ theme, checked }) => checked 
        ? theme.colors.success.main
        : theme.colors.white
    };
    cursor: pointer;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: ${({ align }) => align };
    padding: 16px 0;
`;

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.white};
`;
