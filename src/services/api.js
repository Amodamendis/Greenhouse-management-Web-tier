import axios from 'axios';

// Dynamically point to the current domain's /api route
const API = axios.create({
    baseURL: '/api', 
});

// Attach the JWT token to every request if the user is logged in
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;