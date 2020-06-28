import styled from 'styled-components';

export const PasswordContainer = styled.div`
    position: relative;

    input {
        margin-top: 8px;
    }
    
`;

export const IconButton = styled.button`
    position: absolute;
    right: 0;
    top: 60%;
    margin-right: 16px;
    border: none;
    background: transparent;
    cursor: pointer;

    color: ${({ theme }) => theme.colors.black.main};
`;
