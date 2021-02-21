import React, { useEffect, useState } from 'react'
import { IconEmail } from '../../assets/icons/Auth/icons-at'
import { IconsUser } from '../../assets/icons/Auth/icons-user'
import { TeacherForm } from '../../interfaces/teacherForm'
import { teacherValiadtionForm, teacherValidation } from '../../validations/teacherFormValidation'
import InputComponent from '../Input/input'
import { ModalFooter, ImportStyle } from "../../HOCS/modalsHocs.styles";
import { RedBackgroundButton } from '../Lables/redBackgroundButton'
import { RedOutlineButton } from '../Lables/red-outlline-button'

const TeacherInputForm = (props: any) => {
    const [form, setForm] = useState<TeacherForm>(props.value || {})
    const [error, setError] = useState<TeacherForm>({});

    useEffect(() => {
        console.log(props.value);
        if (props.value) {
            setForm(props.value)
        }
    }, [props.value])

    const inputChange = (state: string, placeholder: string, value: string) => {
        const errorMessage = teacherValidation(state, placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
        setForm({ ...form, [state]: value });

    }
    const handleSubmit = (e: any) => {
        debugger;
        const formValid = teacherValiadtionForm(form);
        if (formValid.valid) {
            props.submit(form)
        } else {
            setError({...error, ...formValid})
        }
    }
    const renderInputs = (type: string, state: (keyof TeacherForm), placeholder: string, name: string, Icon: React.FC, required: boolean) => {
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

    return (
        <div style={{ padding: "0px 40px" }}>
            <div className={"inputSpaces"} style={{marginBottom: "20px"}} >
                {renderInputs("text", "firstName", "First Name", "First Name", IconsUser, true)}
            </div>
            <div className={"inputSpaces"} style={{marginBottom: "20px"}}>
                {renderInputs("text", "lastName", "Last Name", "Last Name", IconsUser, true)}
            </div>
            <div className={"inputSpaces"} style={{marginBottom: "20px"}}>
                {renderInputs("text", "email", "Email", "Email", IconEmail, true)}
            </div>

            <ModalFooter>
                <RedBackgroundButton className="btn-save" onClick={handleSubmit}>Add New</RedBackgroundButton>

            </ModalFooter>
            {
                !!props.importBtn && <ImportStyle>
                    <div className="or-continer">
                        <div></div>
                        <span>OR</span>
                        <div></div>
                    </div>
                    <div className="text-center import-btn">

                        <RedOutlineButton className="btn-imp">Import Teacher</RedOutlineButton>
                    </div>
                </ImportStyle>
            }
        </div>
    )
}

export default TeacherInputForm
