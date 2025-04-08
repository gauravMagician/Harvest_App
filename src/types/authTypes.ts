// types/authtypes.ts
export interface User {
  id: string;
  email: string;
  name: string;
  token: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface VerifyOtpCredentials {
  // Capitalized to follow TypeScript convention
  mobile: string;
  otp: string;
}

export interface SignupCredentials extends LoginCredentials {
  name: string;
}

export interface ResetPasswordCredentials {
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
  statusCode?: number;
  success: string;
}
export interface SetupProfileCredentials {
  userName: string;
  dob: string;
  gender: string;
  phoneNumber: string;
  referralCode?: string;
  bio?: string;
  isPublic: boolean;
  profileImage?: { uri: string; name: string; type: string };
}
export interface SetupProfileData {
  userName: string;
  dob: string;
  gender: string;
  phoneNumber: string;
  referralCode?: string;
  bio?: string;
  isPublic: boolean;
  profileImage?: {
    uri: string;
    name: string;
    type: string;
  };
}
