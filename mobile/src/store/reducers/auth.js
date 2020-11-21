import AUTH_ACTIONS_TYPES from '../types/auth';
import { decode } from '../../services/token.service';

const INITIAL_STATE = {
    user: null,
    isAuthenticated: false,
};

const reducer = (state = INITIAL_STATE, { type }) => {
    switch (type) {
        case AUTH_ACTIONS_TYPES.USER_SIGNED_IN: {
            return {
                ...state,
                isAuthenticated: true,
                user: decode(),
            }
        };
        case AUTH_ACTIONS_TYPES.USER_SIGNED_OUT: {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        };
        default:
            return state;
    }
};

export default reducer;
