import axios from 'axios';
import { io } from 'socket.io-client';
// const baseURL = 'http://127.0.0.1:3000';
const baseURL = import.meta.env.VITE_REACT_APP_API_URL;

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

export const socket = io(baseURL, {
  extraHeaders: {
    Authorization: `jwt ${token}`,
  },
});

export const authApi = axios.create({ baseURL: baseURL });
