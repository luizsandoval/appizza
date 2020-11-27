import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    padding: 24px;
    text-align: center;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    background: ${({ theme, disabled }) => (
        !disabled 
            ? (theme.colors.primary.main)
            : (theme.colors.primary.lightest)
    )};
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    align-self: center;
    color: ${({ theme, disabled }) => (
        !disabled
            ? (theme.colors.white)
            : (theme.text.lightest)
    )};
`;
