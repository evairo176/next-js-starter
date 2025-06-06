import axios from "axios";

const options = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 10000,
};

const API = axios.create(options);

export const APIRefresh = axios.create(options);
APIRefresh.interceptors.response.use((response) => response);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      const { data, status } = error.response;

      if (data.errorCode === "AUTH_TOKEN_NOT_FOUND" && status === 401) {
        try {
          await APIRefresh.get("/auth/refresh");
          return APIRefresh(error.config);
        } catch (error) {
          window.location.href = "/";
        }
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
