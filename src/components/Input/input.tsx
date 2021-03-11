import React, { useEffect, useRef, useState } from 'react'
import { InputStyleComponent, TextAreaStyle, InputValidationStyle, InputPalceholderStyle, MaxSizeStyle } from "./input.styles";
import Icon from "../../assets/icons/Auth/icons-eye.svg";
import { Typeahead } from "react-bootstrap-typeahead";
import { InputInfterface } from '../../interfaces/input';
import { ThemeColor } from '../../utils/colors';
import { countries } from '../../utils/coutries';
import { DeleteIcon } from '../../assets/icons/Main/deleteIcon';
import moment from 'moment';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import IconsCalendar from '../../assets/icons/Main/icons-calendar';
import numeral from 'numeral';
const InputComponent = (props: InputInfterface) => {
    const [value, setvalue] = useState(props.value || "");
    const [seletedCountry, setSelectedCountry] = useState(countries[1]);
    const [passwordType, setPasswordType] = useState("password")
    const [openDate, setOpenDate] = useState(false);
    const IconInput = props.icon ? props.icon as React.FC : null;
    useEffect(() => {
        setvalue(props.value)
    }, [props.value])
    const renderFile = () => {
        return <>
            <InputStyleComponent style={{ border: "none" }}>
                <label className="input-file" style={{ padding: value && "18px", width: value && "110px", height: value && "110px" }} >
                    {!!value && <div className="delteIcon" onClick={(e) => {
                        e.preventDefault();
                        setvalue(null);
                        props.onChange(null);
                    }}><DeleteIcon /></div>}
                    {
                        value ?
                            <img className="imageUpload" src={value} alt="img" />
                            : <label htmlFor={`${props.state}file`} >
                                {IconInput && <IconInput />}
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
    const renderTextArea = () => {
        return <>
            <InputPalceholderStyle style={{ color: props?.required && props?.error ? `${ThemeColor.colorError}` : "" }}>{props.placeholder} {props?.required && "*"}</InputPalceholderStyle>

            <TextAreaStyle
                value={value}
                onChange={(e) => {
                    props?.onChange(e?.target?.value || "");
                    setvalue(e?.target?.value);
                }}
                style={{ width: "100%", border: props?.required && props?.error ? `1px solid ${ThemeColor.colorError}` : "" }}
                placeholder={props.placeholder}
                onBlur={(e) => props.onBlur && props.onBlur(e?.target?.value)}

            >



            </TextAreaStyle>
            <InputValidationStyle>
                {props.error}</InputValidationStyle>

        </>
    }
    const renderMobile = () => {
        return <>
            <InputPalceholderStyle style={{ color: props?.required && props?.error ? `${ThemeColor.colorError}` : "" }}>{props.placeholder} {props?.required && "*"}</InputPalceholderStyle>

            <InputStyleComponent style={{ padding: "0px", border: props?.required && props?.error ? `1px solid ${ThemeColor.colorError}` : "", }}>
                <div className={"typeHeadContainer"} >
                    <div className="typeHead">  + 1</div>
                </div>
                <input
                    style={{ width: "60%" }}
                    value={value}
                    onChange={(e) => {
                        props?.onChange(`${e?.target?.value.toString()}` || "");
                        setvalue(`${e?.target?.value.toString()}` || "");
                    }}
                    onBlur={(e) => props.onBlur && props.onBlur(`${e?.target?.value.toString()}` || "")}

                    type={"number"}
                    placeholder={props.placeholder}
                    className="input" />
                <span >
                    {IconInput && <IconInput />}
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
                        value={props.type == "number" && value ? numeral(value).format("0,0") : value}
                        onChange={(e) => {
                            if (props.type == "number") {
                                const val = e?.target?.value;
                                props?.onChange(numeral(val).value() || "");
                                setvalue(numeral(val).value());
                            } else {
                                
                                props?.onChange(e?.target?.value || "");
                                setvalue(e?.target?.value);
                            }
                        }}
                        onBlur={(e) => props.onBlur && props.onBlur(e?.target?.value)}
                        required={props.required}
                        type={props.type == 'password' ? passwordType : "text"}
                        style={{ width: props.type == 'date' ? "100%" : "" }}
                        placeholder={props.placeholder}
                        className="input" />

                    <span onClick={() => props.type == 'password' && setPasswordType(passwordType == 'password' ? "text" : "password")}>

                        {IconInput && <IconInput />}
                    </span>
                </InputStyleComponent>
                <InputValidationStyle>
                    {props.error}</InputValidationStyle>
            </>
        )
    }

    const renderDate = () => {

        return (
            <>
                <InputPalceholderStyle style={{ color: props?.required && props?.error ? `${ThemeColor.colorError}` : "" }}>{props.placeholder} {props?.required && "*"}</InputPalceholderStyle>
                <InputStyleComponent style={{ border: props?.required && props?.error ? `1px solid ${ThemeColor.colorError}` : "" }}>
                    <DatePicker
                        open={openDate}
                        onCalendarClose={() => setOpenDate(!openDate)}
                        onClickOutside={() => setOpenDate(!openDate)}                        
                        onCalendarOpen={() => setOpenDate(true)}
                        minDate={new Date(moment().add(1,"day").format("yyyy-MM-DD"))}
                        placeholderText={moment().format("yyyy-MM-DD")}
                        dateFormat={"dd MMMM yyyy"}
                        selected={value && new Date(value)}
                        onChange={(date: any) => {
                            const newDate = moment(date).format("yyyy-MM-DD")
                            props?.onChange(newDate);
                            setvalue(newDate);
                            props.onBlur && props?.onBlur(newDate)
                            setOpenDate(false)
                        }}
                        onBlur={(e) => props.onBlur && props.onBlur(value)}

                    />
                    <span className="dateIcon" onClick={() => setOpenDate(!openDate)}> <IconsCalendar /></span>

                    <span >

                        {IconInput && <IconInput />}
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

        } else if (props.type == "textarea") {
            return renderTextArea()

        } else if (props.type == "date") {
            return renderDate()

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
