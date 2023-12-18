import axios from 'axios';
import { apiKey, baseUrl } from './config';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
export default axiosInstance;
