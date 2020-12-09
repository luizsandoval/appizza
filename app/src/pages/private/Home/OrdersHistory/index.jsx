import React, { useState, useEffect, Fragment } from 'react';

import { groupBy } from 'underscore';

import dayJs from 'dayjs';

import 'dayjs/locale/pt-br';

import calendar from 'dayjs/plugin/calendar';

import { faReceipt, faUserAlt } from '@fortawesome/free-solid-svg-icons';

import { getAll } from '../../../../services/orders.service';

import formatCurrency from '../../../../utils/formatCurrency';

import Divider from '../../../../components/Divider';

import NoOrdersSVG from '../../../../assets/no-orders.svg';

import {
    SectionHeader,
    StyledIcon,
    NoOrdersContainer,
    NoOrdersImageWrapper,
    NoOrdersImage,
    OrdersContainer,
    OrderDate,
    OrdersList,
    Order,
    OrderHeader,
    OrderContent,
    OrderItem,
    OrderTotal,
    StackedText,
} from './styles';

dayJs
    .extend(calendar);

dayJs
    .locale('pt-br');

const OrdersHistory = () => {
    const [orders, setOrders] = useState({});
    const [ordersDates, setOrdersDates] = useState([]);

    useEffect(() => {
        getAll()
            .then(handleOrders);
    }, []);

    const handleOrders = (orders) => {
        const ordersGroupedByDate = groupBy(orders, (order) => {
            console.log(order.created_at);
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

        const dates = Object.keys(ordersGroupedByDate);

        setOrdersDates(dates);
        setOrders(ordersGroupedByDate);
    };

    return (
        <>
            <SectionHeader>
                <StyledIcon icon={faReceipt} size='2x' />
                <h1 id="history">Histórico de pedidos</h1>
            </SectionHeader>
            {!Object.keys(orders).length ? (
                <NoOrdersContainer>
                    <h2>Ops, nada por aqui...</h2>
                    <NoOrdersImageWrapper>
                        <NoOrdersImage
                            src={NoOrdersSVG}
                            alt='Não há histórico de pedidos'
                        />
                    </NoOrdersImageWrapper>
                    <p>
                        Não há pedidos cadastrados
                    </p>
                </NoOrdersContainer>
            ) : (
                <OrdersContainer>
                    {
                        ordersDates
                            .map(
                                orderDate => (
                                    <Fragment key={orderDate}>
                                        <OrderDate>
                                            <h2>{orderDate}</h2>
                                        </OrderDate>
                                        <OrdersList>
                                            {
                                                orders[orderDate]
                                                    .map(order => (
                                                        <Order key={order.id}>
                                                            <OrderHeader>
                                                                <div>
                                                                    <StyledIcon icon={faUserAlt} />
                                                                    <StackedText>
                                                                        <h4>{`${order.first_name} ${order.last_name}`}</h4>
                                                                    </StackedText>
                                                                </div>
                                                                <label>
                                                                    #{order.id}
                                                                </label>
                                                            </OrderHeader>
                                                            <Divider />
                                                            <OrderContent>
                                                                <h3>Pizzas</h3>
                                                                {
                                                                    order
                                                                        .pizzas
                                                                        .map(pizza => (
                                                                            <OrderItem key={pizza.id}>
                                                                                <StackedText>
                                                                                    <strong>
                                                                                        {pizza.name}
                                                                                    </strong>
                                                                                    <small>
                                                                                        {pizza.ingredients}
                                                                                    </small>
                                                                                </StackedText>
                                                                                <span>
                                                                                    <span>
                                                                                        R$
                                                                                    </span>
                                                                                    &nbsp;
                                                                                    <b>
                                                                                        {formatCurrency(pizza.price)}
                                                                                    </b>
                                                                                </span>
                                                                            </OrderItem>
                                                                        ))
                                                                }
                                                            </OrderContent>
                                                            <Divider />
                                                            <OrderTotal>
                                                                <b>
                                                                    Total
                                                                </b>
                                                                <span>
                                                                    <span>
                                                                        R$
                                                                    </span>
                                                                    &nbsp;
                                                                    <b>
                                                                        {formatCurrency(order.total)}
                                                                    </b>
                                                                </span>
                                                            </OrderTotal>
                                                        </Order>
                                                    ))
                                            }
                                        </OrdersList>
                                    </Fragment>
                                )
                            )
                    }
                </OrdersContainer>
            )}
        </>
    );
};

export default OrdersHistory;
