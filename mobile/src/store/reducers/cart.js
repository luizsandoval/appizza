import CART_ACTIONS_TYPES from '../types/cart';

const INITIAL_STATE = {
    items: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case CART_ACTIONS_TYPES.ITEM_ADDED: {
            payload.quantity = 1;
            return {
                ...state,
                items: [...state.items, payload]
            };
        };
        case CART_ACTIONS_TYPES.ITEM_REMOVED: {
            return {
                ...state,
                items: state.items.filter(item => item.id !== payload.id),
            };
        };
        case CART_ACTIONS_TYPES.ITEM_QUANTITY_INCREASED: {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === payload.id) {
                        item.quantity += 1;
                    }
                    return item;
                }),
            };
        };
        case CART_ACTIONS_TYPES.ITEM_QUANTITY_DECREASED: {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === payload.id) {
                        item.quantity -= 1;
                    }
                    return item;
                })
            };
        };
        case CART_ACTIONS_TYPES.CART_CLEANED: {
            return {
                ...state,
                items: [],
            };
        };
        default:
            return state;
    };
};

export default reducer;
