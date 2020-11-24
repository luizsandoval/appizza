import styled from 'styled-components/native';

export const Label = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black.lighten};
`;

export const Container = styled.View`
    flex-direction: row;
    margin: 32px 0;
`;

export const Card = styled.TouchableOpacity`
    position: relative;
    flex: 1;
    height: 200px;
    width: 200px;
    border-radius: 5px;
    margin-right: 32px;
    elevation: 16;
`;

export const CardImage = styled.ImageBackground`
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    width: 100%;
    height: 100%;
`;

export const CardDetails = styled.View`
    position: absolute;
    z-index: 2;
    padding: 16px;
    left: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    bottom: 0;
    width: 100%;
    height: auto;
    background: ${({ theme }) => theme.colors.white};
`;

export const CardTitle = styled.Text`
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.black.light};
`;

export const CardSubTitle = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.black.lighten};
`;
