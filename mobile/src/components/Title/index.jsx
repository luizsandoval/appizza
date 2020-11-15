import React from 'react';

import styled from 'styled-components/native';

const Text = styled.Text`
    font-size: 36px;
    font-weight: bold;
    line-height: 42px;
    color: ${({ theme }) => theme.text.custom(0.6)};
`;

const Title = ({ children, ...rest }) => (
    <Text {...rest}>
        {children}
    </Text>    
);

export default Title;
