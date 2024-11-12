import axios from 'axios'

const TIMEOUT = 5000

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: TIMEOUT,
});

export default api;
