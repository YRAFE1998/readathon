import { LoginForm } from "../interfaces/loginForm";
export const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const forgetPasswordValidation = (state: string, placeholder: string, value: string) => {

    if (state == 'email') {
        if (!value) {
            return "Email Required"
        }
        if (!emailValidation.test(String(value).toLowerCase())) {
            return "Email Not Valid"
        }
    }
    return ""
}

export const forgetPasswordValiadtionForm = (value: LoginForm) => {
    const data = {} as LoginForm
    if (!value.email) {
        data.email = "Email Required"
    }
    if (!emailValidation.test(String(value.email).toLowerCase())) {
        data.email = "Email Not Valid"
    }
    if (value.password && /\s/g.test(value.password)) {
        data.email = "Password Spaces Not Allowed"
    }
    return data;
}