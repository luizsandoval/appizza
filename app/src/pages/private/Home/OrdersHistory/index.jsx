import React, { useState, useEffect } from 'react';

import { faReceipt } from '@fortawesome/free-solid-svg-icons';

import NoOrdersSVG from '../../../../assets/no-orders.svg';

import {
    SectionHeader,
    StyledIcon,
    NoOrdersContainer,
    NoOrdersImageWrapper,
    NoOrdersImage,
    OrdersContainer,
} from './styles';

const OrdersHistory = () => {
    const [orders, setOrders] = useState([]);

    return (
        <>
            <SectionHeader>
                <StyledIcon icon={faReceipt} size='2x' />
                <h1>Histórico de pedidos</h1>
            </SectionHeader>
            {!orders.length ? (
                <NoOrdersContainer>
                    <NoOrdersImageWrapper>
                        <NoOrdersImage
                            src={NoOrdersSVG}
                            alt='Não há histórico de pedidos'
                        />
                    </NoOrdersImageWrapper>
                </NoOrdersContainer>
            ) : (
                <OrdersContainer>Pedidos vão aqui...</OrdersContainer>
            )}
        </>
    );
};

export default OrdersHistory;
