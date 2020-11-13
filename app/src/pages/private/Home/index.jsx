import React, { useContext } from 'react';

import AppContext from '../../../AppContext';

import { Container, FloatingActionButton, StyledIcon } from './styles';

import Menu from './Menu';
import Pizza from '../Pizza';
import OrdersHistory from './OrdersHistory';

const Home = () => {
    const { expandedPizza, openedComponent } = useContext(AppContext);

    return (
        <>
            {(!!(Object.keys(expandedPizza).length || openedComponent)) && <Pizza />}                    
            <Container>
                <Menu />
                <OrdersHistory />
            </Container>
        </>
    )
};

export default Home;
