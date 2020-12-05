import React from 'react';

import { Text } from 'react-native';

import FormatNumber from 'react-number-format';

const FormatCurrency = ({ value }) => (
    <FormatNumber 
        prefix={'R$ '}
        value={Number(value)}
        decimalSeparator=','
        displayType="text"
        thousandSeparator='.'
        fixedDecimalScale
        decimalScale={2}
        renderText={formattedValue => (
            <Text>
                {formattedValue}
            </Text>
        )}
    />
);

export default FormatCurrency;
