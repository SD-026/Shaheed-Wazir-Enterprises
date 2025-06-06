import axios from 'axios';

const API = 'https://shaheed-wazir-enterprises.onrender.com/api/users';

const getToken = () =>localStorage.getItem('token')

export const getAllUsers = async () => {
  const { data } = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return data;
};
