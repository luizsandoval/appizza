import React, 
{ 
    useState, 
    useEffect,
    useCallback, 
} from 'react';

import { connect } from 'react-redux';

import { groupBy } from 'underscore';

import dayJs from 'dayjs';

import { getOrders } from '../../../store/thunks/orders';

import {
    Text,
    Loader,
    Divider,
    Container,
} from '../../../components';

const Orders = (
    {
        orders,
        loading,
        navigation,
        onGetOrders,
    }
) => {
    const [groupedOrders, setGroupedOrders] = useState({});

    const handleOrderDetails = useCallback((id) =>{
        navigation.navigate('OrderDetails', { id });
    }, [navigation]);

    useEffect(() => {
        onGetOrders();
    }, []);

    useEffect(() => {
        const ordersGroupedByDate = groupBy(orders, order => {    
            order.created_at = dayJs(order.created_at)
                    .format('YYYY-MM-DD');
        
            const date = dayJs(order.created_at)
                .calendar(null, {
                    sameDay: '[Hoje]', 
                    lastDay: '[Ontem]', 
                    sameElse: 'dddd, DD [de] MMMM [de] YYYY',
                    lastWeek: 'dddd, DD [de] MMMM [de] YYYY'
                });
            
            return date;
        });
        
        setGroupedOrders(ordersGroupedByDate);
    }, [orders]);

    return (
        <Container>
            {
                loading
                    ? <Loader />
                    : (
                        Object.keys(groupedOrders)
                            .map(key => (
                                <>
                                    <Text>
                                        {key}
                                    </Text>

                                    <Divider />

                                    <Text>
                                        {
                                            groupedOrders[key]
                                                .map(order => (
                                                    <Text>
                                                        {order.id}
                                                    </Text>
                                                ))
                                        }
                                    </Text>
                                </>
                            ))
                    )
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
