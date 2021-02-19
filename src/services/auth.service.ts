import { LoginForm } from "../interfaces/loginForm";
import { RegisterForm } from "../interfaces/registerForm";
import { axiosInstance } from "./axiosInstance";
export const register = (data: RegisterForm) => {
    const newData = JSON.parse(JSON.stringify(data));
    newData.roles = [ "user"]
    return axiosInstance.post("/api/auth/signup", newData);
}
export const login = (data: LoginForm) => {
    return axiosInstance.post("/api/auth/signin", data)
}