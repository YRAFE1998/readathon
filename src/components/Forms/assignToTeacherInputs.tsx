import React, {useState} from 'react'
import { RedOutlineButton } from '../Lables/red-outlline-button';
import { RedBackgroundButton } from '../Lables/redBackgroundButton';
import SelectInput from '../Select/select';

const AssignToTeacherInputs = (props: any) => {
    const [selectedValue, setSelectedValue] = useState();
    const [selectedValueError, setSelectedValueError] = useState("");
    const  inputChange = (value: any ) => {
        if (value) {
            setSelectedValue(value);
            setSelectedValueError("")
        } else {
            setSelectedValue(value);
            setSelectedValueError("Teacher Required")
        }
    }

    const renderSelect = (state: (keyof any), placeholder: string, name: string, required: boolean, label: string) => {
        return <SelectInput
        value={selectedValue}
        state={selectedValue}
        error={selectedValueError}
        placeholder={placeholder}
        required={required}
        label={"Id"}
        options={props.teachers}
        dispalyName={"fname"}
        onChange={(v) => inputChange(v)}
    />
    }
    return (
        <div>
            <div className={"inputSpaces"} style={{ margin: "20px 40px" }}>
                {renderSelect("teacher_id", "Select Teacher", "Teacher", true, "fname")}
            </div>

            <div className="d-flex justify-content-center mtb-50">
                <RedBackgroundButton style={{padding: "15px 40px"}} onClick={() => {
                    selectedValue && props.onSubmit(selectedValue)
                }}>Save</RedBackgroundButton>
                <RedOutlineButton style={{padding: "15px 40px"}}
                onClick={() => props.onCancel(false)}
                >Cancel</RedOutlineButton>
            </div>
        </div>
    )
}

export default AssignToTeacherInputs
