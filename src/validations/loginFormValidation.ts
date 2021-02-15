import { LoginForm } from "../interfaces/loginForm";
export const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const loginValidation = (state: string, placeholder: string, value: string) => {

    if (state == 'email') {
        if (!value) {
            return "Email Required"
        }
        if (!emailValidation.test(String(value).toLowerCase())) {
            return "Email Not Valid"
        }
    }
    if (state == 'password') {
        if (!value) {
            return "Password Required"
        }
        if (value.length < 6 || value.length > 12) {
            return "password Must Atleast Between 6 Character and 12 Character"
        }
        if (/\s/g.test(value)) {
            return "Password Spaces Not Allowed"
        }


    }
    return ""
}

export const loginValiadtionForm = (value: LoginForm) => {
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
    if (!value.password) {
        data.password = "Password Required"
    }
    if (value.password && (value.password?.length < 6 || value?.password?.length > 12)) {
        data.password = "password Must Atleast Between 6 Character and 12 Character"
    }
    return data;
}