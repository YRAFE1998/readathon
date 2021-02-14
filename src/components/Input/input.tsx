import React from 'react'
import { InputStyleComponent } from "./input.styles";
import Icon from "../../assets/icons/Auth/icons-eye.svg";
import { IconEmail } from '../../assets/icons/Auth/icons-at';
import { InputInfterface } from '../../interfaces/input';
const InputComponent = ( props : InputInfterface) => {
    return (
        <InputStyleComponent>
            <input type="text" placeholder="Enter your password" className="input" />
            <IconEmail/>

        </InputStyleComponent>
    )
}

export default InputComponent
