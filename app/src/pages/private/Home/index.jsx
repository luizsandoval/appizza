import React from 'react';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Container, FloatingActionButton, StyledIcon } from './styles';

import Menu from './Menu';
import OrdersHistory from './OrdersHistory';

const Home = () => (
    <Container>
        <Menu />
        <OrdersHistory />
        <FloatingActionButton>
            <StyledIcon icon={faPlus} />
        </FloatingActionButton>
    </Container>
);

export default Home;
