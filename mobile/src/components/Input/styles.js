import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 16px 0;
`;

export const Label = styled.Text`
    font-size: 16px;
    margin-bottom: 8px;
    color: ${({ theme, invalid }) => (        
        !invalid
            ? (theme.text.custom(0.4))
            : (theme.colors.primary.lighten)
    )};
`;

export const TextInput = styled.TextInput`
    border: none;
    padding: 16px;
    font-size: 16px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.gray.lighten};
    border: ${({ theme, invalid }) => (
        !invalid
            ? ('none')
            : (`1px solid ${theme.colors.primary.main}`)
    )};
`;
