import { requests } from '../../utils';

interface LoginValues {
  username: string;
  password: string;
}

export const getUserInfo = (userId: string) =>
  requests.get(`/api/user/info?id=${userId}`);

export const login = (values: LoginValues) =>
  requests.post('/api/user/login', values);
