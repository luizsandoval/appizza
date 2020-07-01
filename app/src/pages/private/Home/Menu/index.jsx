import React, { useState, useEffect } from 'react';

import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import PizzaCard from '../../../../components/PizzaCard';
import SecondaryButton from '../../../../components/SecondaryButton';

import { getAll } from '../../../../services/pizzas.service'; 

import { SectionHeader, StyledIcon, PizzasContainer, TitleWrapper } from './styles';

const Menu = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        getAll()
            .then((pizzas) => setPizzas(pizzas));
    }, []);

    return (
        <>
            <SectionHeader>
                <TitleWrapper>
                    <StyledIcon icon={faUtensils} size="2x" />
                    <h1>Cardápio</h1>
                </TitleWrapper>
                <SecondaryButton
                    fullWidth={false}
                >
                    Adicionar Pizza
                </SecondaryButton>
            </SectionHeader>
            <PizzasContainer>
                {
                    pizzas.map(
                        pizza => (
                            <PizzaCard
                                key={pizza.id}
                                pizzaName={pizza.name}
                                imageSource={pizza.image}
                                zoomOnHover
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                            />

                        )
                    )
                }
            </PizzasContainer>
        </>
    )
};

export default Menu;
