import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
    baseURL: BASE_URL,
});

export const getPersonajes = (params) => api.get('/personajes/', { params });
export const getPersonaje = (id) => api.get(`/personajes/${id}/`);
export const createPersonaje = (data) => api.post('/personajes/', data);
export const updatePersonaje = (id, data) => api.put(`/personajes/${id}/`, data);
export const deletePersonaje = (id) => api.delete(`/personajes/${id}/`);