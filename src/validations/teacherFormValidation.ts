import { TeacherForm } from "../interfaces/teacherForm";
export const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const teacherValidation = (state: string, placeholder: string, value: string) => {

    if (state == 'firstName') {
        if (!value) {
            return "First Name Required"
        }
       
    }
    if (state == 'lastName') {
        if (!value) {
            return "Last Name Required"
        }
       
    }
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

export const teacherValiadtionForm = (value: TeacherForm) => {
    const data = {} as TeacherForm
    if (!value.email) {
        data.email = "Email Required"
    }
    if (!value.firstName) {
        data.firstName = "First Name Required"
    }
    if (!value.lastName) {
        data.lastName = "Last Name Required"
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
    const valid = data.email  || data.firstName || data.lastName ? false : true;
    return { valid: valid, ...data };
    
}