import axios from "axios";

const options = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 10000,
};

const API = axios.create(options);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      const { data, status } = error.response;
      console.log(data, "data");

      if (data.errorCode === "AUTH_TOKEN_NOT_FOUND" && status === 401) {
        // logic refresh token
      }

      return Promise.reject({
        ...data,
      });
    } else {
      // Jika tidak ada response dari server (network error, timeout, dll)
      console.error("Network or unexpected error:", error.message);

      return Promise.reject({
        message: "Unexpected error. Please try again.",
        originalError: error,
      });
    }
  }
);

export default API;
