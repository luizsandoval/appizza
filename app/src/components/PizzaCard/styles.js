import styled from 'styled-components';
import { ellipsis, rgba } from 'polished';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 5px 15px 25px ${({ theme }) => theme.colors.black.lightest};
`;

export const CardImage = styled.div`
    max-width: 100%;
    height: 100px;
    position: relative;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-image: url(${({ imageSource }) => imageSource});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    border-top-right-radius: 5px;
    padding: 16px;
    border-top-left-radius: 5px;

    small {
        color: ${({ theme }) => theme.colors.black.lighten};
        margin-bottom: 16px;
        ${ellipsis()};
    }
`;

export const CardActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
`;

export const CardButton = styled.button`
    border: none;
    color: ${({ theme }) => theme.colors.info.main};
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: bold;
    letter-spacing: 1.5px;
    background: ${({ theme }) => theme.colors.background};
    padding: 8px 16px;
`;

export const Overlay = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
    background: ${({ theme }) => rgba(theme.colors.black.main, 0.3)};
`;