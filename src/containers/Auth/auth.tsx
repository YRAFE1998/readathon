import React, { Suspense } from 'react'

import { BrowserRouter, Switch, Route, Redirect, useLocation, useHistory, } from "react-router-dom";
import Login from './Login/login';
import Register from './Register/register';
import Image from "../../assets/Images/Auth/child.png";
import LogoImage from "../../assets/Images/Main/logo.png";
import { Row, Col, Button } from 'react-bootstrap';
import { AuthModule } from "./auth.style";
import { ResetPassword } from './ResetPassword/resetPassword';
import { ForgetPassword } from './ForgetPassword/forgetPassword';
export const Auth = () => {
    const path = useLocation().pathname;
    const history = useHistory();
    const handleNavigation = () => {
        path.includes("login") ? history.push("/auth/register") : history.push("/auth/login")
    }
    
    return (
        <AuthModule>
            <Row >
                <Col sm={12} md={6} className={"p-0"} >
                    <div className={"flexHeaderDiv"}>
                        <div>
                            <img src={LogoImage} className={"logoImage"} />
                        </div>
                        <div>
                            <button className={"btn-route"} onClick={handleNavigation}>{path.includes("login") ? "Sign Up" : "Login"}</button>
                        </div>

                    </div>
                    <div className={"p-r-l-35 auth-content"}>
                        <Switch>
                            <Route path={"/auth/register"} component={Register}></Route>
                            <Route path={"/auth/login"} component={Login}></Route>
                            <Route path={"/auth/forget"} component={ForgetPassword}></Route>
                            <Route path={"/auth/reset"} component={ResetPassword}></Route>
                            <Redirect from="/" to="/auth/login" />
                        </Switch>
                        
                    </div>
                </Col>
                <Col sm={12} md={6} className={"p-0 h-100"}  >
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
