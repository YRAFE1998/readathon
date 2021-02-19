import React from 'react'
import { Link } from 'react-router-dom'
import { IconsUser } from '../../assets/icons/Auth/icons-user'
import { SideMenuStyles } from './sideMenu.styles'

const SideMenu = () => {
    return (
        <div>
            <SideMenuStyles>
                <ul className="unOrderList">
                    <li>
                        <Link className="link" to="/"> <span><IconsUser /></span> <p>Dashboard </p> </Link>
                    </li>
                    <li>
                        <Link className="link active" to="/"> <span><IconsUser /></span> <p>Teachers <div className="badge">20</div> </p> </Link>
                    </li>
                    <li>
                        <Link className="link " to="/"> <span><IconsUser /></span> <p>Students <div className="badge">67</div> </p> </Link>
                    </li>

                    <li>
                        <Link className="link" to="/"> <span><IconsUser /></span> <p>Menu Section 02 </p> </Link>
                    </li>

                </ul>
                <div className="footer">
                <ul className="unOrderList">
                    <li>
                        <Link className="link" to="/"> <span><IconsUser /></span> <p>Settings </p> </Link>
                    </li>
                    <li>
                        <Link className="link last " to="/"> <span><IconsUser /></span> <p>Logout </p> </Link>
                    </li>

                </ul>
                </div>

            </SideMenuStyles>
        </div>
    )
}

export default SideMenu
