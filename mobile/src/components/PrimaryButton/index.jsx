import React from 'react';

import { ActivityIndicator } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';

const PrimaryButton = ({ 
    title, 
    onPress, 
    disabled = false, 
    isLoading = false, 
    ...rest 
}) => (
    <ButtonContainer 
        onPress={onPress}
        disabled={disabled}
        {...rest}
    >
        {
            isLoading
                ? (
                    <ActivityIndicator 
                        size="small"
                        color="#FFF"
                    />
                )
                : (
                    <ButtonText
                        disabled={disabled}
                    >
                        {title}
                    </ButtonText>
                )
        }
    </ButtonContainer>
);

export default PrimaryButton;
