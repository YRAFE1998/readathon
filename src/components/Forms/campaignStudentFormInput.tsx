import React, {useState, useEffect} from 'react'
import { CampaignStudentInterface } from '../../interfaces/campaignStudentInterface';
import { campaignValidation, campaignValiadtionForm } from '../../validations/campaignFormValid';          
import { ModalFooter, ImportStyle } from "../../HOCS/modalsHocs.styles";
import { RedBackgroundButton } from '../Lables/redBackgroundButton'
import SelectInput from '../Select/select'
import { students } from '../../Mocks/students';

const CampaignStudentFormInput = (props: any) => {
    const [form, setForm] = useState<CampaignStudentInterface>(props.value || {})
    const [error, setError] = useState<CampaignStudentInterface>({});

    useEffect(() => {
        console.log(props.value);
        if (props.value) {
            setForm(props.value)
        }
    }, [props.value])

    const inputChange = (state: any, placeholder: string, value: string) => {
      
        setForm({ ...form, [state]: value });

    }

    const inputValidation = (state: any, placeholder: string, value: string) => {
        const errorMessage = campaignValidation(state, placeholder, value , "add");
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
    }
    
    const handleSubmit = (e: any) => {
        const formValid = campaignValiadtionForm(JSON.parse(JSON.stringify(form)), "add");
        if (formValid.valid) {
            props.submit(form)
        } else {
            setError({ ...error, ...formValid })
        }
    }
    const renderSelect = (state: (keyof CampaignStudentInterface), placeholder: string, name: string, required: boolean, label: string) => {
        return <SelectInput
            value={form[state]}
            state={form[state]}
            error={error[state]}
            placeholder={placeholder}
            required={required}
            label={"id"}
            options={students}
            dispalyName={"firstName"}
            onChange={(v) => inputChange(state, placeholder, v)}
            onBlur={(v) => inputValidation(state, name, v)}

        />
    }
    
    return (
        <div style={{margin: "0px 40px"}}>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderSelect("studentId", "Select Student", "Student", true, "firstName")}
            </div>
        </div>
    )
}

export default CampaignStudentFormInput
