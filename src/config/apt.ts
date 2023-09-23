import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../utils/constants/url";

// Get the token from local storage
const token = localStorage.getItem("token");

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// Add an Axios request interceptor to set the BusinessCode header
api.interceptors.request.use((config) => {
  config.headers["BusinessCode"] = localStorage.getItem("businessCode");
  return config;
});

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 403) {
      // logout user
      window.location.reload();
    }
  }
);

export default api;
