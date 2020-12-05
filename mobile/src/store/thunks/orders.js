import api from '../../services/api';

import { cartCleaned } from '../actions/cart';
import { 
    loadedOrder,
    loadedOrders,
    orderCreated,
    orderFinished,
    loadingOrders,
} from '../actions/orders';

export const createOrder = order => {
    return async dispatch => {
        try {
            const { data } = await api.post('/orders', order);

            dispatch(cartCleaned());

            dispatch(orderCreated());

            return data;
        } catch (error) {
            throw error;
        }
    };
};

export const updateOrder = order => {
    return async dispatch => {
        try {
            dispatch(loadingOrders());

            const { data } = await api.put('/orders', order);

            dispatch(loadedOrder(data));

            dispatch(orderFinished());

            return data;
        } catch (error) {
            throw error;
        }
    };
};

export const getOrder = id => {
    return async dispatch => {
        try {
            dispatch(loadingOrders());

            const { data } = await api.get(`/orders/${id}`);

            dispatch(loadedOrder(data));

            return;
        } catch (error) {
            throw error;
        }
    };
};

export const getOrders = () => {
    return async dispatch => {
        try {
            dispatch(loadingOrders());

            const { data } = await api.get(`/orders`);

            dispatch(loadedOrders(data));

            return;
        } catch (error) {
            throw error;
        }
    };
};
