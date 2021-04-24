import axios from 'axios';

// Substitua pelo seu IP Local
const api = axios.create({
  baseURL: 'http://SEU_IP_LOCAL:3333'
});

export default api;
