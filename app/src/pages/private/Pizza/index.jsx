import React, { useState, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { create as createPizza, remove as removePizza, update as updatePizza } from '../../../services/pizzas.service';

import AppContext from '../../../AppContext';

import Details from './Details';
import Keep from './Keep';
import ConfirmDelete from './ConfirmDelete';

import {
    Overlay,
    Container,
    PizzaCard,
} from './styles';

const Pizza = () => {
    const { expandedPizza: pizza, openedComponent, setOpenedComponent, setExpandedPizza, setSelectedPizzas } = useContext(AppContext);
    const history = useHistory();

    const [activeComponent, setActiveComponent] = useState(openedComponent || 'details');
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);

    const handleClose = () => {
        setExpandedPizza({});
        setOpenedComponent('');
    };

    const handleDelete = () => removePizza(pizza.id)
        .then(handleClose);

    const handleKeep = (pizza) => (pizza.id 
            ? updatePizza(pizza)
            : createPizza(pizza)
        )
        .then((insertedPizza) => {
            setExpandedPizza(insertedPizza);
            handleChangeActiveComponent('details');
        });

    const handleOrderPizza = (e, pizza) => {
        handleDefaultEvents(e);
        handleClose();

        setSelectedPizzas([pizza]);
        history.push('/order');
    };

    const handleChangeActiveComponent = (component, event) => {
        if(event) handleDefaultEvents(event);
        setActiveComponent(component);
    };

    const handleConfirmDelete = (e) => {
        handleDefaultEvents(e);
        
        setShowConfirmDelete(!showConfirmDelete);
    };
    
    const handleDefaultEvents = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    
    return (
        <>
            <Overlay onClick={() => setExpandedPizza({})} />
            {
                showConfirmDelete 
                && 
                <ConfirmDelete 
                    handleDelete={handleDelete}
                    hideConfirmDelete={handleConfirmDelete}
                />
            }
            <Container>
                <PizzaCard>
                    {
                        activeComponent === 'details'
                            ? (
                                <Details 
                                    pizza={pizza}
                                    handleClose={handleClose}
                                    handleDelete={handleConfirmDelete}
                                    handleOrderPizza={handleOrderPizza}
                                    handleChangeActiveComponent={(component, event) => handleChangeActiveComponent(component, event)}
                                />
                            )
                            : (
                                <Keep
                                    pizza={pizza}
                                    setActiveComponent={setActiveComponent}
                                    handleKeep={handleKeep}
                                    handleClose={handleClose}
                                />
                            )
                    }
                </PizzaCard>
            </Container>
        </>
    );
};

export default Pizza;
