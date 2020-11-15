import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    padding: 16px;
    text-align: center;
    border-radius: 50px;
    border: 2px solid ${({ theme }) => theme.colors.secondary.main};
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    align-self: center;
    color: ${({ theme }) => theme.colors.secondary.main};
`;
