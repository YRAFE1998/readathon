import moment from 'moment'
import numeral from 'numeral'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CircleDashboardCard from '../../components/circle-dashboard/circle-dashboard-card'
import CampaginDashboard from '../../components/Lables/campaginDashboard'
import CustomsTopLabel from '../../components/Lables/customsTopLabel'
import { PageTitle } from '../../components/Lables/pageTitle'
import {  getTeacherDashboardApiForSingleCampaign } from '../../services/teacherDashboard.services'
import { calcPercent } from '../../utils/calcPerecntage'


const CampiagnDashboard = () => {
    const [teacherDashboard, setTeacherDashboard] = useState<any>({});
    const [topStudent, setTopStudent] = useState([]);
    const [topSupporter, setTopSupporter] = useState([]);
    const id = useParams<any>()?.id;
    useEffect(() => {
        getDashboard();
    }, []);
    const getDashboard = () => {
        getTeacherDashboardApiForSingleCampaign(id).then((Res) => {
            setTeacherDashboard(Res.data);
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
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Campaign Dashboard</PageTitle>
                </div>

            </div>

            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <CampaginDashboard
                         header={teacherDashboard?.data?.title}
                         startDate={moment(teacherDashboard?.data?.startDate).format("DD/MM/YYYY")}
                         endDate={moment(teacherDashboard?.data?.endDate).format("DD/MM/YYYY")} />
                </div>

                <div className="col-lg-4 col-md-12">
                 
                         <CircleDashboardCard
                            header={"Money Raised"}
                            form={numeral(teacherDashboard?.actual_donation).format("0,0")}
                            to={numeral(teacherDashboard?.data?.targetDonation).format("0,0")}
                            progress={calcPercent(teacherDashboard?.data?.targetDonation, teacherDashboard?.actual_donation)} />


                    <div><CustomsTopLabel header={"Top Supporters"} data={topSupporter} /></div>

                </div>


                <div className="col-lg-4 col-md-12">
                <CircleDashboardCard
                            header={"Achievement"}
                            form={numeral(teacherDashboard?.actual_achievement).format("0,0")}
                            to={numeral(teacherDashboard?.data?.targetAchievement).format("0,0")}
                            progress={calcPercent(teacherDashboard?.data?.targetAchievement, teacherDashboard?.actual_achievement)}
                        />

                    <div><CustomsTopLabel header={"Top Students"} data={topStudent} /></div>
                </div>



            </div>


        </div>
    )
}

export default CampiagnDashboard
