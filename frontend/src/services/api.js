// src/services/api.js (opsiyonel, ama ihtiyacınız varsa ekleyebilirsiniz)
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/products/';

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('API isteği başarısız:', error);
    throw error;
  }
};
