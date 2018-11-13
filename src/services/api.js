import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bibliapp.herokuapp.com/api'
});

export default api;