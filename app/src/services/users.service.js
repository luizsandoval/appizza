import api from './api';

import { set, get } from './token.service';

export const signUp = (user) => api
    .post('/users', user)
    .then((res) => res.data);

export const signIn = (email, password) => api
    .post('/signIn', { email, password })
    .then((res) => set(res.data));

export const isLoggedIn = () => !!get();
