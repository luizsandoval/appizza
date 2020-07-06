import api from './api';

const API = '/pizzas';

export const create = async (pizza) => {
    const formData = new FormData();

    formData.append('name', pizza.name);
    formData.append('ingredients', pizza.ingredients);
    formData.append('price', pizza.price);
    formData.append('image', pizza.image);

    if (pizza.description) formData.append('description', pizza.description);

    const { data } = await api
        .post(API, formData);

    return data;
};

export const update = async (pizza) => {
    const formData = new FormData();

    formData.append('id', pizza.id);
    formData.append('name', pizza.name);
    formData.append('ingredients', pizza.ingredients);
    formData.append('image', pizza.image);
    formData.append('price', pizza.price);

    if (pizza.description) formData.append('description', pizza.description);

    const { data } = await api
        .put(API, formData);

    return data;
};

export const remove = async (id) => {
    const { data } = await api
        .delete(`${API}/${id}`, id);

    return data;
};

export const getAll = () => api.get(API)
    .then(({ data }) => data);

export const getOne = (id) => api.get(`${API}/${id}`)
    .then(({ data }) => data);
