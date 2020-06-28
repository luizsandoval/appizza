import React from 'react';

import SpinnerSVG from '../../assets/spinner.svg';

import Container from './styles';

const Spinner = () => (
    <Container>
        <img src={SpinnerSVG} alt="Spinner" />
    </Container>
);

export default Spinner;
