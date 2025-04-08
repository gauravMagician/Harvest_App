import axios from './apiClient';
import { ENDPOINTS } from './apiEndpoints';
// export const sendOtp = (data: any) => {
//     return axios.post(ENDPOINTS.sendOtp, data);
// };
import axiosInstance from "./apiClient";

export const sendOtp = (data: any) => {
    return axiosInstance.post(ENDPOINTS.sendOtp, data);
};


export const verifyotp = (data: any) => {
    return axios.post(ENDPOINTS.verifyotp, data);
};
export const setupProflie = (data: any) => {
    return axios.post(ENDPOINTS.setupProflie, data);
};

