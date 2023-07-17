import axios, { AxiosInstance } from "axios";

export const server: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_ENDPOINT,
});
