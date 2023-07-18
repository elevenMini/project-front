import axios, { AxiosInstance, CancelTokenSource } from "axios";
import { Cookies } from "react-cookie";

export const server: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_ENDPOINT,
  withCredentials: true,
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMTExMTEiLCJleHAiOjE2ODk2OTQ0NDAsImlhdCI6MTY4OTY5MDg0MH0.NlShFY5eSmAPS0yx9dUW3RBMsXaHrnMZhknANg6GCiA",
  },
});

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options?: any) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
};
