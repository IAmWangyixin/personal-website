import axios from 'axios';

interface Requests {
  get(url: string, params?: any): Promise<any>;
  delete(url: string, config?: any): Promise<any>;
  head(url: string, config?: any): Promise<void>;
  // options(url: string, config?: any): Promise<any>;
  post(url: string, data?: any, config?: any): Promise<any>;
  put(url: string, data?: any, config?: any): Promise<any>;
  patch(url: string, data?: any, config?: any): Promise<any>;
}

const axiosInstance = axios.create({
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const requests: Requests = {
  get: (url, params?) => axiosInstance.get(url).then((res) => res.data),
  delete: (url, config) =>
    axiosInstance.delete(url, { ...(config || {}) }).then((res) => res.data),
  head: (url, config) =>
    axiosInstance.head(url, { ...(config || {}) }).then((res) => res.data),
  post: (url, data, config) =>
    axiosInstance
      .post(url, data, { ...(config || {}) })
      .then((res) => res.data),
  put: (url, data, config) =>
    axiosInstance
      .post(url, data, { ...(config || {}) })
      .then((res) => res.data),
  patch: (url, data, config) =>
    axiosInstance
      .post(url, data, { ...(config || {}) })
      .then((res) => res.data),
};
