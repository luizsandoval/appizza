import styled from 'styled-components/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const ButtonContainer = styled.TouchableOpacity`
    top: 0;
    left: 0;
    position: absolute;

    width: 50px;
    height: 50px;

    margin: 24px 32px;
    border-radius: 50px;
`;

export const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.black.lighten};
`;
