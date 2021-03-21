import { SendClassInterface } from "../components/Forms/sendClassInputs"

export const sendClassValidation = (state: (keyof SendClassInterface) , placeholder: string, value: string) => {

    if (state == 'body' && !value) {
        return "Body Required"
    }
    if (state == 'subject' && !value) {
        return "Subject Required"
    }
    

    return ""
}

export const sendClassValiadtionForm = (value: SendClassInterface) => {
    const data = {} as SendClassInterface
    if (!value.body) {
        data.body = "Body Required"
    }
    if (!value.subject) {
        data.subject = "Subject Required"
    }
   
     
    const valid = data.body  || data.subject ? false : true;
    
    return { valid: valid, ...data };
}