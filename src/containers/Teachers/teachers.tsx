import React from 'react'
import {PageTitle  } from "../../components/Lables//pageTitle";
import { SubTitlePage } from "../../components/Lables/subTitlePage";
import { RedOutlineButton } from "../../components/Lables/red-outlline-button";
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';
import GenericTable from '../../components/Table/table';
import { teachers } from '../../Mocks/teachers';

const Teachers = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                <PageTitle>Teachers</PageTitle>
                <SubTitlePage>2,245 Teacher</SubTitlePage>
                </div>
                <div>
                    <RedOutlineButton> Import Teachers</RedOutlineButton>
                    <RedBackgroundButton>Add New Teacher</RedBackgroundButton>
                </div>
            </div>

            <GenericTable data={teachers}></GenericTable>
        </div>
    )
}

export default Teachers
