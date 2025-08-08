

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';  

export const sendMessage = async (content: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chat`, {
      message: content
    });

    return response.data;  
  } catch (error) {
    console.error('Axios error:', error);
    throw error;
  }
};
