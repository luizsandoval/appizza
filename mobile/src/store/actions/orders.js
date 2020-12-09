import ORDERS_ACTIONS_TYPES from '../types/orders';

export const orderCreated = () => (
    {
        type: ORDERS_ACTIONS_TYPES.ORDER_CREATED,
    }
);

export const orderFinished = () => (
    {
        type: ORDERS_ACTIONS_TYPES.ORDER_UPDATED,
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
