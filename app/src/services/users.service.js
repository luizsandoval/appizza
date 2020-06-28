import api from './api';

import { set as setToken, get as getToken, decodeToken } from './token.service';

export const signUp = (user) => api
    .post('/users', user)
    .then(({ data }) => data);

export const signIn = (email, password) => api
    .post('/signIn', { email, password })
    .then(({ data }) => setToken(data));

export const isLoggedIn = () => !!getToken();

export const getUser = () => decodeToken();
