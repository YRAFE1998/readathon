import { RegisterForm } from "../interfaces/registerForm";
export const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const registerValidation = (state: (keyof RegisterForm), placeholder: string, value: string) => {

    if (state == 'email') {
        if (!value) {
            return "Email Required"
        }
        if (!emailValidation.test(String(value).toLowerCase())) {
            return "Email Not Valid"
        }
    }

    if (state == 'organizationName' || state == 'name') {
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
    if (state == 'mobileNumber') {
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


    if (value.name && (value.name?.length < 4 || value?.name?.length > 80)) {
        data.name = "Contact Name Must Atleast Between 6 Character and 80 Character"
    }
    if (value.password !== value.confirmPassword) {
        data.confirmPassword = "Password And Confirm Password Not Same"
    }
    if (!value.mobileNumber) {
        data.mobileNumber = "Phone Number Required"
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

    if (!value.name) {
        data.name = "Contact Name Required"
    }
    if (!value.email) {
        data.email = "Email Required"
    }

    const valid = data.email || data.password || data.confirmPassword || data.mobileNumber || data.schoolName || data.name || data.organizationName ? false : true;
    return { valid: valid, ...data };
}

export const ValidationSection = (states: RegisterForm, error: RegisterForm, steps: any) => {
    let newStep = steps.slice();
    if (!states.mobileNumber || !states.name || !error.name || !error.mobileNumber) {
        newStep[0] = { borderLess: false, nextStep: false, complate: false, step: 1, open: steps[0].open };
    }

    if (states.mobileNumber && states.name && !error.name && !error.mobileNumber) {
        newStep[0] = { borderLess: false, nextStep: true, complate: true, step: 1, open: steps[0].open };
        newStep[1].open = true;
    }

    if (!states.email || !states.password || !states.confirmPassword || error.confirmPassword || error.password || error.email) {
        newStep[1] = { borderLess: false, nextStep: false, complate: false, step: 2, open: steps[1].open };
    }

    if (states.email && states.password && states.confirmPassword && !error.confirmPassword && !error.password && !error.email) {
        newStep[1] = { borderLess: false, nextStep: true, complate: true, step: 2, open: steps[1].open };
        newStep[2].open = true;
    }

    if (!states.organizationName || !states.organizationLogo || !states.schoolName || !states.schoolLogo || error.schoolName || error.organizationLogo || error.organizationName || error.schoolLogo) {
        newStep[2] = { borderLess: true, nextStep: false, complate: false, step: 3, open: steps[2].open };
    }

    if (states.organizationName && states.organizationLogo && states.schoolName && states.schoolLogo && !error.schoolName && !error.organizationLogo && !error.organizationName && !error.schoolLogo) {
        newStep[2] = { borderLess: true, nextStep: false, complate: true, step: 3, open: steps[2].open };
    }
    return newStep;
}