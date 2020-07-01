import React from 'react';

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
    imageSource,
    name,
    id,
    pizzaName,
    ingredients,
    price,
    showActions = true,
    selectable = false,
    zoomOnHover = false,
    onSelect,
    checked,
}) => {
    return (
        <CardContainer 
            onClick={() => onSelect()}
            zoomOnHover={zoomOnHover}
        >
            <CardImage imageSource={imageSource}>
                {selectable ? (
                    <Checkbox
                        name={name}
                        value={id}
                        checked={checked}
                        align="flex-end"
                        onChange={onSelect}
                    />
                ) : null}
            </CardImage>
            <CardContent>
                <h2>{pizzaName}</h2>
                <small>{ingredients}</small>
                <label>
                    R$: <b>{formatCurrency(price)}</b>
                </label>
            </CardContent>
            {showActions ? (
                <CardActions>
                    <CardButton>Pedir</CardButton>
                    <CardButton>Detalhes</CardButton>
                </CardActions>
            ) : null}
        </CardContainer>
    );
};

export default PizzaCard;
