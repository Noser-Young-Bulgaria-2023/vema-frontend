import axios, { AxiosError, AxiosInstance } from "axios";

/**
 * isDev returns a boolean if the application is running in development-mode.
 */

/**
 * Create an Axios instance for the api.
 */
const createAPI = (): AxiosInstance => {
  return axios.create({ baseURL: "http://localhost:8080" });
};

/**
 * api constant is the axios-instance used for all requests to the rest-api.
 */
const api: AxiosInstance = createAPI();

export default api;
