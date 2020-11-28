import CART_ACTIONS_TYPES from '../types/cart';

const INITIAL_STATE = {
    items: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case CART_ACTIONS_TYPES.ITEM_ADDED: {
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
        default:
            return state;
    };
};

export default reducer;
