import React, { useState, useEffect } from 'react';

import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import PizzaCard from '../../../../components/PizzaCard';

import { getAll } from '../../../../services/pizzas.service'; 

import { SectionHeader, StyledIcon, PizzasContainer } from './styles';

const Menu = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        getAll()
            .then((pizzas) => setPizzas(pizzas));
    }, []);

    return (
        <>
            <SectionHeader>
                <StyledIcon icon={faUtensils} size="2x" />
                <h1>Cardápio</h1>
            </SectionHeader>
            <PizzasContainer>
                {
                    pizzas.map(
                        pizza => (
                            <PizzaCard
                                key={pizza.id}
                                name={pizza.name}
                                imageSource={pizza.image}
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
