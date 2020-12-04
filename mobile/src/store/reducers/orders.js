import ORDERS_ACTIONS_TYPES from '../types/orders';

const INITIAL_STATE = {
    orders: [],
    order: null,
    loading: false,
    ordersInProgress: 0,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ORDERS_ACTIONS_TYPES.ORDER_CREATED: {
            return {
                ...state,
                ordersInProgress: state.ordersInProgress + 1,
            };
        };
        case ORDERS_ACTIONS_TYPES.ORDERS_LOADING: {
            return {
                ...state,
                loading: true,
            };
        };
        case ORDERS_ACTIONS_TYPES.ORDER_LOADED: {
            return {
                ...state,
                loading: false,
                order: payload,
            };
        };
        case ORDERS_ACTIONS_TYPES.ORDERS_LOADED: {
            return {
                ...state,
                loading: false,
                orders: payload,
            };
        };
        default:
            return state;
    };
};

export default reducer;
