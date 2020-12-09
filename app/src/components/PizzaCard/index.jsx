import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import AppContext from '../../AppContext';

import formatCurrency from '../../utils/formatCurrency';

import Checkbox from '../../components/Checkbox';

import {
    CardContainer,
    CardContent,
    CardImage,
    CardActions,
    Overlay,
    CardButton,
} from './styles';

const PizzaCard = ({
    pizza,
    name,
    onSelect,
    checked,
    showActions = true,
    selectable = false,
}) => {
    const { setExpandedPizza } = useContext(AppContext);

    const handlePizzaDetails = (pizza) => setExpandedPizza(pizza);

    return (
        <CardContainer 
            onClick={() => (selectable 
                ? onSelect()
                : null
            )}
        >
            <CardImage imageSource={pizza.image}>
                {selectable ? (
                    <>
                        <Overlay />
                        <Checkbox
                            name={name}
                            id={pizza.id}
                            checked={checked}
                            margin="16px"
                            onChange={onSelect}
                        />
                    </>
                ) : null}
            </CardImage>
            <CardContent>
                <h2>{pizza.name}</h2>
                <small>{pizza.ingredients}</small>
                <label>
                    R$: <b>{formatCurrency(pizza.price)}</b>
                </label>
            </CardContent>
            {showActions ? (
                <CardActions>
                    <CardButton
                        onClick={() => handlePizzaDetails(pizza)}
                    >
                        Detalhes
                    </CardButton>
                </CardActions>
            ) : null}
        </CardContainer>
    );
};

export default PizzaCard;
