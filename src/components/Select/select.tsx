import React, { useState, useEffect, useRef } from 'react'
import { SelectStyleComponent } from "./select.styles";
import { InputPalceholderStyle, InputValidationStyle } from "../Input/input.styles";
import { ThemeColor } from '../../utils/colors';
interface SelectFrom {
    placeholder?: string;
    onBlur?: (v: any) => void;
    onChange: (v: any) => void;
    error?: string;
    state?: string;
    value?: any;
    required?: boolean;
    options?: any;
    label?: string;
    dispalyName?: string;
}
const SelectInput = (props: SelectFrom) => {
    const selectedRef = useRef<HTMLSelectElement>(null)
    const [value, setValue] = useState(props.value || "");

    useEffect(() => {
        const index = props.options?.findIndex((v: any) => v[props?.label || ''] == value);
        setValue(props.options[index]?.[props?.label || ""]);
      
    }, [props.value])
    return (
        <div>
            <InputPalceholderStyle style={{ color: props?.required && props?.error ? `${ThemeColor.colorError}` : "" }}>{props.placeholder} {props?.required && "*"}</InputPalceholderStyle>
            <SelectStyleComponent>
                <select
                    ref={selectedRef}
                    value={value}
                    onBlur={(e) => props?.onBlur && props.onBlur(e.target.value)}
                    onChange={(e) => {
                        setValue(e.target.value)
                        props.onChange(e.target.value);
                    }}
                    style={{ border: props?.required && props?.error ? `1px solid ${ThemeColor.colorError}` : "", }}
                    name="select" id="select" className="select-form">
                    <option value="">{props.placeholder}</option>
                    {
                        props.options?.map((v: any) => <option value={v[props?.label || '']}>{v[props.dispalyName || '']}</option>)
                    }

                </select>
            </SelectStyleComponent>
            <InputValidationStyle>
                {props.error}</InputValidationStyle>

        </div>
    )
}

export default SelectInput
