import ORDERS_ACTIONS_TYPES from '../types/orders';

const INITIAL_STATE = {
    orders: [],
    order: null,
    loading: false,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ORDERS_ACTIONS_TYPES.ORDER_CREATED: {
            return {
                ...state,
                order: payload,
            };
        };
        default:
            return state;
    };
};

export default reducer;
