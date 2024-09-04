import axios from 'axios';

export const fetchMedia = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=30'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
