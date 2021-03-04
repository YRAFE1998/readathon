import React, { useEffect, useState } from 'react'
import { IconEmail } from '../../assets/icons/Auth/icons-at'
import { IconsUser } from '../../assets/icons/Auth/icons-user'
import { StudentForm } from '../../interfaces/studentForm'
import { studentsValiadtionForm, studentsValidation } from '../../validations/studentFormValidation'
import InputComponent from '../Input/input'
import { ModalFooter, ImportStyle } from "../../HOCS/modalsHocs.styles";
import { RedBackgroundButton } from '../Lables/redBackgroundButton'
import { RedOutlineButton } from '../Lables/red-outlline-button'
import SelectInput from '../Select/select'

const StudentFormInputs = (props: any) => {
    const [form, setForm] = useState<StudentForm>(props.value || {})
    const [error, setError] = useState<StudentForm>({});

    useEffect(() => {
        console.log(props.value);
        if (props.value) {
            setForm(props.value)
        }
    }, [props.value])

    const inputChange = (state: string, placeholder: string, value: string) => {
        const errorMessage = studentsValidation(state, placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
        setForm({ ...form, [state]: value });

    }
    const handleSubmit = (e: any) => {
        const formValid = studentsValiadtionForm(form);
        if (formValid.valid) {
            props.submit(form)
        } else {
            setError({ ...error, ...formValid })
        }
    }
    const renderInputs = (type: string, state: (keyof StudentForm), placeholder: string, name: string, Icon: React.FC, required: boolean) => {
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
    const renderSelect = (state: (keyof StudentForm), placeholder: string, name: string, required: boolean, label: string) => {
        return <SelectInput
            value={form[state]}
            state={form[state]}
            error={error[state]}
            placeholder={placeholder}
            required={required}
            label={"Id"}
            options={props.teachers}
            dispalyName={"fname"}
            onChange={(v) => inputChange(state, placeholder, v)}
        />
    }

    return (
        <div style={{ padding: "0px 40px" }}>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("text", "fname", "First Name", "First Name", IconsUser, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderInputs("text", "lname", "Last Name", "Last Name", IconsUser, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderInputs("text", "email", "Email", "Email", IconEmail, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderSelect("teacher_id", "Select Teacher", "Teacher", true, "fname")}
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

                        <RedOutlineButton className="btn-imp">Import Student</RedOutlineButton>
                    </div>
                </ImportStyle>
            }
        </div>
    )
}

export default StudentFormInputs
