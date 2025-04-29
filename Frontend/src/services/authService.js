import axios from 'axios';

const API = 'http://localhost:5000/api/auth';

export const login = async (credentials) => {
  
  const { data } = await axios.post(`${API}/login`, credentials);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem('user');
};
export const deleteUser = () => {
  localStorage.removeItem('user');
};





