import api from './httpClient.ts'

class ApiService {
  // Метод для получения данных
  static async get(endpoint) {
    try {
      const { data } = await api.get(endpoint);
      return data;
    } catch (error) {
      console.error('Ошибка при GET запросе:', error);
      throw error;
    }
  }

  // Метод для создания данных
  static async create(endpoint, data) {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка при CREATE запросе:', error);
      throw error;
    }
  }

  // Метод для обновления данных
  static async update(endpoint, data) {
    try {
      const response = await api.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка при UPDATE запросе:', error);
      throw error;
    }
  }

  // Метод для удаления данных
  static async delete(endpoint) {
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
