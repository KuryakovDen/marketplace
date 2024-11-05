import axios from 'axios'

const BASE_URL = 'http://localhost:8888'
const TIMEOUT = 5000

const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

export default api;
