import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    padding: 32px;
    background: ${({ theme }) => theme.colors.black.light};
    color: ${({ theme }) => theme.colors.white};
`;

export const Copyright = styled.p`
    text-align: center;
    font-size: 0.7em;
`;
