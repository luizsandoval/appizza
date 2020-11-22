import React from 'react';

import { Dimensions } from 'react-native';

import {
    ButtonText,
    ButtonWrapper,
    ButtonContainer,
} from './styles';

import {
    BUTTON_SIZES,
    BUTTON_POSITIONS,
} from './constants';

const FloatingActionButton = (
    { 
        children,
        title = '',
        position = 'end',
        size = 'default',
        color = 'primary',
        variation = 'main',
        disabled = false,
        ...rest 
    }
) => (
    <ButtonWrapper
        windowWidth={Dimensions.get('window').width}
    >
        <ButtonContainer
            color={color}
            disabled={disabled}
            variation={variation}
            size={BUTTON_SIZES[size]}
            position={BUTTON_POSITIONS[position]}
            {...rest}
        >
            {(
                title
                    ? (
                        <ButtonText disabled={disabled}>
                            {title}
                        </ButtonText>
                    )
                    : children
            )}
        </ButtonContainer>
    </ButtonWrapper>
);

export default FloatingActionButton;
