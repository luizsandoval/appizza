import styled from 'styled-components/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const Label = styled.Text`
    font-size: 16px;
    margin: 16px 0;
    color: ${({ theme }) => theme.colors.black.lighten};
`;

export const Container = styled.View`
    flex-direction: column;
    margin: 16px 0;
`;

export const Card = styled.TouchableOpacity`
    position: relative;
    flex: 1;
    max-width: auto;
    max-height: auto;
    width: 200px;
    height: 200px;
    border-radius: 25px;
    margin-right: 32px;
    elevation: 8;
`;

export const CardImage = styled.ImageBackground`
    flex: 2;
`;

export const CardDetails = styled.View`
    flex: 1;
    padding: 16px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: auto;
    background: ${({ theme }) => theme.colors.white};
`;

export const CardTitle = styled.Text`
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.black.light};
`;

export const CardFooter = styled.View`
    flex-direction: row;
`;

export const Text = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.black.lighten};
`;

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.black.lighten};
`;
