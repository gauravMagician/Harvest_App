// services/authService.ts

import {
  LoginCredentials,
  SignupCredentials,
  ResetPasswordCredentials,
  ApiResponse,
  User,
  VerifyOtpCredentials,
  SetupProfileCredentials,
} from "../types/authTypes";
import axiosInstance from "./apiClient";

export interface SendOtpCredentials {
  mobile: string;
}

export const authService = {
  async sendOtp(
    credentials: SendOtpCredentials
  ): Promise<ApiResponse<{ message: string }>> {
    try {
      const response = await axiosInstance.post("/users/send-otp", credentials);
      return response.data;
    } catch (error) {
      throw new Error("Network error. Please check your connection.");
    }
  },

  async resendOtp(
    credentials: SendOtpCredentials
  ): Promise<ApiResponse<{ message: string }>> {
    try {
      const response = await axiosInstance.post("/users/resend-otp", credentials);
      return response.data;
    } catch (error) {
      throw new Error("Network error. Please try again.");
    }
  },

  async verifyOtp(
    credentials: VerifyOtpCredentials
  ): Promise<ApiResponse<{ message: string }>> {
    try {
      const response = await axiosInstance.post("/users/test-verify-otp", credentials);
      return response.data;
    } catch (error) {
      throw new Error("OTP verification failed. Please try again.");
    }
  },

  async setupProfile(profileData: FormData): Promise<ApiResponse<User>> {
    try {
      const response = await axiosInstance.post("/users/setup-profile", profileData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response, "response");

      return response.data;
    } catch (error: any) {
      console.error("❌ API Error Response:", error.response?.data);
      throw new Error(
        error.response?.data?.message ||
        "Profile setup failed. Please try again"
      );
    }
  },

  async login(credentials: LoginCredentials): Promise<ApiResponse<User>> {
    const response = await axiosInstance.post("/login", credentials);
    return response.data;
  },

  async signup(credentials: SignupCredentials): Promise<ApiResponse<User>> {
    const response = await axiosInstance.post("/auth/signup", credentials);
    return response.data;
  },

  async forgotPassword(
    email: string
  ): Promise<ApiResponse<{ message: string }>> {
    const response = await axiosInstance.post("/forgot-pass", { email });
    return response.data;
  },

  async resetPassword(
    credentials: ResetPasswordCredentials
  ): Promise<ApiResponse<{ message: string }>> {
    const response = await axiosInstance.post("/reset-pass", credentials);
    return response.data;
  },

  async logout(): Promise<ApiResponse<{ message: string }>> {
    const response = await axiosInstance.post("/users/logout");
    return response.data;
  },

  async validateToken(): Promise<ApiResponse<User>> {
    const response = await axiosInstance.get("/auth/validate-token");
    return response.data;
  },

};
