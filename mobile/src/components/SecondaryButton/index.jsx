import React from 'react';

import { ButtonContainer, ButtonText } from './styles';

const SecondaryButton = (
    { 
        title, 
        onPress, 
        customColor,
        children,
        icon: Icon,
        ...rest 
    }
) => (
    <ButtonContainer
        onPress={onPress}
        activeOpacity={0.1}
        customColor={customColor}
        {...rest}
    >
        <ButtonText customColor={customColor}>
            {title}
        </ButtonText>
        {
            Icon 
                ? <Icon />
                : null
        }
    </ButtonContainer>
);

export default SecondaryButton;
