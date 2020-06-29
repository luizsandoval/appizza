import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.secondary.lighten};
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: auto;
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 25px 25px ${({ theme }) => theme.colors.black.lightest};
`;
