import axios from "axios";

const productionAPI = "https://api-coin-crafter.onrender.com/api";
const developmentAPI = "http://localhost:8080/api";

const baseURL =
  process.env.NODE_ENV === "development" ? developmentAPI : productionAPI;

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
