import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from 'axios';
import type { AxiosRequestConfig } from 'axios';

import { HOST } from 'utils/Host';

const axiosInstance = axios.create({
  baseURL: HOST,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const newConfig = config;
    
    if (typeof window !== 'undefined') {
      newConfig.headers = {
        ...newConfig.headers,
        Authorization: `Bearer ${localStorage.getItem('xtoken') as string}`,
      };
    }

    return newConfig;
  },
  async (error) => await Promise.reject(error)
);

export const fetcher = async (resource: any, init: AxiosRequestConfig<any>) =>
  await axiosInstance.get(resource, init).then((res) => res.data);

export default axiosInstance;
