import React, {useState} from 'react'
import { LoginStyles } from "../Login/login.styles";
import { IconEmail } from '../../../assets/icons/Auth/icons-at';
import { AuthHeader } from '../../../components/Auth/Header/authHeader'
import { RedButton } from '../../../components/Buttons/redButton';
import InputComponent from "../../../components/Input/input";
import { ForgetPasswordForm } from '../../../interfaces/forgetPasswrod';
import { forgetPasswordValiadtionForm, forgetPasswordValidation } from '../../../validations/forgetPasswordFormValidation';

export const ForgetPassword = () => {
    const [form, setForm] = useState({email: ""})
    const [error, setError] = useState({email: ""})


    const renderInputs = (type: string, state: (keyof ForgetPasswordForm), placeholder: string, name: string, Icon: React.FC, required: boolean) => {
        return <InputComponent
            error={error[state]}
            state={form[state]}
            type={type}
            placeholder={placeholder}
            value={form[state]}
            icon={Icon}
            required={required}
            onChange={(v) => inputChange(state, name, v)}
        />
    }

    const inputChange = (state: string, placeholder: string, value: string) => {
        const errorMessage = forgetPasswordValidation(state, placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
        setForm({ ...form, [state]: value });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formValid = forgetPasswordValiadtionForm(form);
        if (formValid.email) {
            setError({...error, ...formValid})
        } else {
            console.log(form);
            
        }
    }

    return (
        <div>
            <LoginStyles>
                <AuthHeader>Reset your Password</AuthHeader>
                <form onSubmit={handleSubmit}>
                   
                   <div className={"inputSpaces"}>
                       {renderInputs("text", "email", "Email Address", "Email", IconEmail, true)}
                   </div>
                   
                   <div className={"btnSpaces"}>
                       <RedButton type="submit">Change</RedButton>
                   </div>
               </form>
            </LoginStyles>
        </div>
    )
}
