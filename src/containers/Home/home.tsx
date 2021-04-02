import moment from 'moment';
import numeral from 'numeral';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import CircleDashboardCard from '../../components/circle-dashboard/circle-dashboard-card'

import CampaginDashboard from '../../components/Lables/campaginDashboard';
import CustomsTopLabel from '../../components/Lables/customsTopLabel';
import { PageTitle } from '../../components/Lables/pageTitle';
import { SubTitlePage } from '../../components/Lables/subTitlePage';
import GenericTable from '../../components/Table/table';
import { UserContext } from '../../Context/authContext';
import { allCampaignApi } from '../../services/campiagn.service';
import { getOrginaztionDashboardApi } from '../../services/orginazationDashboard.service';
import { arrangeCampaginFeilds } from '../../utils/arrangeCampaginFeilds';
import { calcPercent } from '../../utils/calcPerecntage';


export const Home = () => {
    const history = useHistory();
    const [dashboard, setDashboard] = useState<any>({});
    const [campaigns, setCampaigns] = useState([]);
    const [orignalCampaigns, setOriginalCampaigns] = useState([]);
    const [topStudent, setTopStudent] = useState([]);
    const [topSupporter, setTopSupporter] = useState([]);
    const { user } = useContext<any>(UserContext);

    useEffect(() => {
        getDashboard();
        getAllCampaings();
    }, []);

    
    const searchHandler = (value: string) => {
        if (value) {
            const val = value.toUpperCase();
            setCampaigns(orignalCampaigns.slice().filter((v: any) => v?.title?.toUpperCase().includes(val)));

        } else {
            setCampaigns(orignalCampaigns)
        }
    }


    const getAllCampaings = () =>
    allCampaignApi(user.content).then((Res) => {
        setCampaigns(arrangeCampaginFeilds(Res.data.data));
        setOriginalCampaigns(arrangeCampaginFeilds(Res.data.data))
    })
    const getDashboard = () => {
        getOrginaztionDashboardApi().then((Res) => {
            setDashboard(Res.data);

            const arrayOfAchievementIds = Res.data.total_achievement.map((v: any) => v.student_id);
            const arrayOfTotalDonationIds = Res.data.total_donation.map((v: any) => v.student_id);

            const topStu = Res.data.data.students.slice()
                .filter((v: any) => arrayOfAchievementIds.includes(v.Id))
                .map((v: any) => v = {
                    name: v.fname,
                    value: `${numeral(Res.data.total_achievement.filter((ele: any) => v.Id == ele.student_id)?.[0]?.total_achievement).format("0,0")} Min`
                });
            const topSup = Res.data.data.students.slice().filter((v: any) =>
                arrayOfTotalDonationIds.includes(v.Id))
                .map((v: any) => v = {
                    name: v.fname,
                    value: `${numeral(Res.data.total_donation.filter((ele: any) => v.Id == ele.student_id)?.[0]?.total_donation).format("0,0")} USD`
                });

            setTopStudent(topStu)
            setTopSupporter(topSup)

        })

       

    }
    return (
        <div>
              <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Organization Dashboards</PageTitle>
                    <SubTitlePage>{orignalCampaigns.length} Campaigns</SubTitlePage>
                </div>

            </div>
            <div>
                <div className="row">
                    <div className="col-lg-3 col-md-12 ">
                        <CampaginDashboard
                            header={dashboard?.data?.title}
                            startDate={moment(dashboard?.data?.startDate).format("DD/MM/YYYY")}
                            endDate={moment(dashboard?.data?.endDate).format("DD/MM/YYYY")} />
                    </div>

                    <div className="col-lg-3 col-md-12" >
                        <CircleDashboardCard
                            header={"Money Raised"}
                            form={numeral(dashboard?.actual_donation).format("0,0")}
                            to={numeral(dashboard?.data?.targetDonation).format("0,0")}
                            progress={calcPercent(dashboard?.data?.targetDonation, dashboard?.actual_donation)} />
                    </div>


                    <div className="col-lg-3 col-md-12" >
                        <CircleDashboardCard
                            header={"Achievement"}
                            form={numeral(dashboard?.actual_achievement).format("0,0")}
                            to={numeral(dashboard?.data?.targetAchievement).format("0,0")}
                            progress={calcPercent(dashboard?.data?.targetAchievement, dashboard?.actual_achievement)}
                        />
                    </div>


                    <div className="col-lg-3 col-md-12">
                        <div style={{ marginTop: "45px" }}>
                            <CustomsTopLabel header={"Top Supporters"} data={topSupporter} />

                        </div>
                        <div>
                            <CustomsTopLabel header={"Top Students"} data={topStudent} />

                        </div>


                    </div>

                </div>
            </div>
            <GenericTable
                data={campaigns}
                keyItem="Id"
                singleDelete={true}
                hasManageView={true}
                itemsExceptions={["Id", "theType", "organization_id", "question", "title", "actualDonation", "targetAchievement", "actualAchievement", "createdAt", "updatedAt"]}
                mangeLink={`/page/campaign-student`}
                removeEditButton={!!!(user.content == "organizationContent.")}
                onChangePage={() => console.log("page")}
                onSearch={(v: string) => searchHandler(v)}
                manageTitle={"Student"}
                readOnly={true}
                teacherReport
                studentReport
                supporterReport
                teacherReportLink="/page/teacherReport"
                studentReportLink="/page/stundetReport"
                supporterReportLink="/page/supporterReport"

            ></GenericTable>

        </div>
        </div>
    )
}


export default Home
