import axios from './apiClient';
import { ENDPOINTS } from './apiEndpoints';
import axiosInstance from "./apiClient";

export const sendOtp = (data: any) => {
    return axiosInstance.post(ENDPOINTS.sendOtp, data);
};

export const verifyotp = (data: any) => {
    return axiosInstance.post(ENDPOINTS.verifyotp, data);
};
export const setupProflie = (data: any) => {
    return axiosInstance.post(ENDPOINTS.setupProflie, data);
};


export const withdraw = (data: any) => {
    return axiosInstance.post(ENDPOINTS.postWithdraw, data);
};

