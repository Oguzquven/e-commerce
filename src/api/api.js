// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com", // Boşluk kaldırıldı
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor - Her istekte token ekle
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // NOT: Bearer prefix YOK, direkt token
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
