import ORDERS_ACTIONS_TYPES from '../types/orders';

export const orderCreated = order => (
    {
        type: ORDERS_ACTIONS_TYPES.ORDER_CREATED,
        payload: order,
    }
);
