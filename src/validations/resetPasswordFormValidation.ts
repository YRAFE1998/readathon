
import { ResetPasswordForm } from "../interfaces/resetPasswordForm";
export const resetPasswordValidation = (state: string, placeholder: string, value: string) => {

    if (state == 'password' || state == 'confirmPassword') {
        if (!value) {
            return `${placeholder} Required`
        }
        if (value.length < 6 || value.length > 12) {
            return `${placeholder} Must Atleast Between 6 Character and 12 Character`
        }
        if (/\s/g.test(value)) {
            return `${placeholder} Spaces Not Allowed`
        }
    }
  return ""
}

export const resePasswordValiadtionForm = (value: ResetPasswordForm) => {
    const data = {} as ResetPasswordForm
    if ((value.password && /\s/g.test(value.password))) {
        data.password = "Password Spaces Not Allowed"
    }
    if (value.confirmPassword && /\s/g.test(value.confirmPassword)) {
        data.confirmPassword = "Confirm Password Spaces Not Allowed"
    }
    
    if (value.password && (value.password?.length < 6 || value?.password?.length > 12)) {
        data.password = "password Must Atleast Between 6 Character and 12 Character"
    }
    if (value.confirmPassword && (value.confirmPassword?.length < 6 || value?.confirmPassword?.length > 12)) {
        data.confirmPassword = "Confirm password Must Atleast Between 6 Character and 12 Character"
    }
    if (value.password !== value.confirmPassword) {
        data.confirmPassword = "Password And Confirm Password Not Same"
    }
    if (!value.password) {
        data.password = "Password Required"
    }
    if (!value.confirmPassword) {
        data.confirmPassword = "Confirm Password Required"
    }
    return data;
}