import React, { useState, useEffect, useContext } from 'react';

import { getAll as getPizzas } from '../../../services/pizzas.service';
import { create as createOrder } from '../../../services/orders.service';

import AppContext from '../../../AppContext';

import OrderForm from './OrderForm';
import Review from './Review';
import Feedback from './Feedback';

import {
    Container,
    Card,
} from './styles';

const Order = () => {
    const { user, selectedPizzas, setSelectedPizzas } = useContext(AppContext);

    const [pizzas, setPizzas] = useState([]);
    const [order, setOrder] = useState({});

    const [activeStep, setActiveStep] = useState('order');

    const getTotal = () => order
        .selectedPizzas
        .reduce((lastValue, { price }) => lastValue + price, 0);

    const confirmOrder = () => {
        const { address, selectedPizzas } = order;

        const pizza_ids = selectedPizzas.map(pizza => pizza.id);

        const orderToBeSaved = {
            address,
            pizza_ids,
            user_id: user.id,
            total: getTotal(),
        };
        
        createOrder(orderToBeSaved)
            .then(() => setActiveStep('feedback'));
    }

    const getCurrentStep = () => {
        switch (activeStep) {
            case 'order': return (
                <OrderForm 
                    pizzas={pizzas} 
                    user={user}
                    order={order}
                    setActiveStep={setActiveStep}
                    setOrder={setOrder} 
                />
            );
            case 'review': return (
                <Review 
                    order={order} 
                    confirmOrder={confirmOrder}
                    total={getTotal()}
                    setActiveStep={setActiveStep}
                />
            );
            case 'feedback': return (<Feedback />);
            default: return (
                <OrderForm 
                    pizzas={pizzas} 
                    user={user}
                    order={order}
                    setActiveStep={setActiveStep}
                    setOrder={setOrder} 
                />
            );
        }
    };

    useEffect(() => {
        if (selectedPizzas.length) {
            const order = {
                selectedPizzas,
            };

            setOrder(order);
            setSelectedPizzas([]);
        }
    }, [selectedPizzas, setSelectedPizzas]);

    useEffect(() => {
        if (!pizzas.length) getPizzas()
            .then((pizzas) => setPizzas(pizzas));
    }, [pizzas.length]);

    return (
        <Container>
            <Card>
                { getCurrentStep() }
            </Card>
        </Container>
    );
};

export default Order;
