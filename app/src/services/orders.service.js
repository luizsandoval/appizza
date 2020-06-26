import api from './api';

const API = '/orders';

export const create = (order) => api.post(API, order)
    .then(res => res.data);

export const getAll = () => api.get(API)
    .then(res => res.data);

export const getOne = (id) = api.get(`${API}/${id}`)
    .then(res => res.data);
