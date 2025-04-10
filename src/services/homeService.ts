// homeService.ts
import EncryptedStorage from "react-native-encrypted-storage";
import { ApiResponse } from "../types/authTypes";
import axiosInstance from "./apiClient";


export interface HomeFeedItem {
  id: string;
  username: string;
  userImage: string;
  postImage: string;
  likes: string;
  comments: string;
  shares: string;
  time: string;
  description: string;
}

export interface PostCommentPayload {
  postId: string;
  userId: string;
  comment: string;
}

// Define interface for create post request data
export interface CreatePostData {
  description: string;
  postImage?: string; // Optional image field
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  username: string;
  userImage: string;
  text: string;
  createdAt: string;
}

export const homeService = {
  async getHomeFeed(): Promise<ApiResponse<HomeFeedItem[]>> {
    try {
      const response = await axiosInstance.get("/users/home-feed");
      return response.data;
    } catch (error: any) {
      console.error("❌ API Error Response:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to load home feed"
      );
    }
  },

  // New create post method
  // async createPost(postData: FormData): Promise<ApiResponse<HomeFeedItem>> {
  //   try {
  //     console.log("📤 Sending Post Data:", postData);

  //     const response = await axiosInstance.post("/posts/create-post", postData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     console.log("✅ Post Created Successfully:", response.data);
  //     return response.data;
  //   } catch (error: any) {
  //     console.error("❌ Create Post Error:", error.response?.data);
  //     throw new Error(error.response?.data?.message || "Failed to create post");
  //   }
  // },

  async createPost(postData: FormData): Promise<ApiResponse<HomeFeedItem>> {
    try {
      console.log("📤 Sending Post Data:", postData);

      const token = await EncryptedStorage.getItem("token");

      if (!token) {
        throw new Error("Not authorized, token missing");
      }

      const response = await axiosInstance.post("/posts/create-post", postData, {
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // ✅ Add token here
        },
      });
      console.log("✅ Post Created Successfully:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Create Post Error:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to create post");
    }
  },

  async getComments(): Promise<ApiResponse<Comment[]>> {
    try {
      const response = await axiosInstance.get("/comments/getcomments");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch comments. Please try again.");
    }
  },

  async postComment(
    payload: PostCommentPayload
  ): Promise<ApiResponse<PostCommentPayload>> {
    try {
      console.log(payload, "payload=======");

      const response = await axiosInstance.post("/comments/comment", payload);
      return response.data;
    } catch (error) {
      throw new Error("Failed to post comment. Please try again.");
    }
  },
  async likePost(
    payload: LikePostPayload
  ): Promise<ApiResponse<{ success: boolean }>> {
    try {
      const response = await axiosInstance.post("posts/like-post", payload);
      return response.data;
    } catch (error) {
      throw new Error("Failed to like post");
    }
  },
};
