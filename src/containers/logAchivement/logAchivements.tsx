import React, { useState } from 'react'
import { PageTitle } from "../../components/Lables//pageTitle";
import { SubTitlePage } from "../../components/Lables/subTitlePage";
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';
import GenericTable from '../../components/Table/table';
import ModalsHoc from '../../HOCS/modalsHoc';
import { LogAchivementInterface } from '../../interfaces/logAchivementsInterface';
import { logAchivements } from '../../Mocks/logAtchivments';
import LogAtchivementFormInput from '../../components/Forms/logAtchivementFormInput';
const LogAchivements = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [editedForm, setEditedForm] = useState({})
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Students Achievement</PageTitle>
                    <SubTitlePage>2,245 Student</SubTitlePage>
                </div>
                <div>
                    <RedBackgroundButton onClick={() => setOpenModal(true)}>Log New Achivement</RedBackgroundButton>
                </div>
            </div>
            <GenericTable
                data={logAchivements}
                keyItem="id"
                itemsExceptions={["id", "teacherId", "desc", "date"]}
                onEdit={(f: LogAchivementInterface) => { setOpenModalEdit(true); setEditedForm(f) }}
                onChangePage={() => console.log("page")}
                onSearch={() => console.log("search")}
                onDelete={(v: LogAchivementInterface) => console.log(v)}

            ></GenericTable>
            <div >
                <ModalsHoc open={openModal} title="Log Achievement" onShow={(bool: boolean) => setOpenModal(bool)}>
                    <LogAtchivementFormInput submit={() => console.log("add")} importBtn={false}></LogAtchivementFormInput>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalEdit} title="Edit Achievement" onShow={(bool: boolean) => setOpenModalEdit(bool)}>
                    <LogAtchivementFormInput submit={() => console.log("edit")} importBtn={false} value={editedForm}></LogAtchivementFormInput>
                </ModalsHoc>
            </div>
        </div>
    )
}

export default LogAchivements
