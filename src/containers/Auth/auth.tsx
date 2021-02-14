import React, { Suspense } from 'react'

import { BrowserRouter, Switch, Route, Redirect, } from "react-router-dom";
import Login from './Login/login';
import Register from './Register/register';
import Image from "../../assets/Images/Auth/child.png";
import LogoImage from "../../assets/Images/Main/logo.png";
import { Row, Col, Button } from 'react-bootstrap';
import { AuthModule } from "./auth.style";
export const Auth = () => {
    return (
        <AuthModule>
            <Row >
                <Col sm={12} md={6} className={"p-0"} >
                    <div className={"flexHeaderDiv"}>
                        <div>
                            <img src={LogoImage} className={"logoImage"} />
                        </div>
                        <div>
                            <button className={"btn-route"}>Sign Up</button>
                        </div>

                    </div>
                    <div className={"p-r-l-35 auth-content"}>
                        <Switch>
                            <Route path={"/auth/register"} component={Register}></Route>
                            <Route path={"/auth/login"} component={Login}></Route>
                            <Redirect from="/" to="/auth/login" />
                        </Switch>
                        
                    </div>
                </Col>
                <Col sm={12} md={6} className={"p-0"} >
                    <img className={"imageAuth"} src={Image} />
                </Col>
                <div className={"footer"}>
                            <h4>All Copyrights Reserved 2021</h4>
                        </div>

            </Row>
            
        </AuthModule>
    )
}


export default Auth
