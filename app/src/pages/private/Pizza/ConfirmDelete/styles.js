import styled from 'styled-components';
import { rgba } from 'polished';

export const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    background: ${({ theme }) => rgba(theme.colors.black.main, 0.8)};
    top: 0;
    left: 0;
    z-index: 6;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 7;
`;

export const Card = styled.div`
    padding: 32px;
    display: flex;
    width: auto;
    height: auto;
    border-radius: 5px;
    z-index: 8;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.background};

    h2 {
        font-weight: bold;
    }

    p {
        font-weight: lighter;
        padding-top: 16px;
    }

    @media screen and (min-width: 768px) {
        width: 400px;
    }
`;

export const CardActions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-top: 16px;
`;

export const Button = styled.button`
    border: none;
    background: ${({ primary, theme }) => primary 
        ? theme.colors.primary.main
        : theme.colors.background
    };
    color: ${({ primary, theme }) => primary
        ? theme.colors.white
        : theme.colors.black.main
    };
    padding: 16px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 5px;
`;
