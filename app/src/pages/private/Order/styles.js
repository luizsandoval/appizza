import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 64px 0;

    @media screen and (min-width: 768px) {
        padding: 64px;
    }

    background: ${({ theme }) => theme.colors.secondary.lighten};
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 32px 64px;
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 25px 25px ${({ theme }) => theme.colors.black.lightest};

    h2 {
        font-weight: bold;
        text-align: left;
    }

    @media screen and (min-width: 768px) {
        width: 600px;
    }

`;
