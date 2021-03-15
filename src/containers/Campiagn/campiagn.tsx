import numeral from 'numeral'
import React, { useContext, useEffect, useState } from 'react'
import CampaignFormInputs from '../../components/Forms/campaignFormInputs'
import { PageTitle } from '../../components/Lables/pageTitle'
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton'
import { SubTitlePage } from '../../components/Lables/subTitlePage'
import GenericTable from '../../components/Table/table'
import { UserContext } from '../../Context/authContext'
import ModalsHoc from '../../HOCS/modalsHoc'
import { CampaignInterface } from '../../interfaces/compiagnInterface'
import { addCampaignApi, allCampaignApi, deleteCampaingApi, updateCampaignApi } from '../../services/campiagn.service'
import { arrangeCampaginFeilds } from '../../utils/arrangeCampaginFeilds'

const Campiagn = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [editedForm, setEditedForm] = useState({});
    const [campaigns, setCampaigns] = useState([]);
    const [orignalCampaigns, setOriginalCampaigns] = useState([]);
    const {user} = useContext<any>(UserContext);
    useEffect(() => {
        getAllCampaings();
    }, [])
    const getAllCampaings = () =>
        allCampaignApi(user.content).then((Res) => {
            setCampaigns(arrangeCampaginFeilds(Res.data.data));
            setOriginalCampaigns(arrangeCampaginFeilds(Res.data.data))
        })

  
    const handleSubmit = (action: string, form: any) => {
        debugger;
        if (action == "add") {
            addCampaignApi(form).then((Res) => getAllCampaings()).finally(() => setOpenModal(false));
        } else {
            updateCampaignApi(form).then((Res) => getAllCampaings()).finally(() => setOpenModalEdit(false));;
        }
    }
    const searchHandler = (value: string) => {
        if (value) {
            const val = value.toUpperCase();
            setCampaigns(orignalCampaigns.slice().filter((v: any) => v?.title?.toUpperCase().includes(val)));

        } else {
            setCampaigns(orignalCampaigns)
        }
    }
    const handleDelete = (v: any) => {
        deleteCampaingApi(v).then((Res) => getAllCampaings());
    }
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Campaigns</PageTitle>
                    <SubTitlePage>{numeral(campaigns.length).format("0,0")} Campaign</SubTitlePage>
                </div>
                {
                    !!(user.content == "organizationContent.") &&
                    <div>
                    <RedBackgroundButton onClick={() => setOpenModal(true)}>Add New Campaign</RedBackgroundButton>
                </div>
                }
                
            </div>

            <GenericTable
                data={campaigns}
                keyItem="Id"
                singleDelete={true}
                hasDashboardView={true}
                hasManageView={true}
                itemsExceptions={["Id", "theType", "organization_id", "question", "title", "actualDonation", "targetAchievement", "actualAchievement", "createdAt", "updatedAt"]}
                mangeLink={`/page/campaign-student`}
                dashboardLink={`/page/campiagnDashboard`}
                removeEditButton={!!!(user.content == "organizationContent.")}
                onEdit={(f: CampaignInterface) => { setOpenModalEdit(true); setEditedForm(f) }}
                onChangePage={() => console.log("page")}
                onSearch={(v: string) => searchHandler(v)}
                onDelete={(v: any) => handleDelete(v)}
                manageTitle={"Student"}
            ></GenericTable>

            <div >
                <ModalsHoc open={openModal} title="Add New Campiagn" onShow={(bool: boolean) => setOpenModal(bool)}>
                    <CampaignFormInputs buttonTxt={"Add New"} submit={(v: any) => handleSubmit("add", v)} status={"add"} importBtn={true}></CampaignFormInputs>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalEdit} title="Edit Campiagn" onShow={(bool: boolean) => setOpenModalEdit(bool)}>
                    <CampaignFormInputs buttonTxt={"Edit"} submit={(v: any) => handleSubmit("edit", v)} status={"edit"} importBtn={false} value={editedForm}></CampaignFormInputs>
                </ModalsHoc>
            </div>


        </div>
    )
}

export default Campiagn
