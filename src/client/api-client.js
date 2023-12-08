import axios from 'axios';
import { getToken } from '../utils/helper';

const api = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL || 'http://192.168.0.104:8000/'}/api`
});

api.interceptors.request.use(
    async (config) => {
        if (process.env.REACT_APP_TOKEN || getToken()) {
            config.headers['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN || getToken()}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // logout();
        }
        return Promise.reject(error);
    }
);

export default api;