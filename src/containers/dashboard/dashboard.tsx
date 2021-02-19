import React, { Suspense } from 'react'

import { BrowserRouter, Switch, Route, Redirect, useLocation, useHistory, } from "react-router-dom";

import Image from "../../assets/Images/Auth/child.png";
import LogoImage from "../../assets/Images/Main/logo.png";
import { Row, Col, Button } from 'react-bootstrap';
import Header from '../../components/Header/header';
import SideMenu from '../../components/SideMenu/sideMenu';
const Dashboard = React.lazy(() => import('./dashboard/dashboard'));
export const DashboardModule = () => {

    return (
        <>
            <Header></Header>
            <div style={{background: "#F8F9FC", minHeight: "95vh"}}>
                <Row>
                    <Col md={4}>
                        <SideMenu></SideMenu>

                    </Col>
                    <Col md={8} className="containerPages">
                        <Switch>
                            <Route path={"/page/dashboard"} component={Dashboard}></Route>
                        </Switch>
                    </Col>
                </Row>

            </div>
        </>
    )
}


export default DashboardModule
