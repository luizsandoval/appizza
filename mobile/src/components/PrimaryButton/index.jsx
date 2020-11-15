import React from 'react';

import { ButtonContainer, ButtonText } from './styles';

const PrimaryButton = ({ title, onPress, disabled = false, ...rest }) => (
    <ButtonContainer 
        onPress={onPress}
        disabled={disabled}
        {...rest}
    >
        <ButtonText
            disabled={disabled}
        >
            {title}
        </ButtonText>
    </ButtonContainer>
);

export default PrimaryButton;
