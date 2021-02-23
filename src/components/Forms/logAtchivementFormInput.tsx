import React, {useState, useEffect} from 'react'
import { ModalFooter } from '../../HOCS/modalsHocs.styles';
import { LogAchivementInterface } from '../../interfaces/logAchivementsInterface';
import { logAchivementValiadtionForm, logAchivementValidation } from '../../validations/logAchivementsFormVallidations';
import InputComponent from '../Input/input';
import { RedBackgroundButton } from '../Lables/redBackgroundButton';

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
    const handleSubmit = (e: any) => {
        debugger;
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
        />
    }

    return (
        <div style={{margin: "0px 40px"}}>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("date", "date", "Date", "Date", null, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderInputs("number", "achivement", "Achivement", "Achivement", null, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderInputs("text", "desc", "Desriptions", "Desriptions", null, true)}
            </div>

            
            <ModalFooter>
                <RedBackgroundButton className="btn-save" onClick={handleSubmit}>Add New</RedBackgroundButton>

            </ModalFooter>

            

        </div>
    )
}

export default LogAtchivementFormInput
