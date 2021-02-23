import React, { useState } from 'react'
import CampaignStudentFormInput from '../../components/Forms/campaignStudentFormInput'
import { PageTitle } from '../../components/Lables/pageTitle'
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton'
import { SubTitlePage } from '../../components/Lables/subTitlePage'
import GenericTable from '../../components/Table/table'
import ModalsHoc from '../../HOCS/modalsHoc'
import { CampaignStudentInterface } from '../../interfaces/campaignStudentInterface'
import { campaignsStudents } from '../../Mocks/campiagnStudents'

const CampiagnStudent = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [editedForm, setEditedForm] = useState({})
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Campaign Students</PageTitle>
                    <SubTitlePage>2,245 Campaign</SubTitlePage>
                </div>
                <div>
                    <RedBackgroundButton onClick={() => setOpenModal(true)}>Add New Campaign Student</RedBackgroundButton>
                </div>
            </div>
            <GenericTable
                data={campaignsStudents}
                keyItem="id"
                itemsExceptions={["id", "teacherId", "studentId"]}
                onEdit={(f: CampaignStudentInterface) => { setOpenModalEdit(true); setEditedForm(f) }}
                onChangePage={() => console.log("page")}
                onSearch={() => console.log("search")}
                onDelete={(v: CampaignStudentInterface) => console.log(v)}

            ></GenericTable>

            <div >
                <ModalsHoc open={openModal} title="Add New Student" onShow={(bool: boolean) => setOpenModal(bool)}>
                    <CampaignStudentFormInput submit={() => console.log("add")} importBtn={false}></CampaignStudentFormInput>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalEdit} title="Edit Student" onShow={(bool: boolean) => setOpenModalEdit(bool)}>
                    <CampaignStudentFormInput submit={() => console.log("edit")} importBtn={false} value={editedForm}></CampaignStudentFormInput>
                </ModalsHoc>
            </div>
        </div>
    )
}

export default CampiagnStudent
