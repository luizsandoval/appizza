import api from '../../services/api';

import { set as setToken } from '../../services/token.service';

import AUTH_ACTIONS_TYPES from '../types/auth';

const userSignedIn = () => (
    {
        type: AUTH_ACTIONS_TYPES.SIGN_IN
    }
);

export const signIn = ({ email, password })=> {
    return async dispatch => {
        try {
            const { data } = await api.post('/auth/users', { email, password });
            
            await setToken(data);

            dispatch(userSignedIn);

            return data;
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
            console.log('error', JSON.stringify(error));
            throw error;
        }
    }
};


