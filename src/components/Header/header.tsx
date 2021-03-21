import React, { useContext } from 'react'
import { HeaderStyles, PorfileDropDownStyles } from './header.styles'
import LogoImage from "../../assets/Images/Main/logo.png";
import IconsNotifications from '../../assets/icons/header/icons-notification';
import { IconsUser } from '../../assets/icons/Auth/icons-user';
import { Navbar, Nav, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/authContext';
import { handlePagesView } from '../../containers/PageRoute/handlePagesView';
import { FacebookShareButton, FacebookIcon } from "react-share";

const Header = (props: any) => {
    const location = useLocation().pathname;
    const history = useHistory();
    const { user, logoutUser } = useContext<any>(UserContext)

    return (
        <div>
            <HeaderStyles>

                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={"navHeader"}>
                    <Navbar.Brand href="#home"><img src={LogoImage} className={"logoImage"} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {
                                handlePagesView(user.content)?.map((v: any) => {
                                    if (v.status == "dropDown" && !!v?.pages) {
                                        return <NavDropdown className={`item ${location.includes(v.page) && 'active'}`} title={v.name} id="collasible-nav-dropdown-teacher">
                                            {
                                                v?.pages.map((sub: any) => {
                                                    return <NavDropdown.Item >
                                                        <NavLink to={sub.page}
                                                            className="item"
                                                            activeClassName="active" >
                                                            {sub.name}</NavLink>
                                                    </NavDropdown.Item>
                                                })
                                            }
                                        </NavDropdown>
                                    } else {
                                        return <Nav.Link > <NavLink to={v.page} className="item" activeClassName="active" >{v.name}</NavLink> </Nav.Link>

                                    }
                                })
                            }
                            {/* {
                                !!(user.content == "studentContent.") &&
                                <Nav.Link>
                                    <FacebookShareButton className="item" id="share-btn" url="http://40.74.38.157:8080/#/page/students" >
                                        <span style={{ fontWeight: 600 }}>Share</span>
                                    </FacebookShareButton >
                                </Nav.Link>
                            } */}


                        </Nav>
                        <Nav className="right-nav">
                            <Nav.Link > <IconsNotifications></IconsNotifications></Nav.Link>
                            <Nav.Link  >
                                <div className="user-icon-container" >
                                    <PorfileDropDownStyles>

                                        <Dropdown drop="down" >
                                            <Dropdown.Toggle variant="success" id="dropdown-basic"  >
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
