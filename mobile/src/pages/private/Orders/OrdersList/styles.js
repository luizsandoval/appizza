import styled from 'styled-components/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const Card = styled.View`
    margin: 8px 0;
    padding: 16px;
    flex: 1;
    flex-direction: row;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.gray.custom(0.5)};
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 2px;
    color: ${({ theme }) => theme.colors.black.main};
`;

export const Column = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const SubTitle = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.black.lighten};
`;

export const Icon = styled(FontAwesomeIcon)`
    align-self: flex-end;
    color: ${({ theme }) => theme.colors.black.lighten};
`;

export const Badge = styled.View`
    border-radius: 25px;
    padding: 4px;
    align-items: center;
    justify-content: center;
    background: ${({ theme, isFinished }) => (
        isFinished 
            ? theme.colors.success.main
            : theme.colors.primary.main
    )};
`;

export const BadgeText = styled.Text`
    font-size: 12px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
`;
