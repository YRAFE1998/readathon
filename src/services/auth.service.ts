import { LoginForm } from "../interfaces/loginForm";
import { RegisterForm } from "../interfaces/registerForm";
import { ResetPasswordForm } from "../interfaces/resetPasswordForm";
import { axiosInstance } from "./axiosInstance";
export const register = (data: any) => {
    const newData = JSON.parse(JSON.stringify(data));
    newData.countryCode = "+1";
    const dataAppend = new FormData();
    Object.keys(data).map((v: any) => dataAppend.append(v, data[v]))
    return axiosInstance.post("/api/add/organization", dataAppend);
}
export const login = (data: LoginForm) => {
    return axiosInstance.post("/api/auth/signin", data)
}
export const resetPasswordApi = (data: ResetPasswordForm, token: string) => {

    return axiosInstance.post(`resetpassword/${token}`, data)

}
export const forgetPasswordApi = (data: any) => {
    return axiosInstance.post("/api/forgetpassword/organization", data);
}
