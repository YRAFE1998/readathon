import { RegisterForm } from "../interfaces/registerForm";
export const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const registerValidation = (state: string, placeholder: string, value: string) => {

    if (state == 'email') {
        if (!value) {
            return "Email Required"
        }
        if (!emailValidation.test(String(value).toLowerCase())) {
            return "Email Not Valid"
        }
    }

    if (state == 'organizationName'  || state == 'contactName') {
        if (!value) {
            return `${placeholder} Required`
        }
        if (value.length < 4 || value.length > 80) {
            return `${placeholder} Must Atleast Between 4 Character and 80 Character`
        }

    }

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
    if (state == 'phone') {
        if (!value) {
            return `${placeholder} Required`
        }
        
    }

    return ""
}

export const registerValiadtionForm = (value: RegisterForm) => {
    const data = {} as RegisterForm
   
    if (!emailValidation.test(String(value.email).toLowerCase())) {
        data.email = "Email Not Valid"
    }
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
   
    
    if (value.organizationName && (value.organizationName?.length < 4 || value?.organizationName?.length > 80)) {
        data.organizationName = "Organization Name Must Atleast Between 4 Character and 80 Character"
    }
   
    
    if (value.contactName && (value.contactName?.length < 4 || value?.contactName?.length > 80)) {
        data.contactName = "Contact Name Must Atleast Between 6 Character and 80 Character"
    }
    if (value.password !== value.confirmPassword) {
        data.confirmPassword = "Password And Confirm Password Not Same"
    }
    if (!value.phone)  {
        data.phone = "Phone Number Required"
    }
    if (!value.password) {
        data.password = "Password Required"
    }
    if (!value.confirmPassword) {
        data.confirmPassword = "Confirm Password Required"
    }
    if (!value.organizationName) {
        data.organizationName = "Organization Name Required"
    }
    
    if (!value.contactName) {
        data.contactName = "Contact Name Required"
    }
    if (!value.email) {
        data.email = "Email Required"
    }
   

    return data;
}

export const ValidationSection = (states: RegisterForm, error: RegisterForm, steps: any) =>{
    let newStep = steps.slice();
    if (!states.phone || !states.contactName || !error.contactName || !error.phone) {
        newStep[0] =  {borderLess: false, nextStep: false, complate: false, step: 1, open: steps[0].open};
     }
  
    if (states.phone && states.contactName && !error.contactName && !error.phone) {
       newStep[0] =  {borderLess: false, nextStep: true, complate: true, step: 1, open: steps[0].open};
       newStep[1].open = true;
    }
    
    if (!states.email || !states.password || !states.confirmPassword || error.confirmPassword || error.password || error.email) {
        newStep[1] =  {borderLess: false, nextStep: false, complate: false, step: 2, open: steps[1].open};
    }
    
    if (states.email && states.password && states.confirmPassword && !error.confirmPassword && !error.password && !error.email) {
        newStep[1] =  {borderLess: false, nextStep: true, complate: true, step: 2, open: steps[1].open};
        newStep[2].open = true;
    }

    if (!states.organizationName || !states.organizationLogo || !states.schoolName || !states.schoolLogo || error.schoolName || error.organizationLogo || error.organizationName || error.schoolLogo) {
        newStep[2] =  {borderLess: true, nextStep: false, complate: false, step: 3, open: steps[2].open};
    }

    if (states.organizationName && states.organizationLogo && states.schoolName && states.schoolLogo && !error.schoolName && !error.organizationLogo && !error.organizationName && !error.schoolLogo) {
        newStep[2] =  {borderLess: true, nextStep: false, complate: true, step: 3, open: steps[2].open};
    }
return newStep;
}