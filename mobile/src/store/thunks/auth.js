import api from '../../services/api';

import { API_URL } from '@env';

import { 
    get as getToken,
    set as setToken,
    remove as removeToken,
    isValid as isTokenValid,
} from '../../services/token.service';

import { 
    userUpdated,
    userSignedIn,
    userSignedOut,
    authenticationStarted,
    authenticationFinished,
} from '../actions/auth';

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
            console.log(API_URL);
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

export const validateAuthentication = () => {
    return async dispatch => {
        try {
            dispatch(authenticationStarted());

            const token = await getToken();

            token && (await isTokenValid(token))
                ? (
                    dispatch(userSignedIn(token))
                )
                : (
                    signOut()
                );

            dispatch(authenticationFinished());

            return;            
        } catch(error) {
            throw error;
        }
    }
}