import axios from 'axios';

export const API_URL = `http://localhost:8081`;

const $api = axios.create({
    // withCredentials: true,
    baseURL: API_URL
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `${localStorage.getItem('token')}`
    return config;
});

export default $api;