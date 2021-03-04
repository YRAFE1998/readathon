import { TeacherForm } from "../interfaces/teacherForm";
export const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const teacherValidation = (state: string, placeholder: string, value: string) => {

    if (state == 'fname') {
        if (!value) {
            return "First Name Required"
        }
       
    }
    if (state == 'lname') {
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
    
    return ""
}

export const teacherValiadtionForm = (value: TeacherForm) => {
    const data = {} as TeacherForm
   
    if (!value.fname) {
        data.fname = "First Name Required"
    }
    if (!value.lname) {
        data.lname = "Last Name Required"
    }
    if (!emailValidation.test(String(value.email).toLowerCase())) {
        data.email = "Email Not Valid"
    }
    if (!value.email) {
        data.email = "Email Required"
    }
   
    const valid = data.email  || data.fname || data.lname ? false : true;
    return { valid: valid, ...data };
    
}