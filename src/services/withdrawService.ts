

import { ApiResponse } from "../types/authTypes";
import { StorageKeys } from "../utils/storage";
import axiosInstance from "./apiClient";
import EncryptedStorage from "react-native-encrypted-storage";

export interface WithdrawServiceCredentials {
  amount: string;
}

export const withdrawService = {
  async postWithdraw(
    credentials: WithdrawServiceCredentials
  ): Promise<ApiResponse<{ message: string }>> {
    try {
      const token = await EncryptedStorage.getItem(StorageKeys.AUTH_TOKEN);

      if (!token) {
        throw new Error("Token not found. Please log in again.");
      }

      // Remove quotes if the token is accidentally saved with them
      const cleanedToken = token.replace(/^"|"$/g, "");

      console.log("📦 Retrieved token:", cleanedToken);

      const response = await axiosInstance.post(
        "/withdraw/withdraw-points",
        credentials,
        {
          headers: {
            Authorization: `Bearer ${cleanedToken}`, // ✅ Correct format
            "Content-Type": "application/json",       // Explicit header
          },
        }
      );

      console.log("✅ Withdraw Response:", response.data);
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Network error. Please check your connection.";

      console.error("❌ Withdraw Error:", errorMessage);
      throw new Error(errorMessage);
    }
  },


  async getWithdrawHistory(): Promise<ApiResponse<any>> {
    try {
      const token = await EncryptedStorage.getItem(StorageKeys.AUTH_TOKEN);
      if (!token) throw new Error("Token not found. Please log in again.");
      const cleanedToken = token.replace(/^"|"$/g, "");

      console.log("📦 Retrieved token:", cleanedToken);

      const response = await axiosInstance.get("/withdraw/withdraw-history", {
        headers: {
          Authorization: `Bearer ${cleanedToken}`,
        },
      })
      // console.log("📜 Withdraw History Response:", response.data);
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Network error. Please check your connection.";

      console.error("❌ Withdraw History Error:", errorMessage);
      throw new Error(errorMessage);
    }
  },
};