import React, { useState } from 'react'
import { IconsEye } from '../../assets/icons/Auth/icons-eye';
import { ModalFooter, ImportStyle } from "../../HOCS/modalsHocs.styles";
import { ResetPasswordForm } from '../../interfaces/resetPasswordForm';
import { resePasswordValiadtionForm, resetPasswordValidation } from '../../validations/resetPasswordFormValidation';
import InputComponent from '../Input/input';
import { RedBackgroundButton } from '../Lables/redBackgroundButton';

const ChangePasswordInputs = (props: any) => {

    const [form, setForm] = useState<ResetPasswordForm>({})
    const [error, setError] = useState<ResetPasswordForm>({})
    const inputChange = (state: string, placeholder: string, value: string) => {
       
        setForm({ ...form, [state]: value });
    }
    const inputValidation = (state: string, placeholder: string, value: string) => {
        const errorMessage = resetPasswordValidation(state, placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formValid = resePasswordValiadtionForm(form);
        if (formValid.password || formValid.confirmPassword) {
            setError({...error, ...formValid})
        } else {
            props.onSubmit(form)
        }
    }


    const renderInputs = (type: string, state: (keyof ResetPasswordForm), placeholder: string, name: string, Icon: React.FC, required: boolean) => {
        return <InputComponent
            error={error[state]}
            state={form[state]}
            type={type}
            placeholder={placeholder}
            value={form[state]}
            icon={Icon}
            required={required}
            onBlur={(v) => inputValidation(state, name, v)}

            onChange={(v) => inputChange(state, name, v)}
        />
    }
    return (
        <div style={{ padding: "0px 40px" }}>
        <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
        {renderInputs("password", "password", "New Password", "Password", IconsEye, true)}
        </div>
        <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
        {renderInputs("password", "confirmPassword", "Confirm New Password", "Password", IconsEye, true)}
        </div>
        
        <ModalFooter>
            <RedBackgroundButton className="btn-save" onClick={handleSubmit}>{"Change"}</RedBackgroundButton>

        </ModalFooter>
      
    </div>
    )
}

export default ChangePasswordInputs
