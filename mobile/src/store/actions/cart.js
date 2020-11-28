import CART_ACTIONS_TYPES from '../types/cart';

export const itemAdded = item => (
    {
        type: CART_ACTIONS_TYPES.ITEM_ADDED,
        payload: item,
    }
);

export const itemRemoved = item => (
    {
        type: CART_ACTIONS_TYPES.ITEM_REMOVED,
        payload: item,
    }
);
