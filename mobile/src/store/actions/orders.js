import ORDERS_ACTIONS_TYPES from '../types/orders';

export const orderCreated = order => (
    {
        type: ORDERS_ACTIONS_TYPES.ORDER_CREATED,
        payload: order,
    }
);

export const loadingOrders = () => (
    {
        type: ORDERS_ACTIONS_TYPES.ORDERS_LOADING,
    }
);

export const loadedOrders = orders => (
    {
        type: ORDERS_ACTIONS_TYPES.ORDERS_LOADED,
        payload: orders,
    }
);

export const loadedOrder = order => (
    {
        type: ORDERS_ACTIONS_TYPES.ORDER_LOADED,
        payload: order,
    }
);
