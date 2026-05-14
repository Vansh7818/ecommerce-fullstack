import axios from 'axios';

// Centralized API configuration for better maintainability and environment handling
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
});

// Added a request interceptor for potential future use (like adding auth tokens)
api.interceptors.request.use(
    (config) => {
        // You can add headers here if needed in the future
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Added a response interceptor for global error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;
