import React, { useEffect, useState } from 'react'

import { PageTitle } from "../../components/Lables//pageTitle";
import { SubTitlePage } from "../../components/Lables/subTitlePage";
import { RedOutlineButton } from "../../components/Lables/red-outlline-button";
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';
import GenericTable from '../../components/Table/table';
import { students } from '../../Mocks/students';
import { StudentForm } from '../../interfaces/studentForm';
import ModalsHoc from '../../HOCS/modalsHoc';
import StudentFormInputs from "../../components/Forms/StudentFormInputs";
import { addStudent, deleteStudent, getAllStudents, updateStudent } from '../../services/students.services';
import { getAllTeachers } from '../../services/teacher.service';

const Students = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [editedForm, setEditedForm] = useState({})
    const [students, setStudents] = useState<any>([]);
    const [orignalStudents, setOrignalStudents] = useState<any>([]);
    const [orignalStudentsSearchAndSelect, setOrignalStudentsSearchAndSelect] = useState<any>([]);

    const [teachers, setTeachers] = useState<any>([]);
    const [searchValue, setSearchValue] = useState<any>("");

    useEffect(() => {
        getTeachers();
        getStudets();
    }, [])
    useEffect(() => {
        onSearchValue(searchValue);
    }, [orignalStudents])
    const getStudets = () => {
        getAllStudents().then((Res) => {
            const data = Res?.data?.data?.map((v: any) => ({ ...v, firstName: v.fname, lastName: v.lname, teacher: v.teacher.fname }));
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
            setOrignalStudents(orignalStudents.slice().filter((v: any) => arrayOfIds.includes(v.teacher_id)));
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
    const handleDeleteStudents = (array: any[]) => {
        const studentsIds = array.map((v) => v.Id);
        deleteStudent({students: studentsIds}).then((Res) => {
            getStudets();
        })
    }
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Students</PageTitle>
                    <SubTitlePage>{students.length} Student</SubTitlePage>
                </div>
                <div>
                    <RedOutlineButton> Import Students</RedOutlineButton>
                    <RedBackgroundButton onClick={() => setOpenModal(true)}>Add New Student</RedBackgroundButton>
                </div>
            </div>
            <GenericTable
                data={students}
                keyItem="id"
                itemsExceptions={["Id", "password", "createdAt", "fname", "lname", "organization_id", "organization", "updatedAt", "status", "teacher_id"]}

                onEdit={(f: StudentForm) => { setOpenModalEdit(true); setEditedForm(f) }}
                onChangePage={() => console.log("page")}
                onSearch={(e) => onSearchValue(e)}
                onDelete={(v) => handleDeleteStudents(v)}
                selectFilter={true}
                selectFilterArray={teachers}
                selectFilterItemKey={"Id"}
                selectFilterItemValue={"fname"}
                onSelectFilter={(v) => onSelectSearchFilter(v)}

            ></GenericTable>

            <div >
                <ModalsHoc open={openModal} title="Add New Student" onShow={(bool: boolean) => setOpenModal(bool)}>
                    <StudentFormInputs teachers={teachers} submit={(f: any) => submitForm(f, "add")} importBtn={true}></StudentFormInputs>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalEdit} title="Edit Student" onShow={(bool: boolean) => setOpenModalEdit(bool)}>
                    <StudentFormInputs teachers={teachers} submit={(f: any) => submitForm(f, "edit")} importBtn={false} value={editedForm}></StudentFormInputs>
                </ModalsHoc>
            </div>
        </div>
    )
}

export default Students
