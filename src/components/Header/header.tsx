import React, { useContext } from 'react'
import { HeaderStyles, PorfileDropDownStyles } from './header.styles'
import LogoImage from "../../assets/Images/Main/logo.png";
import IconsNotifications from '../../assets/icons/header/icons-notification';
import { IconsUser } from '../../assets/icons/Auth/icons-user';
import { Navbar, Nav, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/authContext';

const Header = (props: any) => {
    const location = useLocation().pathname;
    const history = useHistory();
    const { logoutUser } = useContext<any>(UserContext)

    return (
        <div>
            <HeaderStyles>

                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={"navHeader"}>
                    <Navbar.Brand href="#home"><img src={LogoImage} className={"logoImage"} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link > <NavLink to="/page/dashboard" className="item" activeClassName="active" >Dashboard</NavLink> </Nav.Link>

                            <NavDropdown className={`item ${location.includes("teachers") && 'active'}`} title="Teacher" id="collasible-nav-dropdown-teacher">
                                <NavDropdown.Item ><NavLink to="/page/teachers" className="item" activeClassName="active" >Teachers</NavLink></NavDropdown.Item>
                                <NavDropdown.Item ><NavLink to="/page/teacherDashboard" className="item" activeClassName="active" >Teacher Dashboard</NavLink></NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link > <NavLink to="/page/students" className="item" activeClassName="active" >Students</NavLink> </Nav.Link>

                            <Nav.Link > <NavLink to="/page/campaign" className="item" activeClassName="active" >Campaigns</NavLink> </Nav.Link>




                            {/* <Nav.Link className="item" href="#features">Cam</Nav.Link> */}
                        </Nav>
                        <Nav className="right-nav">
                            <Nav.Link href="#deets"> <IconsNotifications></IconsNotifications></Nav.Link>
                            <Nav.Link eventKey={2} >
                                <div className="user-icon-container" >
                                    <PorfileDropDownStyles>
                                        <Dropdown drop="down">
                                            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                                <div id="dropdown-basic-button"><IconsUser ></IconsUser></div>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => history.push("/page/profile")}>Profile</Dropdown.Item>
                                                <Dropdown.Item onClick={() => {
                                                    logoutUser();
                                                    history.push("/auth/login")
                                                }}>Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </PorfileDropDownStyles>


                                    <div></div>
                                </div>

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </HeaderStyles>
            {props.children}
        </div>
    )
}

export default Header
