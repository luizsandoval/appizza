import React from 'react';

import { Text } from 'react-native';

import FormatNumber from 'react-number-format';

const FormatCurrency = ({ value }) => (
    <FormatNumber 
        prefix={'R$ '}
        value={value}
        displayType="text"
        thousandSeparator
        renderText={formattedValue => (
            <Text>
                {formattedValue}
            </Text>
        )}
    />
);

export default FormatCurrency;
