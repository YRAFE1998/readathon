import React, { useState } from 'react'
import { AuthHeader } from '../../../components/Auth/Header/authHeader'
import { RedButton } from '../../../components/Buttons/redButton';
import InputComponent from "../../../components/Input/input";
import { LoginStyles } from "./login.styles";
import { IconEmail } from '../../../assets/icons/Auth/icons-at';
import { IconsEye } from '../../../assets/icons/Auth/icons-eye';
import { LoginForm } from "../../../interfaces/loginForm";
import { loginValiadtionForm, loginValidation } from '../../../validations/loginFormValidation';
import { useHistory } from 'react-router-dom';
export const Login = () => {
    const [form, setForm] = useState<LoginForm>({})
    const [error, setError] = useState<LoginForm>({})
    const history = useHistory();
    const inputChange = (state: string, placeholder: string, value: string) => {
        const errorMessage = loginValidation(state, placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
        setForm({ ...form, [state]: value });
    }

    const renderInputs = (type: string, state: (keyof LoginForm), placeholder: string, name: string, Icon: React.FC, required: boolean) => {
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
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formValid = loginValiadtionForm(form);
        if (formValid.email || formValid.password) {
            setError({...error, ...formValid})
        } else {
            console.log(form);       
    }
    }
    return (
        <LoginStyles>
            <AuthHeader>Sign in to your account</AuthHeader>
            <div className={"formContainer"}>
                <form onSubmit={handleSubmit}>
                    <div className={"inputSpaces"}>
                        {renderInputs("text", "email", "Enter Your Email", "Email", IconEmail, true)}
                    </div>

                    <div className={"inputSpaces"}>
                        {renderInputs("password", "password", "Enter Your Password", "Password", IconsEye, true)}
                    </div>
                    <div className={"link"} onClick={() => history.push("/auth/forget/")}>
                        Forgot Password?
                </div>

                    <div className={"btnSpaces"}>
                        <RedButton type="submit">Login</RedButton>
                    </div>
                </form>
            </div>
        </LoginStyles>
    )
}


export default Login
