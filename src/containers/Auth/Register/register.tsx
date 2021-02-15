import React, {useState} from 'react'
import { RegisterForm } from '../../../interfaces/registerForm'
import { LoginStyles } from '../Login/login.styles'
import {AuthHeader  } from "../../../components/Auth/Header/authHeader";
import InputComponent from "../../../components/Input/input";
import { RedButton } from '../../../components/Buttons/redButton';
import { IconEmail } from '../../../assets/icons/Auth/icons-at';
import { IconsEye } from '../../../assets/icons/Auth/icons-eye';
import { IconsBus } from '../../../assets/icons/Auth/icons-bus';
import { IconsAttach } from '../../../assets/icons/Auth/icons-attach';
import { IconOrganization } from '../../../assets/icons/Auth/icons-organization';
import { IconPhone } from '../../../assets/icons/Auth/icons-phone';
import { IconsUser   } from '../../../assets/icons/Auth/icons-user';
import { registerValiadtionForm, registerValidation } from '../../../validations/registerFormValidation';
export const Register = () => {
    const [form, setForm] = useState<RegisterForm>({})
    const [error, setError] = useState<RegisterForm>({})

    const inputChange = (state: string, placeholder: string, value: string) => {
        const errorMessage = registerValidation(state, placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
        setForm({ ...form, [state]: value });
    }


    const renderInputs = (type: string, state: (keyof RegisterForm), placeholder: string, name: string, Icon: React.FC, required: boolean) => {
        return <InputComponent
            error={error[state]}
            state={form[state]}
            type={type}
            placeholder={placeholder}
            value={form[state]}
            icon={Icon}
            onChange={(v) => inputChange(state, name, v)}
            required={required}
        />
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formValid = registerValiadtionForm(form);
        if (formValid.email || formValid.password || formValid.confirmPassword || formValid.phone || formValid.schoolName || formValid.contactName || formValid.organizationName) {
            setError({...error, ...formValid})
        } else {
            console.log(form);
            
        }
    }

    return (
        <LoginStyles>
            <AuthHeader>Create your Account</AuthHeader>
            <div className={"formContainer"}>
                <form onSubmit={handleSubmit} >
                <div className={"inputSpaces"}>
                        {renderInputs("text", "contactName", "Contact Name", "Contact Name", IconEmail, true)}
                    </div>

                    <div className={"inputSpaces"}>
                        {renderInputs("tel", "phone", "Phone Number", "Phone Number", IconPhone, true)}
                    </div>
                    <div className={"inputSpaces"}>
                        {renderInputs("text", "email", "Enter Your Email", "Email", IconEmail, true)}
                    </div>
                    
                    <div className={"inputSpaces"}>
                        {renderInputs("password", "password", "Password", "Password", IconsEye, true)}
                    </div>
                    
                    <div className={"inputSpaces"}>
                        {renderInputs("password", "confirmPassword", "Confirm Password", "Confirm Password", IconsEye, true)}
                    </div>

                    <div className={"inputSpaces"}>
                        {renderInputs("text", "organizationName", "Organization Name", "Organization Name", IconOrganization, true)}
                    </div>

                    <div className={"inputSpaces"}>
                        {renderInputs("file", "organizationLogo", "Organization Logo", "Organization Logo", IconsAttach, false)}
                    </div>
                    <div className={"inputSpaces"}>
                        {renderInputs("text", "schoolName", "School Name", "School Name", IconsBus, false)}
                    </div>

                    <div className={"inputSpaces"}>
                        {renderInputs("file", "schoolLogo", "School Logo", "School Logo", IconsAttach, false)}
                    </div>
                    
                    <div className={"btnSpaces"}>
                        <RedButton type="submit">Change</RedButton>
                    </div>
                </form>
            </div>
            
        </LoginStyles>
    )
}


export default Register
