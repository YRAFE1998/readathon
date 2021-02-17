import React, { useState } from 'react'
import { InputStyleComponent, InputValidationStyle, InputPalceholderStyle, MaxSizeStyle } from "./input.styles";
import Icon from "../../assets/icons/Auth/icons-eye.svg";
import { Typeahead } from "react-bootstrap-typeahead";
import { InputInfterface } from '../../interfaces/input';
import { ThemeColor } from '../../utils/colors';
import { countries } from '../../utils/coutries';
import { DeleteIcon } from '../../assets/icons/Main/deleteIcon';
const InputComponent = (props: InputInfterface) => {
    const [value, setvalue] = useState(props.value || "");
    const [seletedCountry, setSelectedCountry] = useState(countries[1]);
    const [passwordType, setPasswordType] = useState("password")
    const IconInput = props.icon as React.FC;

    const renderFile = () => {
        return <>
            <InputStyleComponent style={{ border: "none" }}>
                <label className="input-file" style={{padding: value && "18px", width: value && "110px", height: value && "110px"}} >
                    {!!value && <div className="delteIcon" onClick={(e) => {
                        e.preventDefault();
                        setvalue(null);
                        props.onChange(null);
                    }}><DeleteIcon/></div>}
                    {
                        value ?
                        <img className="imageUpload" src={value} alt="img"/> 
                        :<label htmlFor={`${props.state}file`} >
                        <IconInput />
                    </label>
                    }
                    <input
                        id={`${props.state}file`}
                        type={"file"}
                        style={{ visibility: "hidden" }}
                        hidden={true}
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                let image = e.target.files[0]
                                props?.onChange(e?.target?.files[0] || "");
                                setvalue(URL.createObjectURL(image));
                            }
                        }}
                    />
                </label>

            </InputStyleComponent>
            <InputPalceholderStyle style={{ color: props?.required && props?.error ? `${ThemeColor.colorError}` : "", textAlign: "center" }}>{props.placeholder} {props?.required && "*"}</InputPalceholderStyle>
            <MaxSizeStyle>maxmuim size 5MB</MaxSizeStyle>
            <InputValidationStyle>{props.error}</InputValidationStyle>
        </>

    }
    const getFilteredCountry = () => {
        const index = countries.findIndex((v) => v?.name == seletedCountry?.name);
        return countries.slice((index > 0 ? index : 0), (index > 0 ? index : 0) + 1)
    }
    const renderMobile = () => {
        return <>
            <InputPalceholderStyle style={{ color: props?.required && props?.error ? `${ThemeColor.colorError}` : "" }}>{props.placeholder} {props?.required && "*"}</InputPalceholderStyle>

            <InputStyleComponent style={{ padding: "0px", border: props?.required && props?.error ? `1px solid ${ThemeColor.colorError}` : "", }}>
                <div className={"typeHeadContainer"} >
                    <div className="typeHead">  + 1</div>
                    {/* <Typeahead
                        inputProps={{ className: "typeHead" }}
                        onChange={(selected) => {
                            setSelectedCountry(selected[0]);
                            props?.onChange(`${ selected[0]}${' '}${value}` || "");
                            
                        }}
                        placeholder={"+ 1"}
                        options={countries}
                        filterBy={["dial_code", "name"]}
                        defaultSelected={getFilteredCountry()}
                        labelKey={option => `${option.dial_code}`}
                        id={"phone"}
                    /> */}

                </div>
                <input
                    style={{ width: "60%" }}
                    value={value}
                    onChange={(e) => {
                        props?.onChange(`${e?.target?.value.toString()}` || "");
                        setvalue(`${e?.target?.value.toString()}` || "");
                    }}
                    type={"number"}
                    placeholder={props.placeholder}
                    className="input" />
                <span >
                    <IconInput />
                </span>
            </InputStyleComponent>
            <InputValidationStyle>
                {props.error}</InputValidationStyle>

        </>
    }
    const renderInput = () => {
        return (
            <>
                <InputPalceholderStyle style={{ color: props?.required && props?.error ? `${ThemeColor.colorError}` : "" }}>{props.placeholder} {props?.required && "*"}</InputPalceholderStyle>
                <InputStyleComponent style={{ border: props?.required && props?.error ? `1px solid ${ThemeColor.colorError}` : "" }}>
                    <input
                        value={value}
                        onChange={(e) => {
                            props?.onChange(e?.target?.value || "");
                            setvalue(e?.target?.value);
                        }}
                        type={props.type == 'password' ? passwordType : props.type}
                        placeholder={props.placeholder}
                        className="input" />

                    <span onClick={() => props.type == 'password' && setPasswordType(passwordType == 'password' ? "text" : "password")}>
                        <IconInput />
                    </span>
                </InputStyleComponent>
                <InputValidationStyle>
                    {props.error}</InputValidationStyle>
            </>
        )
    }

    const renderComponent = () => {
        if (props.type == "file") {
            return renderFile()

        } else if (props.type == 'tel') {
            return renderMobile()

        } else {
            return renderInput()
        }
    }

    return (
        <div>
            {renderComponent()}
        </div>
    )
}

export default InputComponent
