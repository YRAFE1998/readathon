import React, { useState } from 'react'
import CampaignFormInputs from '../../components/Forms/campaignFormInputs'
import { PageTitle } from '../../components/Lables/pageTitle'
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton'
import { SubTitlePage } from '../../components/Lables/subTitlePage'
import GenericTable from '../../components/Table/table'
import ModalsHoc from '../../HOCS/modalsHoc'
import { CampaignInterface } from '../../interfaces/compiagnInterface'
import { campaigns } from '../../Mocks/campiagns';

const Campiagn = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [editedForm, setEditedForm] = useState({})
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Campaigns</PageTitle>
                    <SubTitlePage>2,245 Campaign</SubTitlePage>
                </div>
                <div>
                    <RedBackgroundButton onClick={() => setOpenModal(true)}>Add New Campaign</RedBackgroundButton>
                </div>
            </div>

            <GenericTable
                data={campaigns}
                keyItem="id"
                hasDashboardView={true}
                hasManageView={true}
                mangeLink={`/page/campaign-student`}
                onEdit={(f: CampaignInterface) => { setOpenModalEdit(true); setEditedForm(f) }}
                onChangePage={() => console.log("page")}
                onSearch={() => console.log("search")}
                onDelete={(v: CampaignInterface) => console.log(v)}

            ></GenericTable>

            <div >
                <ModalsHoc open={openModal} title="Add New Campiagn" onShow={(bool: boolean) => setOpenModal(bool)}>
                    <CampaignFormInputs submit={() => console.log("add")} importBtn={true}></CampaignFormInputs>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalEdit} title="Edit Campiagn" onShow={(bool: boolean) => setOpenModalEdit(bool)}>
                    <CampaignFormInputs submit={() => console.log("edit")} importBtn={false} value={editedForm}></CampaignFormInputs>
                </ModalsHoc>
            </div>


        </div>
    )
}

export default Campiagn
