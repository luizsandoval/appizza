import React from 'react';

import { ButtonContainer, ButtonText } from './styles';

const SecondaryButton = ({ title, onPress, ...rest }) => (
    <ButtonContainer
        activeOpacity={0.1}
        onPress={onPress} 
        {...rest}
    >
        <ButtonText>
            {title}
        </ButtonText>
    </ButtonContainer>
);

export default SecondaryButton;
