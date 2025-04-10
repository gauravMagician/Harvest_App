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

  // async setupProfile(profileData: SetupProfileCredentials): Promise<ApiResponse<User>> {
  //   try {
  //     const formData = new FormData();

  //     formData.append("name", profileData.userName);
  //     formData.append("dob", profileData.dob);
  //     formData.append("gender", profileData.gender);
  //     formData.append("mobile", profileData.phoneNumber);
  //     formData.append("referredBy", profileData.referralCode || "");
  //     formData.append("bio", profileData.bio || "");
  //     formData.append("isPrivate", profileData.isPublic.toString());

  //     if (profileData.profileImage) {
  //       formData.append("profilePic", profileData.profileImage);
  //     }

  //     const response = await axiosInstance.post("/users/setup-profile", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     console.log("✅ API Response:", response);

  //     return response.data;
  //   } catch (error: any) {
  //     console.error("❌ API Error Response:", error.response?.data);
  //     throw new Error(
  //       error.response?.data?.message || "Profile setup failed. Please try again"
  //     );
  //   }
  // }
  

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
  //   async getComments(): Promise<ApiResponse<Comment[]>> {
  //     try {
  //       const response = await api.get("/comments/getcomments");
  //       return response.data;
  //     } catch (error) {
  //       throw new Error("Failed to fetch comments. Please try again.");
  //     }
  //   },

  //   async postComment(
  //     payload: PostCommentPayload
  //   ): Promise<ApiResponse<PostCommentPayload>> {
  //     try {
  //       console.log(payload, "payload=======");

  //       const response = await api.post("/comments/addcomment", payload);
  //       return response.data;
  //     } catch (error) {
  //       throw new Error("Failed to post comment. Please try again.");
  //     }
  //   },
};
