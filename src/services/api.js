import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viniciusboxbackend.herokuapp.com'
});

export default api;