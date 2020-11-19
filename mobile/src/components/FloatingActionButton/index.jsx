import React from 'react';

import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
    right: 0;
    bottom: 0;
    position: absolute;

    width: 50px;
    height: 50px;

    background: ${({ theme, color, variation }) => theme.colors[color][variation]};

    margin: 16px;
    border-radius: 50px;

    align-items: center;
    justify-content: center;
`;

const FloatingActionButton = (
    { 
        children, 
        size = 'default', 
        color = 'primary', 
        variation = 'main',
        ...rest 
    }
) => (
    <ButtonContainer
        size={size}
        color={color}
        variation={variation}
        {...rest}
    >
        {children}
    </ButtonContainer>
);

export default FloatingActionButton;
