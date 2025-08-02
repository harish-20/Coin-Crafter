import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// for loading test
// api.interceptors.response.use(async (response) => {
//   await new Promise((res, rej) => setTimeout(res, 2000));
//   return response;
// });

// Exporting all available APIs
import * as authAPI from "./auth";
import * as categoryAPI from "./category";
import * as expenseAPI from "./expense";

export { authAPI, categoryAPI, expenseAPI };
