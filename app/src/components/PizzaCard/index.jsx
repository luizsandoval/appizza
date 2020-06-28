import React from 'react';

import formatCurrency from '../../utils/formatCurrency';

import { CardContainer, CardContent, CardImage, CardActions, CardButton } from './styles';

const PizzaCard = ({ imageSource, name, ingredients, price }) => {

    return (
        <CardContainer>
            <CardImage imageSource={imageSource} />
            <CardContent>
                <h2>{name}</h2>
                <small>{ingredients}</small>
                <label>
                    R$: <b>{formatCurrency(price)}</b>
                </label>
            </CardContent>
            <CardActions>
                <CardButton>
                    Pedir
                </CardButton>
                <CardButton>
                    Detalhes
                </CardButton>
            </CardActions>
        </CardContainer>
    )
};

export default PizzaCard;
