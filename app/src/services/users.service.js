import api from './api';

import { 
    set as setToken, 
    get as getToken, 
    remove as removeToken,
    decodeToken, 
    isTokenExpired, 
} from './token.service';

export const signUp = (user) => api
    .post('/users', user)
    .then(({ data }) => data);

export const signIn = (email, password) => api
    .post('/signIn', { email, password })
    .then(({ data }) => setToken(data));

export const isLoginValid = () => !!getToken() && !isTokenExpired();

export const signOut = () => removeToken();

export const getUser = () => decodeToken();
