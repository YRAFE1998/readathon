import React from 'react'
import { HeaderStyles } from './header.styles'
import LogoImage from "../../assets/Images/Main/logo.png";
import IconsNotifications from '../../assets/icons/header/icons-notification';
import { IconsUser } from '../../assets/icons/Auth/icons-user';
const Header = (props: any) => {
    return (
        <div>
            <HeaderStyles>
                <div className="d-flex align-item-center logoSearch">
                    <div><img src={LogoImage} className={"logoImage"} /></div>
                    <div className="searchContainer">
                        <i className="fa fa-search"></i>
                        <input type="search" placeholder="Search ..." />
                    </div>
                </div>
                <div className="d-flex align-item-center flex-container">
                    <div className="notfication-container">
                        <IconsNotifications></IconsNotifications>
                    </div>
                    <div className="user-icon-container">
                        <IconsUser></IconsUser>
                    </div>
                </div>
            </HeaderStyles>
        </div>
    )
}

export default Header
