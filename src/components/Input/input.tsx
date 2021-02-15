import React, { useState } from 'react'
import { InputStyleComponent, InputValidationStyle } from "./input.styles";
import Icon from "../../assets/icons/Auth/icons-eye.svg";

import { InputInfterface } from '../../interfaces/input';
const InputComponent = (props: InputInfterface) => {
    const [value, setvalue] = useState(props.value || "");
    const [passwordType, setPasswordType] = useState("password")
    const IconInput = props.icon as React.FC;

    return (
        <div>
            <InputStyleComponent>
                <input
                    value={value}
                    onChange={(e) => {
                        props?.onChange(e?.target?.value || "");
                        setvalue(e?.target?.value);
                    }}
                    type={props.type == 'password' ? passwordType :props.type}
                    placeholder={props.placeholder}
                    className="input" />
                <span onClick={() => props.type == 'password' && setPasswordType(passwordType == 'password' ? "text" : "password")}>
                <IconInput />
                </span>
            </InputStyleComponent>
            <InputValidationStyle>
                {props.error}</InputValidationStyle>
        </div>
    )
}

export default InputComponent
