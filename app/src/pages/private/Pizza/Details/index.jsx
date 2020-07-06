import React from 'react';

import { faTimes, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import PrimaryButton from '../../../../components/PrimaryButton';

import formatCurrency from '../../../../utils/formatCurrency';

import {
    PizzaCardHeader,
    Overlay,
    PizzaCardHeaderActions,
    Icon,
    PizzaCardContent,
    Price,
} from './styles';

const Details = ({ handleChangeActiveComponent, handleClose, handleDelete, handleOrderPizza, pizza }) => (
    <>
        <PizzaCardHeader
            imageSource={pizza.image}
        >
            <Overlay />
            <PizzaCardHeaderActions>
                <Icon 
                    onClick={() => handleClose()}
                    icon={faTimes} 
                    size="2x"
                />
                <div>
                    <Icon 
                        onClick={(e) => handleChangeActiveComponent('keep', e)}
                        icon={faEdit}
                        size="2x"
                    />
                    <Icon 
                        onClick={(e) => handleDelete(e)}
                        icon={faTrashAlt}
                        size="2x" 
                    />
                </div>
            </PizzaCardHeaderActions>
        </PizzaCardHeader>
        <PizzaCardContent>
            <h1>{pizza.name}</h1>
            <h2>{pizza.ingredients}</h2>

            <Price>
                R$
                <b>
                    {formatCurrency(pizza.price)}
                </b>
            </Price>

            {
                pizza.description 
                &&
                <p>
                    {pizza.description || ''}
                </p> 
            }
            <PrimaryButton
                onClick={(e) => handleOrderPizza(e, pizza)}
            >
                Pedir agora
            </PrimaryButton>
        </PizzaCardContent>
    </>
);

export default Details;
