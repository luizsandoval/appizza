import { decode } from 'jsonwebtoken';

const TOKEN_KEY = 'session_id';

export const get = () => localStorage.getItem(TOKEN_KEY);

export const set = (token) => localStorage.setItem(TOKEN_KEY, token);

export const remove = () => localStorage.removeItem(TOKEN_KEY);

export const decodeToken = () => decode(get());
