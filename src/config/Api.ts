import axios, { AxiosInstance } from "axios";

const createAPI = (): AxiosInstance => {
  return axios.create({ baseURL: process.env.API_URI || "http://localhost:8080/api/v1" });
};

const api: AxiosInstance = createAPI();

export default api;
