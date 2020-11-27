import React from 'react';

import styled from 'styled-components/native';

const Text = styled.Text`
    font-size: 24px;
    font-weight: normal;
    color: ${({ theme }) => theme.text.custom(0.4)};
`;

const SubTitle = ({ children, ...rest }) => (
    <Text {...rest}>
        {children}
    </Text>    
);

export default SubTitle;
