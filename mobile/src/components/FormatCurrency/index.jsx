import React from 'react';

import styled from 'styled-components/native';

import FormatNumber from 'react-number-format';

const Text = styled.Text`
    margin-top: 16px;
`;

const FormatCurrency = ({ value }) => (
    <FormatNumber 
        prefix={'R$ '}
        value={value}
        displayType="text"
        thousandSeparator
        renderText={formattedValue => <Text>{formattedValue}</Text>}
    />
);

export default FormatCurrency;
