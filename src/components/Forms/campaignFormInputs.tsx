import React, {useState, useEffect} from 'react'
import { IconEmail } from '../../assets/icons/Auth/icons-at';
import { IconsUser } from '../../assets/icons/Auth/icons-user';
import { ModalFooter } from '../../HOCS/modalsHocs.styles';
import { CampaignInterface } from '../../interfaces/compiagnInterface';
import { campaignTypes } from '../../Mocks/campiagns';
import { campaignValiadtionForm, campaignValidation } from '../../validations/campaignFormValid';
import InputComponent from '../Input/input';
import { RedBackgroundButton } from '../Lables/redBackgroundButton';
import SelectInput from '../Select/select';


const CampaignFormInputs = (props: any) => {
    const [form, setForm] = useState<CampaignInterface>(props.value || {})
    const [error, setError] = useState<CampaignInterface>({});

    useEffect(() => {
        console.log(props.value);
        if (props.value) {
            setForm(props.value)
        }
    }, [props.value])

    const inputChange = (state: any, placeholder: string, value: string) => {
        setForm({ ...form, [state]: value });

    }
    useEffect(() => {console.log(form);
    }, [form])
    const inputValidation = (state: (keyof CampaignInterface), placeholder: string, value: string) => {
        
        const errorMessage = campaignValidation(state, placeholder, value, props.status);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
    }

    const handleSubmit = (e: any) => {
        const formValid = campaignValiadtionForm(form, props.status);
        if (formValid.valid) {
            props.submit(form)
        } else {
            setError({ ...error, ...formValid })
        }
    }

    const renderInputs = (type: string, state: (keyof CampaignInterface), placeholder: string, name: string, Icon: any, required: boolean) => {
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

    const renderSelect = (state: (keyof CampaignInterface), placeholder: string, name: string, required: boolean, label: string, array: any) => {
        return <SelectInput
            value={form[state]}
            state={form[state]}
            error={error[state]}
            placeholder={placeholder}
            required={required}
            label={"name"}
            options={array}
            dispalyName={"name"}
            onChange={(v) => inputChange(state, placeholder, v)}
            onBlur={(v) => inputValidation(state, name, v)}

        />
    }

    return (
        <div style={{margin: "0px 40px"}}>
               <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("text", "title", "Campaign Title", "Campaign Title", null, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("number", "targetDonation", "Donation Target", "Donation Target", null, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("number", "targetAchievement", "Target Units", "Donation Target", null, true)}
            </div>
            
           
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderInputs("date", "startDate", "Start Date", "Start Date", null, true)}
            </div>
            
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderInputs("date", "endDate", "End Date", "End Date", null, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderSelect("theType", "Select Campaign Type", "Type", true, "name", campaignTypes)}
            </div>
         

            <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("textarea", "question", "Why are you raising money?", "Why are you raising money?", null, true)}
            </div>
            <ModalFooter>
                <RedBackgroundButton className="btn-save" onClick={handleSubmit}>Add New</RedBackgroundButton>

            </ModalFooter>

        </div>
    )
}

export default CampaignFormInputs
