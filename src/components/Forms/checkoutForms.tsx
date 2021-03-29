import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import { IconsEye } from '../../assets/icons/Auth/icons-eye';
import { ModalFooter, ImportStyle } from "../../HOCS/modalsHocs.styles";
import { addPaymentApi } from '../../services/profile.service';
import { checkoutValidation, checkoutValiadtionForm } from '../../validations/checkoutFormValidation';
import InputComponent from '../Input/input';
import { RedBackgroundButton } from '../Lables/redBackgroundButton';

export interface CheckoutInterface {
    lname?: string;
    fname?: string;
    email?: string;
    amount?: any;
}
interface checkoutFormProps {
    campaignId: string;
    studentId: string;
}
const CheckutForm = (props: checkoutFormProps) => {
    const stripe = useStripe();
    const elements = useElements();

    const [form, setForm] = useState<CheckoutInterface>({})
    const [error, setError] = useState<CheckoutInterface>({})
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const formValid = checkoutValiadtionForm(form);
        if (formValid.valid) {
            const cardElement = elements.getElement(CardElement);
            if (cardElement) {
                const { token } = await stripe.createToken(cardElement);
                console.log(token);
                const data = {
                    stripeToken: token?.id,
                    fname: form.fname,
                    lname: form.lname,
                    stripeEmail: form.email,
                    amount: form.amount,
                    email: form.email
                };
                addPaymentApi(data, props.studentId, props.campaignId).then((Res) => {
                    console.log(Res);
                })

            }
        } else {
            setError({...error, ...formValid})

        }



    };


    const inputChange = (state: string, placeholder: string, value: string) => {

        setForm({ ...form, [state]: value });
    }

    const inputValidation = (state: any, placeholder: string, value: string) => {
        const errorMessage = checkoutValidation(state, placeholder, value);
        if (errorMessage) setError({ ...error, [state]: errorMessage })
        else setError({ ...error, [state]: "" });

    }


    const renderInputs = (type: string, state: (keyof CheckoutInterface), placeholder: string, name: string, Icon: any, required: boolean) => {
        return <InputComponent
            error={error[state]}
            state={form[state]}
            type={type}
            placeholder={placeholder}
            value={form[state]}
            icon={Icon}
            required={required}
            onChange={(v) => inputChange(state, name, v)}
            onBlur={(v) => inputValidation(state, name, v)}

        />
    }
    return (
        <div style={{ padding: "0px 40px" }}>

            <form onSubmit={handleSubmit}>
                <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                    {renderInputs("text", "email", "Email", "Email", null, true)}
                </div>
                <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                    {renderInputs("text", "fname", "FirstName", "FirstName", null, true)}
                </div>

                <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                    {renderInputs("text", "lname", "Last Name", "Last Name", null, true)}
                </div>

                <div className={"inputSpaces"} style={{ marginBottom: "20px" }} >
                    {renderInputs("number", "amount", "Amont", "Amont", null, true)}
                </div>
                <div>
                    <label style={{ color: "#666666" }}>Card Info *</label>

                </div>
                <div className={"inputSpaces"}
                    style={{
                        marginBottom: "20px",
                        border: "1px solid #dee2e6",
                        borderRadius: "7px",
                        padding: "29px",
                    }} >

                    <CardElement />
                </div>




                <ModalFooter>
                    <RedBackgroundButton className="btn-save" type="submit"
                        disabled={!stripe }
                        onClick={handleSubmit}>{"Pay Now"}</RedBackgroundButton>

                </ModalFooter>
            </form>

        </div >
    )
}

export default CheckutForm
