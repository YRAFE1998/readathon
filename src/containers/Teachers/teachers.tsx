import React, { useEffect, useState } from 'react'
import { PageTitle } from "../../components/Lables//pageTitle";
import { SubTitlePage } from "../../components/Lables/subTitlePage";
import { RedOutlineButton } from "../../components/Lables/red-outlline-button";
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';
import GenericTable from '../../components/Table/table';
import ModalsHoc from '../../HOCS/modalsHoc';
import TeacherFormInput from '../../components/Forms/TeacherForm';
import { TeacherForm } from '../../interfaces/teacherForm';
import SelectTeacher from '../../components/Forms/selectTeacherInput';
import { addTeacher, deleteTeacher, deleteTeacherWithAssign, getAllTeachers, updateTeacher } from '../../services/teacher.service';
import numeral from 'numeral';

const Teachers = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [editedForm, setEditedForm] = useState({})
    const [openModalSelectTeacher, setOpenModalSelectTeacher] = useState(false);
    const [teachers, setTeachers] = useState<any>([]);
    const [orignalTeachers, setOrignalTeachers] = useState<any>([]);
    const [deletedTeacher, setDeletedTeacher] = useState("");
    const [assignTeacher, setAssignTeacher] = useState("");
    useEffect(() => {
        getTeachers();
    }, [])
    const getTeachers = () => {
        getAllTeachers().then((Res) => {
            const data = Res?.data?.data?.map((v: any) => ({ ...v, firstName: v.fname, lastName: v.lname }));
            setTeachers(data);
            setOrignalTeachers(data);
        });
    }
    const onSearchValue = (value: string) => {
        if (value) {
            const val = value.toUpperCase()
            setTeachers(orignalTeachers.slice().filter((v: any) => v?.fname?.toUpperCase().includes(val) || v?.email?.toUpperCase().includes(val) || v?.lname?.toUpperCase().includes(val)));
        } else {
            setTeachers(orignalTeachers)
        }
    }
    const submitForm = (form: any, from: string) => {
        if (from == 'add') {
            addTeacher(form).then((Res) => getTeachers()).finally(() => setOpenModal(false))
        } else {
            updateTeacher(form).then((Res) => getTeachers()).finally(() => setOpenModalEdit(false))
        }
    }
    const handleDeleteTeacher = (id: string) => {
        setDeletedTeacher(id);
        deleteTeacher(id).then((Res) => getTeachers())
        .catch((err) => setOpenModalSelectTeacher(true))
    }
    const handleDeleteTeacherWithAssign = (id: string) => {
        const data = {teacher_id: id || ""};
        deleteTeacherWithAssign(deletedTeacher, data).then((res) => getTeachers())
        .finally(() => setOpenModalSelectTeacher(false))
    }
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                
                    <PageTitle>Teachers</PageTitle>
                    <SubTitlePage>{numeral(teachers.length).format("0,0")} Teacher</SubTitlePage>
                </div>
                <div>
                    <RedOutlineButton> Import Teachers</RedOutlineButton>
                    <RedBackgroundButton onClick={() => setOpenModal(true)}>Add New Teacher</RedBackgroundButton>
                </div>
            </div>

            <GenericTable
                data={teachers}
                keyItem={"Id"}
                onEdit={(f: TeacherForm) => { setOpenModalEdit(true); setEditedForm(f) }}
                onChangePage={() => console.log("page")}
                onSearch={(v: string) => onSearchValue(v)}
                onDelete={(v: any) => handleDeleteTeacher(v)}
                itemsExceptions={["Id", "password", "createdAt", "fname", "lname", "organization_id", "updatedAt", "status", "students"]}
                singleDelete={true}
            ></GenericTable>
            <div >
                <ModalsHoc open={openModal} title="Add New Teacher" onShow={(bool: boolean) => setOpenModal(bool)}>
                    <TeacherFormInput buttonTxt={"Add New"} submit={(f: any) => submitForm(f, "add")} importBtn={true}></TeacherFormInput>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalEdit} title="Edit Teacher" onShow={(bool: boolean) => setOpenModalEdit(bool)}>
                    <TeacherFormInput buttonTxt={"Edit"} submit={(f: any) => submitForm(f, "edit")} importBtn={false} value={editedForm}></TeacherFormInput>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalSelectTeacher} title="Delete Warning !" onShow={(bool: boolean) => setOpenModalSelectTeacher(bool)}>
                    <SelectTeacher teachers={teachers.filter((v: any) => v.Id !== deletedTeacher)} onCancel={() => setOpenModalSelectTeacher(false)} onSubmit={(v: any) => handleDeleteTeacherWithAssign(v)} />
                </ModalsHoc>
            </div>
        </div>
    )
}

export default Teachers
