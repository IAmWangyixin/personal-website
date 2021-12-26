import { requests } from '../../utils/requests';

export interface IBlogData {
  title: string;
  content: string;
}

export const createBlog = (data: IBlogData) =>
  requests.post('/api/blog/new', data);

export const blogList = () => requests.get('/api/blog/list');

export const updateBlog = ({ id, data }: { id: string; data: IBlogData }) =>
  requests.put(`/api/blog/update?id=${id}`, data);

export const delBlog = (id: string) =>
  requests.delete(`/api/blog/delete?id=${id}`);

export const blogDetail = (id: string) =>
  requests.get(`/api/blog/detail?id=${id}`);
