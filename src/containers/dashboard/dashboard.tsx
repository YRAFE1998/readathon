import React, { Suspense } from 'react'

import { BrowserRouter, Switch, Route, Redirect, useLocation, useHistory, } from "react-router-dom";

import Image from "../../assets/Images/Auth/child.png";
import LogoImage from "../../assets/Images/Main/logo.png";
import { Row, Col, Button } from 'react-bootstrap';
import Header from '../../components/Header/header';
import SideMenu from '../../components/SideMenu/sideMenu';
const Dashboard = React.lazy(() => import('./dashboard/dashboard'));
const Teachers = React.lazy(() => import('../Teachers/teachers'));
const Students = React.lazy(() => import('../Students/students'))
const Campaigns = React.lazy(() => import('../Campiagn/campiagn'));
const CampiagnStudent = React.lazy(() => import('../CampiagnStudent/campiagnStudent'));
const LogAchivements = React.lazy(() => import('../logAchivement/logAchivements'));
const TeacherDashboard = React.lazy(() => import("../TeacherDashboard/teacherDashboard"));
const Profile = React.lazy(() => import('../Profile/profile'))
export const DashboardModule = () => {

    return (
        <>
            <Header></Header>
            <div style={{ background: "#F8F9FC", minHeight: "95vh" }}>
                <Row>
                    
                    <Col md={12} className="containerPages">
                        <Switch>
                            <Route path={"/page/dashboard"} component={Dashboard}></Route>
                            <Route path={"/page/teachers"} component={Teachers}></Route>
                            <Route path={"/page/teacherDashboard"} component={TeacherDashboard}></Route>
                            <Route path={"/page/students"} component={Students}></Route>
                            <Route path={"/page/campaign"} component={Campaigns}></Route>
                            <Route path={"/page/campaign-student"} component={CampiagnStudent}></Route>
                            <Route path={"/page/campaign-student/:id"} component={CampiagnStudent}></Route>
                            <Route path={"/page/logAchivement/:id"} component={LogAchivements}></Route>
                            <Route path={"/page/profile"} component={Profile}></Route>
                        </Switch>
                    </Col>
                </Row>

            </div>
        </>
    )
}


export default DashboardModule
