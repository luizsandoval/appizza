import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { create as createOrder } from '../../../services/orders.service';

import { Container, FormContainer } from './styles';

const OrderSchema = yup.object().shape({
    pizza_ids: yup.array().required(),
    address: yup.string().required(), 
});

const Order = () => {
    const [order, setOrder] = useState({});
    const [activeStep, setActiveStep] = useState('order');
    const [sameRegisterAddress, setSameRegisterAddress] = useState[true];

    const { errors, register, formState } = useForm({ mode: 'blur', validationSchema: OrderSchema });

    const handleSubmit = () => {
        createOrder(order)
            .then(() => setActiveStep('feedback'));
    };

    return (
        <Container>
            <FormContainer>
                <form onSubmit={handleSubmit} noValidate>
                </form>
            </FormContainer>
        </Container>
    )
};

export default Order;
