import axios from "axios";
import { BASE_URL } from "./apiEndpoints";
import EncryptedStorage from "react-native-encrypted-storage";
import { navigationRef } from "../navigation/navigationRef";
import { StorageKeys } from "../utils/storage";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Add interceptor to handle session expiry
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      try {
        await EncryptedStorage.removeItem("user_session");

        if (navigationRef.isReady()) {
          navigationRef.reset({
            index: 0,
            routes: [{ name: "SignUp" }],
          });
        }
      } catch (e) {
        console.error("Error during session cleanup", e);
      }
    }
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await EncryptedStorage.getItem(StorageKeys.AUTH_TOKEN);
    if (token) {
      const cleanedToken = token.replace(/^"|"$/g, "");
      config.headers.Authorization = `Bearer ${cleanedToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default axiosInstance;
