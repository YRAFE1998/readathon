import React from 'react'
import CircleDashboardCard from '../../components/cards/circle-dashboard-card'
import CampaginDashboard from '../../components/Lables/campaginDashboard'
import CustomsTopLabel from '../../components/Lables/customsTopLabel'
import { PageTitle } from '../../components/Lables/pageTitle'

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
const CampiagnDashboard = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Campaign Dashboard</PageTitle>
                </div>

            </div>

            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <CampaginDashboard
                        header={"Campaign 01"}
                        startDate={" 1/1/2020"}
                        endDate={"31/1/2020"} />
                </div>

                <div className="col-lg-4 col-md-12">
                    <CircleDashboardCard
                        header={"Money Raised"}
                        form={"2,000"}
                        to={"5,000"}
                        progress={50} />


                    <div><CustomsTopLabel header={"Top Supporters"} data={topFund} /></div>

                </div>


                <div className="col-lg-4 col-md-12">
                    <CircleDashboardCard
                        header={"Money Raised"}
                        form={"2,000"}
                        to={"5,000"}
                        progress={50}
                    />

                    <div><CustomsTopLabel header={"Top Students"} data={topAchievement} /></div>
                </div>



            </div>


        </div>
    )
}

export default CampiagnDashboard
