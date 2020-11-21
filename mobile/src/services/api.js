import axios from 'axios';

import { API_URL } from '@env';

import { get as getToken } from './token.service';

const api = axios.create({
    baseURL: API_URL
});

api.interceptors.request.use(async (request) => {
    request.headers.authorization = `Bearer ${await getToken()}`;
    return request;
});

api.interceptors.response.use((response) => (response), (error) => {
    return Promise.reject(error);
});

export default api;
