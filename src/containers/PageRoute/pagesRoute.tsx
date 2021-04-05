import React, { Suspense } from 'react'

import { Switch, Route, Redirect, useLocation, useHistory, } from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap';
const Home = React.lazy(() => import('../Dashboard/home'));
const Teachers = React.lazy(() => import('../Teachers/teachers'));
const Students = React.lazy(() => import('../Students/students'))
const Campaigns = React.lazy(() => import('../Campiagn/campiagn'));
const CampiagnStudent = React.lazy(() => import('../CampiagnStudent/campiagnStudent'));
const LogAchivements = React.lazy(() => import('../logAchivement/logAchivements'));
const TeacherDashboard = React.lazy(() => import("../TeacherDashboard/teacherDashboard"));
const StudentProgress = React.lazy(() => import('../StudentProgress/studentProgress'));
const CampiagnDashboard = React.lazy(() => import('../CampiagnDashboard/campiagnDashboard'));
const TeacherReport = React.lazy(() => import('../TeacherReport/teacherReport'));
const StudentReport = React.lazy(() => import('../StudentReport/studentReport'));
const SupportReport = React.lazy(() => import('../SupporterReport/supporterReport'));
const ContentEditor = React.lazy(() => import('../ContentEditor/contentEditor'));



const Profile = React.lazy(() => import('../Profile/profile'))
export const DashboardModule = () => {

    return (
        <>
            <div style={{ background: "#F8F9FC", minHeight: "95vh" }}>
                <Row>

                    <Col md={12} className="containerPages">
                        <Switch>
                            <Route path={"/page/home"} component={Home}></Route>
                            <Route path={"/page/teachers"} component={Teachers}></Route>
                            <Route path={"/page/teacherDashboard"} component={TeacherDashboard}></Route>
                            <Route path={"/page/students"} component={Students}></Route>
                            <Route exact path={"/page/campaign"} component={Campaigns}></Route>
                            <Route  path={"/page/campaign/:id"} component={Campaigns}></Route>

                            <Route path={"/page/campaign-student/:id"} component={CampiagnStudent}></Route>
                            <Route path={"/page/logAchivement/:id"} component={LogAchivements}></Route>
                            <Route path={"/page/studentProgress/:id/:studentId"} component={StudentProgress}></Route>
                            <Route path={"/page/campiagnDashboard/:id"} component={CampiagnDashboard}></Route>
                            <Route path={"/page/teacherReport/:id"} component={TeacherReport}></Route>
                            <Route path={"/page/stundetReport/:id"} component={StudentReport}></Route>
                            <Route path={"/page/supporterReport/:id"} component={SupportReport}></Route>
                            <Route path={"/page/profile"} component={Profile}></Route>
                            <Route path={"/page/editor/:id/:studentId"} component={ContentEditor}></Route>
                        </Switch>
                    </Col>
                </Row>

            </div>
        </>
    )
}


export default DashboardModule
