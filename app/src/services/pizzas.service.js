import api from './api';

const API = '/pizzas';

export const create = async (pizza) => {
    const formData = new FormData();

    formData.append('name', pizza.name);
    formData.append('ingredients', pizza.ingredients);
    formData.append('image', pizza.image);

    const res = await api
        .post(API, pizza);

    return res.data;
}

export const update = async (pizza) => {
    const formData = new FormData();

    formData.append('id', pizza.id);
    formData.append('name', pizza.name);
    formData.append('ingredients', pizza.ingredients);
    formData.append('image', pizza.image);

    const res = await api
        .put(API, pizza);

    return res.data;
}

export const remove = async (id) => {
    const res = await api
        .delete(`${API}/${id}`, id);

    return res.data;
}

export const getAll = () => api.get(API)
    .then(res => res.data);

export const getOne = (id) => api.get(`${API}/${id}`)
    .then(res => res.data);
