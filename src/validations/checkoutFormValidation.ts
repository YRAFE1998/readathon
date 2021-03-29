import { CheckoutInterface } from "../components/Forms/checkoutForms";
export const checkoutValidation = (state: (keyof CheckoutInterface) , placeholder: string, value: string) => {

    if (state == 'amount' && !value) {
        return "Amount Required"
    }
    if (state == 'amount' && value.length > 4 ) {
        return "Amount Must Less Than 4 Digit"
    }
    if (state == 'email' && !value) {
        return "Email Required"
    }
    if (state == 'lname' && !value) {
        return "Last Name Required"
    }
    if (state == 'fname' && !value) {
        return "First Name Required"
    }

    return ""
}

export const checkoutValiadtionForm = (value: CheckoutInterface) => {
    const data = {} as CheckoutInterface
    if (!value.amount) {
        data.amount = "Amount Required"
    }
    if (value.amount > 4) {
        data.amount = "Amount Must Less Than 4 Digit"
    }
    if (!value.email) {
        data.email = "Email Required"
    }
    if (!value.lname) {
        data.lname = "Last Name Required"

    }
    if (!value.fname) {
        data.fname = "First Name Required"
    }
     
    const valid = data.amount || data.email || data.lname || data.fname ? false : true;
    
    return { valid: valid, ...data };
}