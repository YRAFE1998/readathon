import React, { useEffect, useState } from 'react'
import { ModalFooter } from '../../HOCS/modalsHocs.styles'
import { teachers } from '../../Mocks/teachers'
import { ThemeColor } from '../../utils/colors'
import { sendClassValiadtionForm, sendClassValidation } from '../../validations/sendClassFormValidations'
import InputComponent from '../Input/input'
import { RedOutlineButton } from '../Lables/red-outlline-button'
import { RedBackgroundButton } from '../Lables/redBackgroundButton'
import SelectInput from '../Select/select'

 export interface SendClassInterface {
    subject?: string;
    body?: string;

}
const SendClassInputs = (props: any) => {
    const [form, setForm] = useState<SendClassInterface>(props.value || {})
    const [error, setError] = useState<SendClassInterface>({});

    useEffect(() => {
        console.log(props.value);
        if (props.value) {
            setForm(props.value)
        }
    }, [props.value])

    const inputChange = (state: any, placeholder: string, value: string) => {
        const errorMessage = sendClassValidation(state, placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
        setForm({ ...form, [state]: value });

    }

    const inputValidation = (state: any, placeholder: string, value: string) => {
        const errorMessage = sendClassValidation(state, placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
    }
    const handleSubmit = (e: any) => {
        const formValid = sendClassValiadtionForm(form);
        if (formValid.valid) {
            props.submit(form)
        } else {
            setError({ ...error, ...formValid })
        }
    }
    const renderInputs = (type: string, state: (keyof SendClassInterface), placeholder: string, name: string, Icon: any, required: boolean) => {
        return <InputComponent
            error={error[state]}
            state={form[state]}
            type={type}
            placeholder={placeholder}
            value={form[state]}
            icon={Icon}
            onChange={(v) => inputChange(state, name, v)}
            required={required}
            onBlur={(v) => inputValidation(state, name, v)}

        />
    }

    return <div>
           <div style={{ margin: "0px 40px" }}>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("text", "subject", "Subject", "Subject", null, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderInputs("textarea", "body", "Body", "Body", null, true)}
            </div>
           



            <ModalFooter>
                <RedBackgroundButton className="btn-save" onClick={handleSubmit}>Submit</RedBackgroundButton>

            </ModalFooter>



        </div>
   </div>
}

export default SendClassInputs
