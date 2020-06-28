import axios from 'axios';

import { toast } from 'react-toastify';

import { get as getToken } from './token.service';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use((request) => {
    request.headers.authorization = `Bearer ${getToken()}`;
    return request;
});

api.interceptors.response.use((response) => (response), (error) => {
    toast.error(error.response.data.message);
    return Promise.reject(error);
});

export default api;
