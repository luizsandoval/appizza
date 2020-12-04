import axios from 'axios';

import { get as getToken } from './token.service';

const api = axios.create({
    baseURL: 'https://appizza-backend.herokuapp.com'
});

api.interceptors.request.use(async (request) => {
    request.headers.authorization = `Bearer ${await getToken()}`;
    return request;
});

api.interceptors.response.use((response) => (response), (error) => {
    return Promise.reject(error);
});

export default api;
