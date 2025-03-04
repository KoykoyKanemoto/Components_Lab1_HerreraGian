const API_BASE_URL = 'http://localhost:3000/api'; 
export const getEmployees = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/employees`);
    if (!response.ok) {
      throw new Error('Failed to fetch employees');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching employees:', error);
    return []; 
  }
};
