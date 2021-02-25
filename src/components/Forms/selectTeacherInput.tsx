import React, {useState} from 'react'
import { teachers } from '../../Mocks/teachers'
import { ThemeColor } from '../../utils/colors'
import { RedOutlineButton } from '../Lables/red-outlline-button'
import { RedBackgroundButton } from '../Lables/redBackgroundButton'
import SelectInput from '../Select/select'

const SelectTeacher = (props: any) => {
    const [selectedValue, setSelectedValue] = useState();
    const [selectedValueError, setSelectedValueError] = useState("");
    const [assignTeacher, setAssignTeacher] = useState(false);
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
        label={"id"}
        options={teachers}
        dispalyName={"firstName"}
        onChange={(v) => inputChange(v)}
    />
    }
    return (
        <div>
            <p className="text-center">You Have 200 Student To Selected Teacher </p>

            
            
            <div className="d-flex justify-content-center ">
                <RedOutlineButton style={{background: assignTeacher ? ThemeColor.red : "", color: assignTeacher ? "#fff" : ""}}  onClick={() => setAssignTeacher(true)}>Move To Another Teacher</RedOutlineButton>
                <RedOutlineButton style={{background: !assignTeacher ? ThemeColor.red : "", color: !assignTeacher ? "#fff" : ""}}  onClick={() => setAssignTeacher(false)}>Unassign Students</RedOutlineButton>
            </div>

            {
                assignTeacher && <div className={"inputSpaces"} style={{ margin: "20px 40px" }}>
                {renderSelect("teacherId", "Select Teacher", "Teacher", true, "firstName")}
            </div>
            }

            <div className="d-flex justify-content-center mtb-50">
                <RedBackgroundButton style={{padding: "15px 40px"}} onClick={() => {
                    props.onSubmit(selectedValue)
                }}>Save</RedBackgroundButton>
                <RedOutlineButton style={{padding: "15px 40px"}}
                onClick={() => props.onCancel(false)}
                >Cancel</RedOutlineButton>
            </div>
        </div>
    )
}

export default SelectTeacher
