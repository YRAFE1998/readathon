import React, {useState} from 'react'
import { PageTitle } from '../../components/Lables/pageTitle';
import { SubTitlePage } from '../../components/Lables/subTitlePage';
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';
import { useHistory } from 'react-router-dom';
import GenericTable from '../../components/Table/table';
import { teacherDashboard } from '../../Mocks/teacherDashboard';


const TeacherDashboard = () => {
    const history = useHistory();
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Teacher Dashboards</PageTitle>
                    <SubTitlePage>25 Campaigns</SubTitlePage>
                </div>
                <div>
                    <RedBackgroundButton onClick={() => history.push(`/page/students`)}>Manage Student</RedBackgroundButton>
                </div>
        </div>
        <GenericTable
                data={teacherDashboard}
                keyItem="id"
                itemsExceptions={["id", "teacherId"]}
                readOnly={true}
                hasDashboardView={true}
                hasManageView={true}
                mangeLink={`/page/campaign-student`}
                onChangePage={() => console.log("page")}
                onSearch={() => console.log("search")}
            
            ></GenericTable>

        </div>
    )
}
    


export default TeacherDashboard
