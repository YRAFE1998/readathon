import React, { useContext, useEffect, useState } from 'react'

import { RegisterForm } from '../../interfaces/registerForm'
import { LoginStyles } from '../Auth/Login/login.styles'
import { AuthHeader } from "../../components/Auth/Header/authHeader";
import InputComponent from "../../components/Input/input";
import { RedButton } from '../../components/Buttons/redButton';
import { IconEmail } from '../../assets/icons/Auth/icons-at';
import { IconsEye } from '../../assets/icons/Auth/icons-eye';
import { IconsBus } from '../../assets/icons/Auth/icons-bus';
import { IconsAttach } from '../../assets/icons/Auth/icons-attach';
import { IconOrganization } from '../../assets/icons/Auth/icons-organization';
import { IconPhone } from '../../assets/icons/Auth/icons-phone';
import { registerValiadtionForm, registerValidation, ValidationSection } from '../../validations/registerFormValidation';
import { CollapseHoc } from '../../HOCS/collapseHoc';
import { profileOrginazationSteps } from '../../utils/registerSteps';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../Context/authContext';
import { updateProfileOrganization } from '../../services/profile.service';
import { baseURL } from '../../utils/baseUrl';

const Profile = () => {
    const [form, setForm] = useState<RegisterForm>({})
    const [error, setError] = useState<RegisterForm>({})
    const [steps, setSteps] = useState(profileOrginazationSteps);
    const { user, saveUser } = useContext<any>(UserContext);
    useEffect(() => {
        const userData = JSON.parse(JSON.stringify(user));
        userData.countryCode = "+1";
        userData.confirmPassword = "Asd123@@"
        userData.password = "Asd123@@";
        userData.organizationLogo = `${baseURL}/${user.organizationLogo}`
        userData.schoolLogo = `${baseURL}/${user.schoolLogo}`

        setForm({ ...form, ...userData })
    }, [])

    const inputChange = (state: string, placeholder: string, value: string) => {
       
        setForm({ ...form, [state]: value });
    }

    const inputValidation = (state: string, placeholder: string, value: string) => {
        const errorMessage = registerValidation(JSON.parse(JSON.stringify(state)), placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
        setSteps(ValidationSection({ ...form, [state]: value }, { ...error, [state]: errorMessage }, steps))

    }

    const fileView = (state: (keyof RegisterForm)) => {
       if (form[state]) {
        if (typeof form[state] === 'string') {
            return form[state]
        } else {
            URL.createObjectURL(form[state])
        }
       }
        
    }
    const renderInputs = (type: string, state: (keyof RegisterForm), placeholder: string, name: string, Icon: React.FC, required: boolean) => {
        return <InputComponent
            error={error[state]}
            state={form[state]}
            type={type}
            placeholder={placeholder}
            value={type == "file" ?  fileView(state) :form[state]}
            icon={Icon}
            onChange={(v) => inputChange(state, name, v)}
            onBlur={(v) => inputValidation(state, name, v)}
            required={required}
        />
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formValid = registerValiadtionForm(form);
        if (formValid.valid) {
            updateProfileOrganization(form).then((Res) => {
                const userData = JSON.parse(JSON.stringify(form));
                userData.confirmPassword = user.confirmPassword;
                userData.password = user.password;
                saveUser(userData);
            })
        } else {
            setError({ ...error, ...formValid })

        }
    }
    const stepsHandler = (index: number, status: boolean) => {
        const newSteps = steps.slice();
        newSteps[index].open = status;
        setSteps(newSteps);
    }
    const handleNextStep = (index: number) => {
        stepsHandler(index, false)
        setTimeout(() => stepsHandler(index, true), 1);
    }

    return (
        <Container>
            <LoginStyles>
                <form onSubmit={handleSubmit} >
                    <CollapseHoc header={"Account Information"} onClickNextStep={() => handleNextStep(1)} stepConfig={steps[0]}>
                        <div className={"inputSpaces"}>
                            {renderInputs("text", "name", "Contact Name", "Contact Name", IconEmail, true)}
                        </div>

                        <div className={"inputSpaces"}>
                            {renderInputs("tel", "mobileNumber", "Phone Number", "Phone Number", IconPhone, true)}
                        </div>

                    </CollapseHoc>
                    <CollapseHoc header={"Login Information"} stepConfig={steps[1]} onClickNextStep={() => handleNextStep(2)}>
                        <div className={"inputSpaces"} >
                            {renderInputs("text", "email", "Enter Your Email", "Email", IconEmail, true)}
                        </div>

                    </CollapseHoc>

                    <CollapseHoc header={"Organization Information"} stepConfig={steps[2]}>

                        <div className={"inputSpaces"}>
                            {renderInputs("file", "organizationLogo", "Organization Logo", "Organization Logo", IconsAttach, false)}
                        </div>
                        <div className={"inputSpaces"}>
                            {renderInputs("text", "organizationName", "Organization Name", "Organization Name", IconOrganization, true)}
                        </div>

                        <div className={"inputSpaces"}>
                            {renderInputs("file", "schoolLogo", "School Logo", "School Logo", IconsAttach, false)}
                        </div>

                        <div className={"inputSpaces"}>
                            {renderInputs("text", "schoolName", "School Name", "School Name", IconsBus, false)}
                        </div>

                    </CollapseHoc>

                    <div className={"btnSpaces"}>
                        <RedButton type="submit">Save </RedButton>
                    </div>
                </form>
            </LoginStyles>
        </Container>
    )
}

export default Profile
