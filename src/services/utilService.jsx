import axios from 'axios';
const baseURL = 'https://bfc1-142-3-80-206.ngrok-free.app/api/v1';

const token = window.sessionStorage?.getItem('token');
export const api = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    Authorization: `jwt ${token}`,
  },
});

export const apiForm = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'multipart/form-data',
    Authorization: `jwt ${token}`,
  },
});

export const authApi = axios.create({ baseURL: baseURL });
