// slices/authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService, SendOtpCredentials } from "../../services/authService";
import {
  AuthState,
  SetupProfileCredentials,
  SetupProfileData,
  User,
  VerifyOtpCredentials,
} from "../../types/authTypes";

interface ExtendedAuthState extends AuthState {
  otpSent: boolean;
  otpVerified: boolean;
  lastOtpSentTime: number | null;
}

const initialState: ExtendedAuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  otpSent: false,
  otpVerified: false,
  lastOtpSentTime: null,
};

export const sendOtp = createAsyncThunk(
  "auth/sendOtp",
  async (credentials: SendOtpCredentials, { rejectWithValue }) => {
    try {
      const response = await authService.sendOtp(credentials);
      return { ...response, timestamp: Date.now() };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async (credentials: SendOtpCredentials, { rejectWithValue, getState }) => {
    const state = getState() as { auth: ExtendedAuthState };
    const lastSent = state.auth.lastOtpSentTime;
    if (lastSent && Date.now() - lastSent < 30000) {
      return rejectWithValue("Please wait before requesting a new OTP");
    }
    try {
      const response = await authService.resendOtp(credentials);
      return { ...response, timestamp: Date.now() };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (credentials: VerifyOtpCredentials, { rejectWithValue }) => {
    try {
      const response = await authService.verifyOtp(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// ✅ Add profile setup API action
// export const setupProfile = createAsyncThunk(
//   "auth/setupProfile",
//   async (profileData: SetupProfileCredentials, { rejectWithValue }) => {
//     try {
//       console.log("🚀 setupProfileData:", profileData); // Debug log

//       if (!profileData) {
//         throw new Error("Profile data is missing!");
//       }

//       const response = await authService.setupProfile(profileData);
//       return response; // Backend should return updated user data
//     } catch (error: any) {
//       console.error("❌ setupProfile Error:", error.message);
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const setupProfile = createAsyncThunk(
  "auth/setupProfile",
  async (profileData: FormData, { rejectWithValue }) => {
    try {
      const response = await authService.setupProfile(profileData); // where setupProfile accepts FormData
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);






// export const fetchComments = createAsyncThunk(
//   "auth/fetchComments",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await authService.getComments();
//       return response;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetOtpState: (state) => {
      state.otpSent = false;
      state.otpVerified = false;
      state.error = null;
      state.lastOtpSentTime = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpSent = true;
        state.lastOtpSentTime = action.payload.timestamp;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(resendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpSent = true;
        state.lastOtpSentTime = action.payload.timestamp;
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpVerified = true;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(setupProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setupProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data; // Store updated user data
        state.isAuthenticated = true;
      })
      .addCase(setupProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetOtpState, clearError } = authSlice.actions;
export default authSlice.reducer;
