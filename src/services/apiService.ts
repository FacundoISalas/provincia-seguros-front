import axiosInstance from '@/services/axios';

const apiService = {
  async getItems() {
    try {
      const response = await axiosInstance.get('/georef/api/provincias');
      return response.data; 
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default apiService;
