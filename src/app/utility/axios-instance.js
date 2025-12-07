import axios from "axios";
import { getToken } from "./auth";

export const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND}`,
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
