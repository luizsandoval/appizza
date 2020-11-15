import styled from 'styled-components/native';

export const Label = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.light};
`;

export const TextInput = styled.TextInput`
    border: none;
    border-radius: 25px;
    background: ${({ theme }) => theme.colors.gray.lighten};
`;
