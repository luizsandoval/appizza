import styled from 'styled-components/native';

import ReactMap from 'react-native-maps';

import SecondaryButton from '../../../../components/SecondaryButton';

const DEFAULT_HORIZONTAL_MARGIN = '32px';

export const Label = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black.lighten};
    margin: 16px ${DEFAULT_HORIZONTAL_MARGIN} 8px;
`;

export const Text = styled.Text`
    font-size: 16px;
    font-weight: 200;
    margin: 0 ${DEFAULT_HORIZONTAL_MARGIN};
    color: ${({ theme }) => theme.colors.black.lighten};
`;

export const Map = styled(ReactMap)`
    margin: ${DEFAULT_HORIZONTAL_MARGIN} 0;
    width: ${({ screenWidth }) => screenWidth}px;
    height: ${({ screenHeight }) => screenHeight / 3}px;
`;

export const StyledSecondaryButton = styled(SecondaryButton)`
    margin: 16px 32px;
`;
