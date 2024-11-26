import api from './httpClient.ts'

type ApiService = {
  get: <T>(endpoint: string) => Promise<T>
  create: <T>(endpoint: string, data: T) => Promise<T>
  update: <T>(endpoint: string, data: T) => Promise<T>
  remove: <T>(endpoint: string) => Promise<T>
}

// Лучше сделать как класс, чтобы было удобно использовать возможности наследования
const ApiService: ApiService = {
  // Метод для получения данных
  get: async <T>(endpoint: string): Promise<T> => {
    try {
      const { data } = await api.get(endpoint);
      return data;
    } catch (error) {
      console.error('Ошибка при GET запросе:', error);
      throw error;
    }
  },

  // Метод для создания данных
  create: async <T>(endpoint: string, data: T): Promise<T> => {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка при CREATE запросе:', error);
      throw error;
    }
  },

  // Метод для обновления данных
  update: async <T>(endpoint: string, data: T): Promise<T> => {
    try {
      const response = await api.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка при UPDATE запросе:', error);
      throw error;
    }
  },

  // Метод для удаления данных
  remove: async <T>(endpoint: string): Promise<T> => {
    try {
      const { data } = await api.delete(endpoint);
      return data;
    } catch (error) {
      console.error('Ошибка при DELETE запросе:', error);
      throw error;
    }
  },
};

export default ApiService;