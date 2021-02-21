import React, { useState } from 'react'

import { PageTitle } from "../../components/Lables//pageTitle";
import { SubTitlePage } from "../../components/Lables/subTitlePage";
import { RedOutlineButton } from "../../components/Lables/red-outlline-button";
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';
import GenericTable from '../../components/Table/table';
import { students } from '../../Mocks/students';
import { StudentForm } from '../../interfaces/studentForm';
import ModalsHoc from '../../HOCS/modalsHoc';
import StudentFormInputs from "../../components/Forms/StudentFormInputs";

const Students = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [editedForm, setEditedForm] = useState({})
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Students</PageTitle>
                    <SubTitlePage>2,245 Student</SubTitlePage>
                </div>
                <div>
                    <RedOutlineButton> Import Students</RedOutlineButton>
                    <RedBackgroundButton onClick={() => setOpenModal(true)}>Add New Student</RedBackgroundButton>
                </div>
            </div>
            <GenericTable
                data={students}
                onEdit={(f: StudentForm) => { setOpenModalEdit(true); setEditedForm(f) }}
                onChangePage={() => console.log("page")}
                onSearch={() => console.log("search")}
                onDelete={(v: StudentForm) => console.log(v)}
            ></GenericTable>

            <div >
                <ModalsHoc open={openModal} title="Add New Student" onShow={(bool: boolean) => setOpenModal(bool)}>
                    <StudentFormInputs submit={() => console.log("add")} importBtn={true}></StudentFormInputs>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalEdit} title="Edit Student" onShow={(bool: boolean) => setOpenModalEdit(bool)}>
                    <StudentFormInputs submit={() => console.log("edit")} importBtn={false} value={editedForm}></StudentFormInputs>
                </ModalsHoc>
            </div>
        </div>
    )
}

export default Students
