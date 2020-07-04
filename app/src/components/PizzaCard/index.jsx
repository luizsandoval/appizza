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
    const { setSelectedPizzas } = useContext(AppContext);
    const history = useHistory();

    const handleOrderPizza = (pizza) => {
        setSelectedPizzas([pizza]);
        history.push('/order');
    };

    return (
        <CardContainer 
            onClick={() => (selectable 
                ? onSelect()
                : null
            )}
        >
            <CardImage imageSource={pizza.image}>
                {selectable ? (
                    <Checkbox
                        name={name}
                        checked={checked}
                        align="flex-end"
                        onChange={onSelect}
                    />
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
                        onClick={() => handleOrderPizza(pizza)}
                    >
                        Pedir
                    </CardButton>
                    <CardButton>Detalhes</CardButton>
                </CardActions>
            ) : null}
        </CardContainer>
    );
};

export default PizzaCard;
