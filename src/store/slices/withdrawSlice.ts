import { createAsyncThunk } from "@reduxjs/toolkit";
import { withdrawService } from "../../services/withdrawService";
import { WithdrawServiceCredentials } from "../../services/withdrawService";
import { ApiResponse } from "../../types/authTypes";

export const postWithdraw = createAsyncThunk(
  "withdraw/postWithdraw",
  async (credentials: WithdrawServiceCredentials, { rejectWithValue }) => {
    try {
      const response: ApiResponse<{ message: string }> =
        await withdrawService.postWithdraw(credentials);
      // console.log(",,,,,,,,", response);

      return response?.data?.message || "Success";
    } catch (error: any) {
      return rejectWithValue(
        error?.message || "Withdrawal failed. Please try again."
      );
    }
  }
);

export const getWithdrawHistory = createAsyncThunk(
  "withdraw/getWithdrawHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response: ApiResponse<any> = await withdrawService.getWithdrawHistory();
      // console.log("balance slice>>>>>>", response);

      return response?.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.message || "Failed to fetch withdrawal history. Please try again."
      );
    }
  }
);