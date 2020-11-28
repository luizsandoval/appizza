import React from 'react';

import FormatNumber from 'react-native-number';

const FormatCurrency = ({ value, renderText: RenderText }) => (
    <FormatNumber 
        prefix={'R$'}
        value={value}
        displayType="text"
        thousandSeparator
        renderText={formattedValue => <RenderText>{formattedValue}</RenderText>}
    />
);

export default FormatCurrency;
