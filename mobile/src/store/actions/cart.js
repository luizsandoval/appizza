import CART_ACTIONS_TYPES from '../types/cart';

export const itemQuantityIncreased = item => (
    {
        type: CART_ACTIONS_TYPES.ITEM_QUANTITY_INCREASED,
        payload: item,
    }
);

export const itemQuantityDecreased = item => (
    {
        type: CART_ACTIONS_TYPES.ITEM_QUANTITY_DECREASED,
        payload: item,
    }
);

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

export const cartCleaned = () => (
    {
        type: CART_ACTIONS_TYPES.CART_CLEANED,
    }
);
