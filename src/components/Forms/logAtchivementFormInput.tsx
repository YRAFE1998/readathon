import React, { useState, useEffect } from 'react'
import { ModalFooter } from '../../HOCS/modalsHocs.styles';
import { LogAchivementInterface } from '../../interfaces/logAchivementsInterface';
import { logAchivementValiadtionForm, logAchivementValidation } from '../../validations/logAchivementsFormVallidations';
import InputComponent from '../Input/input';
import { RedBackgroundButton } from '../Lables/redBackgroundButton';
import SelectInput from '../Select/select';

const LogAtchivementFormInput = (props: any) => {
    const [form, setForm] = useState<LogAchivementInterface>(props.value || {})
    const [error, setError] = useState<LogAchivementInterface>({});

    useEffect(() => {
        console.log(props.value);
        if (props.value) {
            setForm(props.value)
        }
    }, [props.value])

    const inputChange = (state: any, placeholder: string, value: string) => {
        const errorMessage = logAchivementValidation(state, placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
        setForm({ ...form, [state]: value });

    }

    const inputValidation = (state: any, placeholder: string, value: string) => {
        const errorMessage = logAchivementValidation(state, placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
    }
    const handleSubmit = (e: any) => {
        const formValid = logAchivementValiadtionForm(form);
        if (formValid.valid) {
            props.submit(form)
        } else {
            setError({ ...error, ...formValid })
        }
    }
    const renderInputs = (type: string, state: (keyof LogAchivementInterface), placeholder: string, name: string, Icon: any, required: boolean) => {
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
    const renderSelect = (state: (keyof LogAchivementInterface), placeholder: string, name: string, required: boolean, label: string) => {
        return <SelectInput
            value={form[state]}
            error={error[state]}
            state={form[state]}
            placeholder={placeholder}
            required={required}
            label={"Id"}
            options={[{ name: "Minutes", Id: "1" }, { name: "Donation", Id: "2" }]}

            dispalyName={"name"}
            onChange={(v) => inputChange(state, name, v)}
        />
    }

    return (
        <div style={{ margin: "0px 40px" }}>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("date", "date", "Date", "Date", null, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderInputs("number", "achievement", "Achivement", "Achivement", null, true)}
            </div>
           



            <ModalFooter>
                <RedBackgroundButton className="btn-save" onClick={handleSubmit}>Add New</RedBackgroundButton>

            </ModalFooter>



        </div>
    )
}

export default LogAtchivementFormInput
