import axios from 'axios';

const API_URL = 'https://www.jsonkeeper.com/b/SX70';

export const fetchBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
