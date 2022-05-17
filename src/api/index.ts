import axios from "axios";

export const API_URL = `https://trello.backend.tests.nekidaem.ru/api/v1`;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `JWT ${localStorage.getItem("token")}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(`${API_URL}/users/refresh_token/`, {
          token,
        });
        localStorage.setItem("token", response.data.token);
        return api.request(originalRequest);
      } catch (e) {
        console.log(e);
      }
    }
    throw error;
  }
);

export default api;
