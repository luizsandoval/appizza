import React, { useEffect } from 'react';

import { Text } from 'react-native';

import { connect } from 'react-redux';

import { getOrders } from '../../../store/thunks/orders';

import {
    Loader,
    Container
} from '../../../components';

const Orders = (
    {
        orders,
        loading,
        onGetOrders,
    }
) => {
    useEffect(() => {
        onGetOrders();
    }, []);

    return (
        <Container>
            {
                loading
                    ? <Loader />
                    : (orders.map(order => <Text key={String(order.id)}>{order.id}</Text>))
            }
        </Container>
    );
};

const mapStateToProps = ({ orders: { orders, loading }}) => (
    {
        orders,
        loading,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onGetOrders: () => dispatch(getOrders()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
