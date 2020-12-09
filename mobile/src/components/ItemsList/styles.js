import styled from 'styled-components/native';

export const ItemCard = styled.View`
    padding: 24px;
    margin: 16px 0;
    flex-direction: row;
    border-radius: 25px;
    background: ${({ theme }) => theme.colors.gray.custom(0.5)};
`;

export const ItemName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 2px;
    color: ${({ theme }) => theme.colors.black.main};
`;

export const ItemIngredients = styled.Text`
    font-size: 12px;
    margin-bottom: 16px;
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
