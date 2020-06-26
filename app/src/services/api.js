import axios from 'axios';

import { toast } from 'react-toastify';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.response.use((response) => (response), (error) => {
    toast.error(error.response.data.message);
    return Promise.reject(error);
});

export default api;
