import React, { useState, useEffect, useContext } from 'react';

import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import PizzaCard from '../../../../components/PizzaCard';
import SecondaryButton from '../../../../components/SecondaryButton';

import { getAll } from '../../../../services/pizzas.service'; 

import AppContext from '../../../../AppContext';

import { SectionHeader, StyledIcon, PizzasContainer, TitleWrapper } from './styles';

const Menu = () => {
    const { expandedPizza, setOpenedComponent } = useContext(AppContext);

    const [pizzas, setPizzas] = useState([]);

    const handleAddPizza = () => setOpenedComponent('keep');

    useEffect(() => {
        getAll()
            .then((pizzas) => setPizzas(pizzas));
    }, []);

    useEffect(() => {
        getAll()
            .then((pizzas) => setPizzas(pizzas));
    }, [expandedPizza]);

    return (
        <>
            <SectionHeader>
                <TitleWrapper>
                    <StyledIcon icon={faUtensils} size="2x" />
                    <h1 id="menu">Cardápio</h1>
                </TitleWrapper>
                <SecondaryButton
                    fullWidth={false}
                    onClick={() => handleAddPizza()}
                >
                    Adicionar Pizza
                </SecondaryButton>
            </SectionHeader>
            <PizzasContainer>
                {
                    pizzas.length
                        ? (
                            pizzas.map(
                                pizza => (
                                    <PizzaCard
                                        key={pizza.id}
                                        pizza={pizza}
                                    />
        
                                )
                            )
                        )
                        : (
                            <p>
                                Seu cardápio está vazio
                            </p>
                        )
                }
            </PizzasContainer>
        </>
    )
};

export default Menu;
