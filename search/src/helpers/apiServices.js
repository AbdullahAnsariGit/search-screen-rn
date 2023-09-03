const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);

    if (!response.ok) {
      throw new Error(`Error fetching posts. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
