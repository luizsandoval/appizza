import api from '../../services/api';

import { set as setToken, remove as removeToken } from '../../services/token.service';

import AUTH_ACTIONS_TYPES from '../types/auth';

const userSignedIn = token => (
    {
        type: AUTH_ACTIONS_TYPES.USER_SIGNED_IN,
        payload: token
    }
);

const userSignedOut = () => (
    {
        type: AUTH_ACTIONS_TYPES.USER_SIGNED_OUT,
    }
);

const userUpdated = user => (
    {
        type: AUTH_ACTIONS_TYPES.USER_UPDATED,
        payload: user,
    }
);

export const signIn = ({ email, password }) => {
    return async dispatch => {
        try {
            const { data } = await api.post('/auth/users', { email, password });

            await setToken(data);

            dispatch(userSignedIn(data));

            return data;
        } catch (error) {
            throw error;
        }
    }
};

export const signOut = () => {
    return async dispatch => {
        try {
            await removeToken();

            dispatch(userSignedOut());

            return;
        } catch (error) {
            throw error;
        }
    }
};

export const signUp = user => {
    return async _ => {
        try {
            const { data } = await api.post('/users', user);

            return data;
        } catch (error) {
            throw error;
        }
    }
};

export const updateUser = user => {
    return async dispatch => {
        try {
            const { data } = await api.put('/users', user);

            dispatch(userUpdated(user));

            return data;
        } catch (error) {
            throw error;
        }
    };
};



