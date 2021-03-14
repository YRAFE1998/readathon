import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import DeleteModalContent from '../../components/Forms/deleteModalContent'
import LogAtchivementFormInput from '../../components/Forms/logAtchivementFormInput'
import { PageTitle } from '../../components/Lables/pageTitle'
import { RedOutlineButton } from '../../components/Lables/red-outlline-button'
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton'
import { SubTitlePage } from '../../components/Lables/subTitlePage'
import GenericTable from '../../components/Table/table'
import ModalsHoc from '../../HOCS/modalsHoc'
import { campaignTypes } from '../../Mocks/campiagns'
import { studentProgresses } from '../../Mocks/studentProgress'
import { addStudentLogApi, getStudentProgressApi, deleteStudentLogApi } from '../../services/campiagn.service'


const StudentProgress = () => {
    const [openModal, setOpenModal] = useState(false);
    const params = useParams<any>();
    const campaign = params?.id
    const studentId = params?.studentId;
    const location = useLocation();
    const email = new URLSearchParams(location.search).get("email");
    const name = new URLSearchParams(location.search).get("name");
    const type = new URLSearchParams(location.search).get("type");
    const [studentProgresses, setStudentProgresses] = useState([]);
    const [orignialStudentProgresses, setOrignialStudentProgresses] = useState([]);

    const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
    useEffect(() => {
        getProgress();
    }, [])
    const getProgress = () => {
        getStudentProgressApi(campaign, studentId).then((Res) => {
            const data = Res.data.data?.map((v: any) => ({ ...v, action: v.type, amount: v.achievement, date: moment(v.date).format("YYYY-DD-MM") }))
            setStudentProgresses(data);
            setOrignialStudentProgresses(data);
        })
    }
    const handleSubmit = (action: string, form: any) => {
        addStudentLogApi(campaign, studentId, form).then((Res) => getProgress()).finally(() => setOpenModal(false))
    }
    const filterByTypes = (value: any) => {
        const arrayOfNames = value.slice().map((v: any) => v.name);
        if (arrayOfNames.length) {
            setStudentProgresses(orignialStudentProgresses.slice().filter((v: any) => arrayOfNames.includes(v.action)))
        } else {
            setStudentProgresses(orignialStudentProgresses);
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Student Progress</PageTitle>
                    <SubTitlePage>{name}({email})</SubTitlePage>
                </div>
                <div>
                    <RedOutlineButton onClick={() => setOpenDeleteConfirmation(true)}> Remove from Campaign</RedOutlineButton>
                    <RedBackgroundButton onClick={() => setOpenModal(true)}>Log Achievement</RedBackgroundButton>
                </div>

            </div>

            <GenericTable
                data={studentProgresses}
                keyItem="id"
                readOnly={true}
                itemsExceptions={["Id", "achievement", "type", "description", "createdAt", "updatedAt", "teacher_id", "student_id", "campaign_id", "studentAch"]}
                onChangePage={() => console.log("page")}
                onSearch={() => console.log("search")}
                selectFilter={true}
                selectFilterArray={[{ name: "Minutes", Id: "1" }, { name: "Donation", Id: "2" }]}
                selectFilterItemKey={"Id"}
                selectFilterItemValue={"name"}
                onSelectFilter={(v) => filterByTypes(v)}
                removeUnAssignSelectFiler={true}
                removeSearch={true}


            ></GenericTable>


            <div >
                <ModalsHoc open={openModal} title="Log Achievement" onShow={(bool: boolean) => setOpenModal(bool)}>
                    <LogAtchivementFormInput submit={(v: any) => handleSubmit("add", v)} importBtn={false}></LogAtchivementFormInput>
                </ModalsHoc>
            </div>

            <div >
                <ModalsHoc open={openDeleteConfirmation} title="Delete Student" onShow={(bool: boolean) => setOpenDeleteConfirmation(bool)}>
                    <DeleteModalContent
                        number={1}
                        singleDelete={true}
                        onClose={() => setOpenDeleteConfirmation(false)}
                        onClick={() => {
                            deleteStudentLogApi(campaign, studentId).then((Res) => getProgress())
                                .finally(() => setOpenDeleteConfirmation(false))

                        }}></DeleteModalContent>
                </ModalsHoc>
            </div>
        </div>
    )
}

export default StudentProgress
