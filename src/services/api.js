import axios from 'axios';

// This points to your Node.js backend
const API = axios.create({
    baseURL: 'http://localhost:4000/api',
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