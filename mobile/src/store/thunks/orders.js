import api from '../../services/api';

import { orderCreated } from '../actions/orders';

const createOrder = order => {
    return async dispatch => {
        try {
            const { data } = await api.post('/orders', order);
    
            dispatch(orderCreated(data));
    
            return;
        } catch (error) {
            throw error;
        }
    };
};
