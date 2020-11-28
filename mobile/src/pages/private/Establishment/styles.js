import styled, { css } from 'styled-components/native';

export const Header = styled.View`
    margin: 16px 0;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
`;

export const TabsContainer = styled.View`
    margin: 16px 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const TabWrapper = styled.TouchableOpacity`
    margin: 0 32px;
    align-items: center;
    justify-content: center;
    
    ${({ theme, active }) => (
        active
            ? (
                css`
                    border-bottom-width: 1px;
                    border-bottom-color: ${theme.colors.secondary.main};
                `
            )
            : ''
    )};
`;

export const TabText = styled.Text`
    color: ${({ theme, active }) => (
        active
            ? (theme.colors.secondary.main)
            : (theme.colors.black.lighten)
    )};
    font-weight: ${({ active }) => (
        active
            ? ('bold')
            : ('normal')
    )};
    font-size: 16px;
    letter-spacing: 0.5px;
    padding-bottom: 12px;
`;
