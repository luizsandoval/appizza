import styled from 'styled-components';

import { rgba, ellipsis } from 'polished';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PizzaCardHeader = styled.div`
    width: 100%;
    height: 300px;
    max-width: 100%;
    background-image: url(${({ imageSource }) => imageSource});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => rgba(theme.colors.black.main, 0.5)};
`;

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.5;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;

export const PizzaCardHeaderActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    padding: 32px;
    top: 0;
    right: 0;
    width: 100%;

    div {
        ${Icon}:first-child {
            margin-right: 16px;
        }
    }
`;

export const PizzaCardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    
    h1 {
        display: block;
        font-weight: bold;
    }

    h2 {
        display: block;
        font-weight: lighter;
        color: ${({ theme }) => theme.colors.black.lighten};
        margin-top: 8px;
        ${ellipsis()};
    }

    p {
        color: ${({ theme }) => theme.colors.black.lighten};
        font-style: italic;
        font-weight: 300;
        padding: 32px 0;
    }
`;

export const Price = styled.div`
    font-size: 3em;
    font-weight: lighter;
    padding: 32px 0;

    b {
        margin-left: 8px;
    }
`;
