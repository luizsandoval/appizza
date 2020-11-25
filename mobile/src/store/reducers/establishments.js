import ESTABLISHMENTS_ACTIONS_TYPES from '../types/establishments';

const INITIAL_STATE = {
    loading: false,
    establishments: [],
    establishment: null,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ESTABLISHMENTS_ACTIONS_TYPES.ESTABLISHMENTS_LOADING: {
            return {
                ...state,
                loading: true,
            };
        };
        case ESTABLISHMENTS_ACTIONS_TYPES.ESTABLISHMENTS_LOADED: {
            return {
                ...state,
                loading: false,
                establishments: payload,
            };
        };
        case ESTABLISHMENTS_ACTIONS_TYPES.ESTABLISHMENT_LOADED: {
            return {
                ...state,
                loading: false,
                establishment: payload,
            };
        };
        default:
            return state;
    };
};

export default reducer;
