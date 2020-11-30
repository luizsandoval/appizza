import styled, { css } from 'styled-components/native';

const CARD_RADIUS = '15px';

export const Card = styled.View`
    margin: 16px 0;
    flex-direction: row;
    border-radius: ${CARD_RADIUS};
    ${({ theme, isPizzaSelected }) => (
        isPizzaSelected 
            ? css`
                border: 1px solid ${theme.colors.secondary.main};
                background: ${theme.colors.secondary.custom(0.05)};
            `
            : css`
                background: ${theme.colors.gray.custom(0.5)};
            `
    )};
`;

export const Name = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 2px;
    color: ${({ theme }) => theme.colors.black.main};
`;

export const Ingredients = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.black.lighten};
`;

export const Details = styled.View`
    flex: 1.5;
    padding: 24px;
    align-self: flex-start;
    justify-content: space-between;
`;

export const Image = styled.Image`
    flex: 1;
    border-top-right-radius: ${CARD_RADIUS};
    border-bottom-right-radius: ${CARD_RADIUS};
`;
