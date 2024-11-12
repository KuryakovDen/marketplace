import api from './httpClient.ts'

class ApiService {
  // Метод для получения данных
  async get<T>(endpoint): Promise<T> {
    try {
      const { data } = await api.get(endpoint);
      return data;
    } catch (error) {
      console.error('Ошибка при GET запросе:', error);
      throw error;
    }
  }

  // Метод для создания данных
  async create<T>(endpoint, data): Promise<T> {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка при CREATE запросе:', error);
      throw error;
    }
  }

  // Метод для обновления данных
  async update<T>(endpoint, data):Promise<T> {
    try {
      const response = await api.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка при UPDATE запросе:', error);
      throw error;
    }
  }

  // Метод для удаления данных
  async delete<T>(endpoint): Promise<T> {
    try {
      const { data } = await api.delete(endpoint);
      return data;
    } catch (error) {
      console.error('Ошибка при DELETE запросе:', error);
      throw error;
    }
  }
}

export default ApiService;
