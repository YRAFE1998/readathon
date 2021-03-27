import React, { useContext, useEffect, useState } from 'react'
import { PageTitle } from '../../components/Lables/pageTitle';
import { SubTitlePage } from '../../components/Lables/subTitlePage';
import { useHistory, useParams } from 'react-router-dom';
import GenericTable from '../../components/Table/table';
import CircleDashboardCard from '../../components/cards/circle-dashboard-card';
import CampaginDashboard from '../../components/Lables/campaginDashboard';
import CustomsTopLabel from '../../components/Lables/customsTopLabel';
import { getSupporterReport, getTeacherDashboardApi, getTeacherReport } from '../../services/teacherDashboard.services';
import { allCampaignApi } from '../../services/campiagn.service';
import { UserContext } from '../../Context/authContext';
import { arrangeCampaginFeilds } from '../../utils/arrangeCampaginFeilds';
import numeral from 'numeral';
import { calcPercent } from '../../utils/calcPerecntage';
import moment from 'moment';


const SupporterReport = () => {
    const history = useHistory();
    const [data, setData] = useState<any>({});
    const [campaigns, setCampaigns] = useState([]);
    const [orignalData, setOriginalData] = useState([]);
    const [topStudent, setTopStudent] = useState([]);
    const [topSupporter, setTopSupporter] = useState([]);
    const { user } = useContext<any>(UserContext);
    const campaignId = useParams<any>().id;
    useEffect(() => {
        getSupporterReport(campaignId).then((Res) => {
            const data = Res?.data?.message?.map((v: any) => ({ ...v, firstName: v.fname, lastName: v.lname, actualDonation: v.actual_donation, actualAchievement: v.actual_achievement }));
            setData(data);
            setOriginalData(data);
        })
    }, []);

    const onSearchValue = (value: string) => {
        if (value) {
            const val = value.toUpperCase()
            setData(orignalData.slice().filter((v: any) => v?.fname?.toUpperCase().includes(val) || v?.email?.toUpperCase().includes(val) || v?.lname?.toUpperCase().includes(val)));
        } else {
            setData(orignalData)
        }
    }




    return (
        <div>
            <GenericTable
                data={data}
                keyItem={"Id"}
                onChangePage={() => console.log("page")}
                onSearch={(v: string) => onSearchValue(v)}
                itemsExceptions={["Id", "password", "createdAt", "fname", "lname", "organization_id", "updatedAt", "status", "students", "actual_donation", "actual_achievement"]}
                readOnly={true}

            ></GenericTable>
        </div>
    )
}



export default SupporterReport
