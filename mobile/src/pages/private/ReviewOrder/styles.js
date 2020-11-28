import styled from 'styled-components/native';

import Title from '../../../components/Title';

export const StyledTitle = styled(Title)`
    font-size: 24px;
    line-height: 32px;
`;

export const ItemsContainer = styled.View`
    flex: 1;
    margin: 32px 0;
    justify-content: flex-start;
    align-items: stretch;
`;

export const ItemCard = styled.View`
    padding: 24px;
    margin: 16px 0;
    border-radius: 25px;
    background: ${({ theme }) => theme.colors.gray.custom(0.3)};
    flex-direction: row;
`;

export const ItemTitle = styled.View``;

export const ItemName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 2px;
    color: ${({ theme }) => theme.colors.black.main};
`;

export const ItemIngredients = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.black.lighten};
`;

export const ItemDetails = styled.View`
    align-items: flex-start;
    justify-content: space-between;
    flex: 1;
`;
