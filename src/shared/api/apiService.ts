import api from './httpClient.ts';
// import { LoginResponse, RegisterResponse } from '../types/api/apiTypes.ts'

class ApiService {
  constructor(private baseUrl: string) {}

  // Метод для получения данных
  // public async get<T>(endpoint: string): Promise<T> {
  public async get<D>(endpoint: string): Promise<D> {
    try {
      const { data } = await api.get(`${this.baseUrl}/${endpoint}`);
      return data;
    } catch (error) {
      console.error('Ошибка при GET запросе:', error);
      throw error;
    }
  }

  // Лишние типы, не должны знать про внешние сущности
  // public async create<T>(endpoint: string, data: T): Promise<T | LoginResponse | RegisterResponse> {
  public async create<D, P>(endpoint: string, data: P): Promise<D> {
    try {
      const response = await api.post(`${this.baseUrl}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка при CREATE запросе:', error);
      throw error;
    }
  }

  // Метод для обновления данных
  public async update<T>(endpoint: string, data: T): Promise<T> {
    try {
      const response = await api.put(`${this.baseUrl}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка при UPDATE запросе:', error);
      throw error;
    }
  }

  // Метод для удаления данных
  public async remove<T>(endpoint: string): Promise<T> {
    try {
      const { data } = await api.delete(`${this.baseUrl}/${endpoint}`);
      return data;
    } catch (error) {
      console.error('Ошибка при DELETE запросе:', error);
      throw error;
    }
  }
}

export default ApiService;
