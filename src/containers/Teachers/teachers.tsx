import React, { useState } from 'react'
import { PageTitle } from "../../components/Lables//pageTitle";
import { SubTitlePage } from "../../components/Lables/subTitlePage";
import { RedOutlineButton } from "../../components/Lables/red-outlline-button";
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';
import GenericTable from '../../components/Table/table';
import { teachers } from '../../Mocks/teachers';
import ModalsHoc from '../../HOCS/modalsHoc';
import TeacherFormInput from '../../components/Forms/TeacherForm';
import { TeacherForm } from '../../interfaces/teacherForm';
import SelectTeacher from '../../components/Forms/selectTeacherInput';

const Teachers = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [editedForm, setEditedForm] = useState({})
    const [openModalSelectTeacher, setOpenModalSelectTeacher] = useState(false);
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Teachers</PageTitle>
                    <SubTitlePage>2,245 Teacher</SubTitlePage>
                </div>
                <div>
                    <RedOutlineButton> Import Teachers</RedOutlineButton>
                    <RedBackgroundButton onClick={() => setOpenModal(true)}>Add New Teacher</RedBackgroundButton>
                </div>
            </div>

            <GenericTable
                data={teachers}
                keyItem={"id"}
                onEdit={(f: TeacherForm) => {setOpenModalEdit(true); setEditedForm(f)}}
                onChangePage={() => console.log("page")}
                onSearch={() => console.log("search")}
                onDelete={(v: TeacherForm) => console.log(v)}
                itemsExceptions={["id"]}
                singleDelete={true}
            ></GenericTable>
            <div >
                <ModalsHoc open={openModal} title="Add New Teacher" onShow={(bool: boolean) => setOpenModal(bool)}>
                    <TeacherFormInput submit={() => console.log("add")} importBtn={true}></TeacherFormInput>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalEdit} title="Edit Teacher"  onShow={(bool: boolean) => setOpenModalEdit(bool)}>
                    <TeacherFormInput submit={() => console.log("edit")} importBtn={false} value={editedForm}></TeacherFormInput>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalSelectTeacher} title="Delete Warning !"  onShow={(bool: boolean) => setOpenModalSelectTeacher(bool)}>
                    <SelectTeacher onCancel={() => setOpenModalSelectTeacher(false)} onSubmit={() => console.log("c")}/>
                </ModalsHoc>
            </div>
        </div>
    )
}

export default Teachers
