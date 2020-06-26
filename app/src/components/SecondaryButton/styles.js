import styled from 'styled-components';

const SecondaryButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.secondary.main};
    color: ${({ theme }) => theme.colors.secondary.main};
    background: ${({ theme }) => theme.colors.background};
    padding: 16px;
    width: 100%;
    border-radius: 5px;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
`;

export default SecondaryButton;
