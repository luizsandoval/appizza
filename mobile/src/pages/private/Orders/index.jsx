import React, 
{ 
    useState, 
    useEffect,
    useCallback, 
} from 'react';

import { connect } from 'react-redux';

import { groupBy } from 'underscore';

import dayJs from 'dayjs';

import styled from 'styled-components/native';

import { getOrders } from '../../../store/thunks/orders';

import {
    Text,
    Loader,
    Divider,
    Container,
} from '../../../components';

import OrdersList from './OrdersList';

const StyledText = styled(Text)`
    margin-top: ${({ isFirst }) => isFirst ? '0' : '32px'};
`;

const Orders = (
    {
        orders,
        loading,
        navigation,
        onGetOrders,
    }
) => {
    const [groupedOrders, setGroupedOrders] = useState({});
    const [groupedOrdersGroups, setGroupedOrdersGroups] = useState([]);

    const handleOrderDetails = useCallback(({ id }) => {
        navigation.navigate('OrderDetails', { id });
    }, [navigation]);

    const isFirstItem = useCallback((index) => index === 0, [groupedOrdersGroups]);

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
        setGroupedOrdersGroups(Object.keys(ordersGroupedByDate));
    }, [orders]);

    return (
        <Container>
            {
                loading
                    ? <Loader />
                    : (
                        groupedOrdersGroups
                            .map((group, index) => (
                                <>
                                    <StyledText
                                        key={group}
                                        isFirst={isFirstItem(index)}
                                    >
                                        {group}
                                    </StyledText>

                                    <Divider />

                                    <OrdersList 
                                        orders={groupedOrders[group]}
                                        onOrderPressed={handleOrderDetails}
                                    />

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
