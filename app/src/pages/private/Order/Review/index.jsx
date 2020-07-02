import React from 'react';

import formatCurrency from '../../../../utils/formatCurrency';

import PrimaryButton from '../../../../components/PrimaryButton';
import SecondaryButton from '../../../../components/SecondaryButton';
import DividerWithText from '../../../../components/DividerWithText';

import { Container, PizzaDetails, PizzaItem, Divider, TotalContainer } from './styles';

const Review = ({ order, total, setActiveStep, confirmOrder }) => {

    return (
        <>
            <h2>Revisão de pedido</h2>
            <Container>
                <h3>Pizzas</h3>
                {order
                    .selectedPizzas
                    .map((pizza) => (
                        <PizzaItem key={pizza.id}>
                            <PizzaDetails>
                                <strong>
                                    {pizza.name}
                                </strong>
                                <small>
                                    {pizza.ingredients}
                                </small>
                            </PizzaDetails>
                            <span>
                                R$ 
                                <b>
                                    {formatCurrency(pizza.price)}
                                </b>
                            </span>
                        </PizzaItem>
                    ))
                }
                <Divider />
                <TotalContainer>
                    <strong>
                        Total
                    </strong>
                    <span>
                        R$ 
                        <b>
                            {formatCurrency(total)}
                        </b>
                    </span>
                </TotalContainer>
                <h3>Entrega</h3>
                <label>{order.address}</label>
            </Container>
            <PrimaryButton
                onClick={() => confirmOrder()}
            >
                Confirmar pedido
            </PrimaryButton>

            <DividerWithText text="ou" />

            <SecondaryButton 
                type="button"
                onClick={() => setActiveStep('order')}
            >
                Alterar dados
            </SecondaryButton>
        </>
    )
};

export default Review;
