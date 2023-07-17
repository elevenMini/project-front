import axios, { AxiosInstance } from "axios";
import { Cookies } from "react-cookie";

export const server: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_ENDPOINT,
});

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options?: any) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = () => {
  return cookies.getAll({ doNotParse: true });
};
