import React from 'react'
import { AuthHeader } from '../../../components/Auth/Header/authHeader'
import { RedButton } from '../../../components/Buttons/redButton';
import InputComponent from "../../../components/Input/input";
import { LoginStyles } from "./login.styles";
export const Login = () => {
    return (
        <LoginStyles>
            <AuthHeader>Sign in to your account</AuthHeader>
            <div className={"formContainer"}>
                <div className={"inputSpaces"}>
                    <InputComponent />
                </div>

                <div className={"inputSpaces"}>
                    <InputComponent />
                </div>

                <div className={"link"}>
                Forgot Password?
                </div>

                <div className={"btnSpaces"}>
                    <RedButton>Login</RedButton>
                </div>


            </div>
        </LoginStyles>
    )
}


export default Login
