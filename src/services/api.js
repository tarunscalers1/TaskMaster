import axios from 'axios';

export const fetchTasks = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
    // Define custom task names to override or fallback to API titles
    const customTitles = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
    return response.data.map((item, index) => ({
      title: customTitles[index] || item.title, // Use custom title if available, else API title
      description: item.id.toString()
    }));
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};