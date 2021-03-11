import numeral from 'numeral'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CampaignStudentFormInput from '../../components/Forms/campaignStudentFormInput'
import { PageTitle } from '../../components/Lables/pageTitle'
import { SubTitlePage } from '../../components/Lables/subTitlePage'
import GenericTable from '../../components/Table/table'
import ModalsHoc from '../../HOCS/modalsHoc'
import { CampaignStudentInterface } from '../../interfaces/campaignStudentInterface'
import { deleteCampaingStudentsApi, getAllCampaingStudentsApi } from '../../services/campiagn.service'
import { getAllTeachers } from '../../services/teacher.service'
import { arrangeCampaginStudentsFeilds } from '../../utils/arrangeCampaginFeilds'

const CampiagnStudent = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [editedForm, setEditedForm] = useState({})
    const [teachers, setTeachers] = useState([]);
    const [campaignsStudents, setCampaignsStudents] = useState([]);
    const [originalCampaignsStudents, setOriginalCampaignsStudents] = useState([]);
    const [orignalStudentsSearchAndSelect, setOrignalStudentsSearchAndSelect] = useState<any>([]);
    const [searchValue, setSearchValue] = useState<any>("");

    const campaignId = useParams<any>()?.id;
    useEffect(() => { getTeachers(); }, []);
    useEffect(() => { (teachers.length) && getStudentCampaings(); }, [teachers])
    useEffect(() => { onSearchValue(searchValue); }, [originalCampaignsStudents])

    const getStudentCampaings = () => {
        getAllCampaingStudentsApi(campaignId).then((Res) => {
            console.log(Res.data.data);
            setCampaignsStudents(arrangeCampaginStudentsFeilds(Res.data?.data?.students, teachers));
            setOriginalCampaignsStudents(arrangeCampaginStudentsFeilds(Res.data?.data?.students, teachers));
            setOrignalStudentsSearchAndSelect(arrangeCampaginStudentsFeilds(Res.data?.data?.students, teachers));
        });
    }

    const getTeachers = () => {
        getAllTeachers().then((Res) => setTeachers(Res?.data?.data?.map((v: any) => ({ ...v, firstName: v.fname, lastName: v.lname }))))
    }

    const onSearchValue = (value: string) => {
        if (value) {
            const val = value.toUpperCase();
            setSearchValue(val);
            setCampaignsStudents(originalCampaignsStudents.slice().filter((v: any) => v?.fname?.toUpperCase().includes(val) || v?.email?.toUpperCase().includes(val) || v?.lname?.toUpperCase().includes(val)));

        } else {
            setSearchValue("");
            setCampaignsStudents(originalCampaignsStudents)
        }
    }

    const onSelectSearchFilter = (value: any) => {
        if (value && value.length) {
            const arrayOfIds = value.slice().map((v: any) => v.Id);
            if (arrayOfIds.some((v: any) => v == 0)) {
                setOriginalCampaignsStudents(orignalStudentsSearchAndSelect.slice().filter((v: any) => arrayOfIds.includes(v.teacher_id) || !v.teacher_id));

            } else {
                setOriginalCampaignsStudents(orignalStudentsSearchAndSelect.slice().filter((v: any) => arrayOfIds.includes(v.teacher_id)));
            }
        } else {
            setOriginalCampaignsStudents(orignalStudentsSearchAndSelect);
        }
    }

    const handleDelete = (id: any) => {
        deleteCampaingStudentsApi(campaignId, {studentId: id}).then((Res) => getStudentCampaings());

    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Campaign Students</PageTitle>
                    <SubTitlePage>{numeral(campaignsStudents.length).format("0,0")} Campaign</SubTitlePage>
                </div>

            </div>
            <GenericTable
                data={campaignsStudents}
                keyItem="Id"
                itemsExceptions={["Id", "students", "campaignId", "compaignStudentId", "teacher_id"]}
                singleDelete={true}
                achivementLink={`/page/studentProgress`}
                hasAchivement={true}
                selectFilter={true}
                selectFilterArray={teachers}
                selectFilterItemKey={"Id"}
                selectFilterItemValue={"firstName"}
                onSelectFilter={(v) => onSelectSearchFilter(v)}
                onChangePage={() => console.log("page")}
                onSearch={(e) => onSearchValue(e)}
                onDelete={(v) => handleDelete(v)}

                removeEditButton={true}
            ></GenericTable>

            <div >
                <ModalsHoc open={openModal} title="Add New Student" onShow={(bool: boolean) => setOpenModal(bool)}>
                    <CampaignStudentFormInput submit={() => console.log("add")} importBtn={false}></CampaignStudentFormInput>
                </ModalsHoc>
            </div>
            <div>
                <ModalsHoc open={openModalEdit} title="Edit Student" onShow={(bool: boolean) => setOpenModalEdit(bool)}>
                    <CampaignStudentFormInput submit={() => console.log("edit")} importBtn={false} value={editedForm}></CampaignStudentFormInput>
                </ModalsHoc>
            </div>
        </div>
    )
}

export default CampiagnStudent
