import api from '../../services/api';

import { cartCleaned } from '../actions/cart';
import { orderCreated } from '../actions/orders';

const createOrder = order => {
    return async dispatch => {
        try {
            await api.post('/orders', order);
    
            dispatch(orderCreated());
            dispatch(cartCleaned());
    
            return;
        } catch (error) {
            throw error;
        }
    };
};
