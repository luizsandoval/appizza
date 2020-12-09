import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    padding: 24px;
    text-align: center;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border: 2px solid ${({ theme, customColor }) => customColor || theme.colors.secondary.main};
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-right: 8px;
    align-self: center;
    color: ${({ theme, customColor }) => customColor || theme.colors.secondary.main};
`;
