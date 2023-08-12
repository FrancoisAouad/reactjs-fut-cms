import { axios } from '../../api/axios';

export const addLov = () => {
  // not empty
};

export const getLovData = async () => {
  try {
    const res = await axios.get('http://192.168.10.40:5021/api/lov');
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const deleteLovData = async (id: string) => {
  try {
    await axios.delete(`http://localhost:5021/api/articles/${id}`);
  } catch (err) {
    throw err;
  }
};
