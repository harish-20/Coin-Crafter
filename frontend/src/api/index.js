import axios from "axios";

const productionAPI = "";
const developmentAPI = "http://localhost:8080/api";

const baseURL =
  process.env.NODE_ENV === "development" ? developmentAPI : productionAPI;

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
