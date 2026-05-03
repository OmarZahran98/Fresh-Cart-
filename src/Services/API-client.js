import axios from "axios";
import { CONFIG_API } from "../config";

export const ApiClient = axios.create({
  baseURL: CONFIG_API.baseUrl,
  timeout: 30000,
});

ApiClient.interceptors.request.use((config) => {
  const IsToken =
    localStorage.getItem("IsToken") || sessionStorage.getItem("IsToken");

  if (IsToken) {
    config.headers.token = IsToken;
    config.headers.Authorization = `Bearer ${IsToken}`;
  }

  return config;
});

ApiClient.interceptors.response.use(
  (response) => {
    return Promise.resolve({
      success: true,
      data: response.data,
    });
  },
  (error) => {
    return Promise.reject({
      success: false,
      error: error,
      message: error.response.data.message,
    });
  },
);
