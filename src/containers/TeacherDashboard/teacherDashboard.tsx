import React, { useState } from 'react'
import { PageTitle } from '../../components/Lables/pageTitle';
import { SubTitlePage } from '../../components/Lables/subTitlePage';
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';
import { useHistory } from 'react-router-dom';
import GenericTable from '../../components/Table/table';
import { teacherDashboard } from '../../Mocks/teacherDashboard';
import CircleDashboardCard from '../../components/cards/circle-dashboard-card';
import CampaginDashboard from '../../components/Lables/campaginDashboard';
import CustomsTopLabel from '../../components/Lables/customsTopLabel';
const topFund = [
    { name: "Samah Samir", value: "1000 USD" },
    { name: "Osama Dawood", value: "200 USD" },
    { name: "Selim Osama", value: "500 USD" }
]
const topAchievement = [
    { name: "Samah Samir", value: "1000 Min" },
    { name: "Osama Dawood", value: "200 Min" },
    { name: "Selim Osama", value: "50 Min" }
]

const TeacherDashboard = () => {
    const history = useHistory();
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Teacher Dashboards</PageTitle>
                    <SubTitlePage>25 Campaigns</SubTitlePage>
                </div>

            </div>
            <div>
                <div className="row">
                    <div className="col-lg-3 col-md-12 ">
                        <CampaginDashboard
                            header={"Campaign 01"}
                            startDate={" 1/1/2020"}
                            endDate={"31/1/2020"} />
                    </div>

                    <div className="col-lg-3 col-md-12" >
                        <CircleDashboardCard
                            header={"Money Raised"}
                            form={"2,000"}
                            to={"5,000"}
                            progress={50} />
                    </div>


                    <div className="col-lg-3 col-md-12" >
                        <CircleDashboardCard
                            header={"Achievement"}
                            form={"2,000"}
                            to={"5,000"}
                            progress={50}
                        />
                    </div>


                    <div className="col-lg-3 col-md-12">
                        <div style={{marginTop: "45px"}}>
                        <CustomsTopLabel header={"Top Supporters"} data={topFund} />

                        </div>
                        <div>
                        <CustomsTopLabel header={"Top Students"} data={topAchievement} />

                        </div>

                        
                    </div>

                </div>
            </div>
            <GenericTable
                data={teacherDashboard}
                keyItem="id"
                itemsExceptions={["id", "teacherId"]}
                readOnly={true}
                hasDashboardView={true}
                hasManageView={true}
                mangeLink={`/page/campaign-student`}
                dashboardLink={`/page/campiagnDashboard`}

                onChangePage={() => console.log("page")}
                onSearch={() => console.log("search")}

            ></GenericTable>

        </div>
    )
}



export default TeacherDashboard
