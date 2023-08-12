import { axios } from '../../api/axios';
import config from '../../api/endpoints';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${config().baseUrl}/${config().auth.login}`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
