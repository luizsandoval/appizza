import AUTH_ACTIONS_TYPES from '../types/auth';
import { decode } from '../../services/token.service';

const INITIAL_STATE = {
    user: null,
    firstAccess: false,
    isAuthenticated: false,
    validatingAuthentication: true,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case AUTH_ACTIONS_TYPES.USER_SIGNED_IN: {
            return {
                ...state,
                isAuthenticated: true,
                user: decode(payload),
            };
        };
        case AUTH_ACTIONS_TYPES.USER_SIGNED_OUT: {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        };
        case AUTH_ACTIONS_TYPES.USER_UPDATED: {
            return {
                ...state,
                user: { 
                    ...state.user,
                    ...payload,
                    firstAccess: false,
                },
            };
        };
        case AUTH_ACTIONS_TYPES.AUTHENTICATION_STARTED: {
            return {
                ...state,
                validatingAuthentication: true,
            };
        };
        case AUTH_ACTIONS_TYPES.AUTHENTICATION_FINISHED: {
            return {
                ...state,
                validatingAuthentication: false,
            };
        };
        default:
            return state;
    };
};

export default reducer;
