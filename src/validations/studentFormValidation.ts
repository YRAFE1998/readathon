import { StudentForm } from "../interfaces/studentForm";

export const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const studentsValidation = (state: string, placeholder: string, value: string) => {

    if (state == 'fname') {
        if (!value) {
            return "First Name Required"
        }
       
    }
    if (state == 'teacher_id') {
        if (!value) {
            return "Teacher Required"
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
   
}

export const studentsValiadtionForm = (value: StudentForm) => {
    const data = {} as StudentForm
    if (!value.email) {
        data.email = "Email Required"
    }
    if (!value.teacher_id) {
        data.teacher_id = "Teacher Required"
    }
    if (!value.fname) {
        data.fname = "First Name Required"
    }
    if (!value.lname) {
        data.lname = "Last Name Required"
    }
    if (!emailValidation.test(String(value.email).toLowerCase())) {
        data.email = "Email Not Valid"
    }
   
    const valid = data.email  || data.fname || data.lname ? false : true;
    return { valid: valid, ...data };
    
}