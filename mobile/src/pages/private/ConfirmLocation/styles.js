import styled from 'styled-components/native';
import ReactMap from 'react-native-maps';

import Container from '../../../components/Container';

export const Map = styled(ReactMap)`
    width: ${({ width }) => width}px;
    max-width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    flex: 1;
`;

export const AnimationWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const StyledContainer = styled(Container)`
    padding-top: 56px;
`;
