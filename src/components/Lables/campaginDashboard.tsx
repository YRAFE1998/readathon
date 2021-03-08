import React from 'react'
import { CampaginDashboardStyles } from './campaginDashboard.styles'
interface CampaginDashboardInterface {
    header?: string;
    startDate?: string;
    endDate?: string;
}
const CampaginDashboard = (props: CampaginDashboardInterface) => {
    return (
        <div>
            <CampaginDashboardStyles>
                <p className="header">{props?.header}</p>
                <p className="date">Start Date: <span className="date-value">{props.startDate}</span></p>
                <p className="date">End Date: <span className="date-value">{props.endDate}</span></p>

            </CampaginDashboardStyles>
        </div>
    )
}

export default CampaginDashboard
