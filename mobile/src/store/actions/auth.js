import AUTH_ACTIONS_TYPES from '../types/auth';

export const userSignedIn = token => (
    {
        type: AUTH_ACTIONS_TYPES.USER_SIGNED_IN,
        payload: token
    }
);

export const userSignedOut = () => (
    {
        type: AUTH_ACTIONS_TYPES.USER_SIGNED_OUT,
    }
);

export const userUpdated = user => (
    {
        type: AUTH_ACTIONS_TYPES.USER_UPDATED,
        payload: user,
    }
);
