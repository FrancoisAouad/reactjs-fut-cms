import axiosImport from 'axios';
import config from './endpoints';

export const axios = axiosImport.create({
  baseURL: config().baseUrl,
});
