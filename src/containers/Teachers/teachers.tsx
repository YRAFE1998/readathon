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

const Teachers = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [editedForm, setEditedForm] = useState({})
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
                onEdit={(f: TeacherForm) => {setOpenModalEdit(true); setEditedForm(f)}}
                onChangePage={() => console.log("page")}
                onSearch={() => console.log("search")}
                onDelete={(v: TeacherForm) => console.log(v)}
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
        </div>
    )
}

export default Teachers
