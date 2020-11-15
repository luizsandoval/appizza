import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    padding: 16px;
    text-align: center;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.primary.main};
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    align-self: center;
    color: ${({ theme }) => theme.colors.white};
`;
