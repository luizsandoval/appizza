import React from 'react';

import {
    Spinner,
    Container,
} from './styles';

const Loader = (size = 'small') => (
    <Container>
        <Spinner size={size} />
    </Container>
);

export default Loader;