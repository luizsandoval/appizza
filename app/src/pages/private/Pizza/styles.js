import styled from 'styled-components';
import { rgba } from 'polished';

export const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    background: ${({ theme }) => rgba(theme.colors.black.main, 0.8)};
    z-index: 3;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 4;
    position: fixed;
    top: 0;
    left: 0;
    padding: 64px 0;
`;

export const PizzaCard =  styled.div`
    background: ${({ theme }) => theme.colors.background};
    z-index: 5;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border-radius: 5px;

    box-shadow: 5px 15px 25px ${({ theme }) => theme.colors.black.lightest};

    @media screen and (min-width: 768px) {
        width: 600px;
        height: auto;
    }
`;
