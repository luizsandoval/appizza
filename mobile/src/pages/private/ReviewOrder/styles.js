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
    background: ${({ theme }) => theme.colors.gray.custom(0.5)};
    flex-direction: row;
`;

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
    flex: 2;
`;

export const ItemQuantity = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
`;

export const QuantityLabel = styled.Text`
    margin: 4px 16px;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;

export const QuantityButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.black.custom(0.2)};
`;

export const Divider = styled.View`
    height: 1px;
    width: 100%;
    margin-bottom: 8px;
    background: ${({ theme }) => theme.colors.black.lightest};
`;
