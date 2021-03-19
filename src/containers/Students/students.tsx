import React, { useContext, useEffect, useState } from 'react'

import { PageTitle } from "../../components/Lables//pageTitle";
import { SubTitlePage } from "../../components/Lables/subTitlePage";
import { RedOutlineButton } from "../../components/Lables/red-outlline-button";
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';
import GenericTable from '../../components/Table/table';
import { students } from '../../Mocks/students';
import { StudentForm } from '../../interfaces/studentForm';
import ModalsHoc from '../../HOCS/modalsHoc';
import StudentFormInputs from "../../components/Forms/StudentFormInputs";
import { addStudent, deleteStudent, getAllStudents, updateStudent, assignStudentsToTeacher, updateStudentPassword } from '../../services/students.services';
import { getAllTeachers } from '../../services/teacher.service';
import AssignToTeacherInputs from '../../components/Forms/assignToTeacherInputs';
import { UserContext } from '../../Context/authContext';
import ChangePasswordInputs from '../../components/Forms/changePassword';
const orinizationView = ["Id", "password", "createdAt", "fname", "lname", "organization_id", "organization", "updatedAt", "status", "teacher_id"];
const teacherView = ["Id", "password", "createdAt", "fname", "lname", "organization_id", "organization", "updatedAt", "status", "teacher_id", "teacher"]
const Students = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalChangePassword, setOpenModalShowPassword] = useState(false);
    const [editedForm, setEditedForm] = useState<any>({})
    const [students, setStudents] = useState<any>([]);
    const [orignalStudents, setOrignalStudents] = useState<any>([]);
    const [orignalStudentsSearchAndSelect, setOrignalStudentsSearchAndSelect] = useState<any>([]);
    const [openAssignModal, setOpenAssignModal] = useState(false);
    const [teachers, setTeachers] = useState<any>([]);
    const [searchValue, setSearchValue] = useState<any>("");
    const [selected, setSelected] = useState([]);
    const { user } = useContext<any>(UserContext);
    useEffect(() => {
        user.content == "organizationContent." && getTeachers();
        getStudets();
    }, [])
    useEffect(() => {
        onSearchValue(searchValue);
    }, [orignalStudents])
    const getStudets = () => {
        getAllStudents(user?.content).then((Res) => {
            const data = Res?.data?.data?.map((v: any) => ({ ...v, firstName: v.fname, lastName: v.lname, teacher: v.teacher?.fname || "" }));
            setStudents(data);
            setOrignalStudents(data);
            setOrignalStudentsSearchAndSelect(data);
        })
    }
    const getTeachers = () => {
        getAllTeachers().then((Res) => setTeachers(Res?.data?.data?.map((v: any) => ({ ...v, firstName: v.fname, lastName: v.lname }))))
    }
    const onSearchValue = (value: string) => {
        if (value) {
            const val = value.toUpperCase();
            setSearchValue(val);
            setStudents(orignalStudents.slice().filter((v: any) => v?.fname?.toUpperCase().includes(val) || v?.email?.toUpperCase().includes(val) || v?.lname?.toUpperCase().includes(val)));

        } else {
            setSearchValue("");
            setStudents(orignalStudents)
        }
    }
    const onSelectSearchFilter = (value: any) => {
        if (value && value.length) {
            const arrayOfIds = value.slice().map((v: any) => v.Id);
            if (arrayOfIds.some((v: any) => v == 0)) {
                setOrignalStudents(orignalStudentsSearchAndSelect.slice().filter((v: any) => arrayOfIds.includes(v.teacher_id) || !v.teacher_id));

            } else {
                setOrignalStudents(orignalStudentsSearchAndSelect.slice().filter((v: any) => arrayOfIds.includes(v.teacher_id)));
            }
        } else {
            setOrignalStudents(orignalStudentsSearchAndSelect);
        }
    }
    const submitForm = (form: any, from: string) => {
        if (from == 'add') {
            addStudent(form).then((Res) => getStudets()).finally(() => setOpenModal(false))
        } else {
            updateStudent(form).then((Res) => getStudets()).finally(() => setOpenModalEdit(false))
        }
    }
    const handleDeleteStudents = (val: any) => {
        if (user.content == "organizationContent.") {
            const studentsIds = val.map((v: any) => v.Id);
            deleteStudent({ students: studentsIds }).then((Res) => {
                getStudets();
            })
        } else {
            deleteStudent(val).then((Res) => {
                getStudets();
            })
        }

    }
    const assignToTeacher = (t: any) => {
        const data = {
            students: selected.map((v: any) => v.Id),
            teacher_id: t || ""
        }
        assignStudentsToTeacher(data).then((res) => getStudets()).finally(() => setOpenAssignModal(false))

    }
    const handleChangePassword = (value: any) => {
        const newValue = { ...value, email: editedForm?.email };
        updateStudentPassword(newValue).then((Res) => getTeachers()).finally(() => setOpenModalShowPassword(false))
    }
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Students</PageTitle>
                    <SubTitlePage>{students.length} Student</SubTitlePage>
                </div>
                {
                    !!!(user.content === "studentContent.") &&

                    <div>
                        <RedOutlineButton> Import Students</RedOutlineButton>
                        <RedBackgroundButton onClick={() => setOpenModal(true)}>Add New Student</RedBackgroundButton>
                    </div>
                }
            </div>
            <GenericTable
                data={students}
                keyItem="Id"
                singleDelete={!!!(user.content == "organizationContent.")}
                itemsExceptions={user.content == "teacherContent." ? teacherView : orinizationView}
                onEdit={(f: StudentForm) => { setOpenModalEdit(true); setEditedForm(f) }}
                onChangePage={() => console.log("page")}
                onSearch={(e) => onSearchValue(e)}
                onDelete={(v) => handleDeleteStudents(v)}
                selectFilter={!!(user.content == "organizationContent.")}
                selectFilterArray={teachers}
                selectFilterItemKey={"Id"}
                selectFilterItemValue={"fname"}
                onSelectFilter={(v) => onSelectSearchFilter(v)}
                multipleAssign={!!(user.content == "organizationContent.")}
                onAssign={(s) => { setSelected(s); setOpenAssignModal(true) }}
                showChange={!!(user.content == "organizationContent.")}
                readOnly={!!(user.content == "studentContent.")}
                hasAchivement={!!(user.content == "studentContent.")}
                achivementTitle="Campaign"
                achivementLink="/page/campaign"
                onPressShow={(v) => { setOpenModalShowPassword(true); setEditedForm(v) }}
            ></GenericTable>

            <div >
                <ModalsHoc open={openModal} title="Add New Student" onShow={(bool: boolean) => setOpenModal(bool)}>
                    <StudentFormInputs buttonTxt={"Add New"} teachers={teachers} submit={(f: any) => submitForm(f, "add")} importBtn={true}></StudentFormInputs>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalEdit} title="Edit Student" onShow={(bool: boolean) => setOpenModalEdit(bool)}>
                    <StudentFormInputs buttonTxt={"Edit"} teachers={teachers} submit={(f: any) => submitForm(f, "edit")} importBtn={false} value={editedForm}></StudentFormInputs>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalChangePassword} title="Change Password" onShow={(bool: boolean) => setOpenModalShowPassword(bool)}>
                    <ChangePasswordInputs onSubmit={(v: any) => handleChangePassword(v)} />
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openAssignModal} title="Assign To Teacher" onShow={(bool: boolean) => setOpenAssignModal(bool)}>
                    <AssignToTeacherInputs teachers={teachers} onSubmit={(t: any) => assignToTeacher(t)} onCancel={() => (bool: boolean) => setOpenAssignModal(bool)} ></AssignToTeacherInputs>
                </ModalsHoc>
            </div>
        </div>
    )
}

export default Students
