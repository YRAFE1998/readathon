import React, {useState, useEffect} from 'react'
import { IconEmail } from '../../assets/icons/Auth/icons-at';
import { IconsUser } from '../../assets/icons/Auth/icons-user';
import { ModalFooter } from '../../HOCS/modalsHocs.styles';
import { CampaignInterface } from '../../interfaces/compiagnInterface';
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
        const errorMessage = campaignValidation(state, placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });
        setForm({ ...form, [state]: value });

    }
    const handleSubmit = (e: any) => {
        const formValid = campaignValiadtionForm(form);
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
        />
    }

    const renderSelect = (state: (keyof CampaignInterface), placeholder: string, name: string, required: boolean, label: string, array: any) => {
        return <SelectInput
            value={form[state]}
            state={form[state]}
            error={error[state]}
            placeholder={placeholder}
            required={required}
            label={"id"}
            options={array}
            dispalyName={"firstName"}
            onChange={(v) => inputChange(state, placeholder, v)}
        />
    }

    return (
        <div style={{margin: "0px 40px"}}>
               <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("text", "campaignTitle", "Campaign Title", "Campaign Title", null, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("text", "donationTarget", "Donation Target", "Donation Target", null, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("text", "moneyRaised", "Money Raised", "Money Raised", null, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("text", "targetUnit", "Target Unit", "Target Unit", null, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderInputs("date", "startDate", "Start Date", "Start Date", null, true)}
            </div>
            
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderInputs("date", "endDate", "End Date", "End Date", null, true)}
            </div>
            <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderSelect("campaignType", "Select Campaign Type", "Type", true, "name", [])}
            </div>
            {/* <div className={"inputSpaces"} style={{ marginBottom: "20px" }}>
                {renderSelect("campaignUnit", "Select Campaign Unit", "Unit", true, "name", [])}
            </div> */}

            <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                {renderInputs("textarea", "moneyRaisedReson", "Why are you raising money?", "Why are you raising money?", null, true)}
            </div>
            <ModalFooter>
                <RedBackgroundButton className="btn-save" onClick={handleSubmit}>Add New</RedBackgroundButton>

            </ModalFooter>

        </div>
    )
}

export default CampaignFormInputs
