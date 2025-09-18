import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});

if (process.env.NEXT_PUBLIC_MOCK_API === "true") {
  api.interceptors.request.use((config) => {
    console.log("Mock API request:", config.url);
    return config;
  });
}

export default api;
