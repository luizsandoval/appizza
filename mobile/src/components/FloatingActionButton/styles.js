import styled from 'styled-components/native';

export const ButtonWrapper = styled.View`
    width: ${({ windowWidth }) => windowWidth}px; 
    position: absolute;
    align-items: center; 
    justify-content: center; 
    padding: 32px; 
    left: 0;
    right: 0;
    bottom: 0;
`;

export const ButtonContainer = styled.TouchableOpacity`

    ${({ position }) => position}

    width: ${({ size }) => size};
    padding: 24px;

    background: ${({ theme, color, variation }) => theme.colors[color][variation]};

    border-radius: ${({ size }) => size === '100%' ? '25px' : '50px'};

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
    width: auto;
    align-self: center;
    color: ${({ theme, disabled }) => (
        !disabled
            ? (theme.colors.white)
            : (theme.text.lightest)
    )};
`;
