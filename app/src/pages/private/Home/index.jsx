import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
                <Link to="/order">
                    <FloatingActionButton>
                            <StyledIcon icon={faPlus} />
                    </FloatingActionButton>
                </Link>
            </Container>
        </>
    )
};

export default Home;
