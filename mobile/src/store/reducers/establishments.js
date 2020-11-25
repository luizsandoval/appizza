import ESTABLISHMENTS_ACTIONS_TYPES from '../types/establishments';

const INITIAL_STATE = {
    loading: false,
    establishments: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ESTABLISHMENTS_ACTIONS_TYPES.ESTABLISHMENTS_LOADING: {
            return {
                ...state,
                loading: true,
            }
        };
        case ESTABLISHMENTS_ACTIONS_TYPES.ESTABLISHMENTS_LOADED: {
            return {
                ...state,
                loading: false,
                establishments: payload,
            }
        };
        default:
            return state;
    }
};

export default reducer;
