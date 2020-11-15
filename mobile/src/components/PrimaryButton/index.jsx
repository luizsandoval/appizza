import React from 'react';

import { ButtonContainer, ButtonText } from './styles';

const PrimaryButton = ({ title, onPress, ...rest }) => (
    <ButtonContainer 
        onPress={onPress} 
        {...rest}
    >
        <ButtonText>
            {title}
        </ButtonText>
    </ButtonContainer>
);

export default PrimaryButton;
