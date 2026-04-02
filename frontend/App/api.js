import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Thay bằng IP/Port của BE
});

export default api;