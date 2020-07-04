import React from 'react';

import { Link } from 'react-router-dom';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Container, FloatingActionButton, StyledIcon } from './styles';

import Menu from './Menu';
import OrdersHistory from './OrdersHistory';

const Home = () => (
    <Container>
        <Menu />
        <OrdersHistory />
        <Link to="/order">
            <FloatingActionButton>
                    <StyledIcon icon={faPlus} />
            </FloatingActionButton>
        </Link>
    </Container>
);

export default Home;
