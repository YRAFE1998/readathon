import React, {useState} from 'react'
import LogAtchivementFormInput from '../../components/Forms/logAtchivementFormInput'
import { PageTitle } from '../../components/Lables/pageTitle'
import { RedOutlineButton } from '../../components/Lables/red-outlline-button'
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton'
import { SubTitlePage } from '../../components/Lables/subTitlePage'
import GenericTable from '../../components/Table/table'
import ModalsHoc from '../../HOCS/modalsHoc'
import { studentProgresses } from '../../Mocks/studentProgress'


const StudentProgress = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <PageTitle>Student Progress</PageTitle>
                    <SubTitlePage>Osama Dawood(osama.dawood@gmail.com)</SubTitlePage>
                </div>
                <div>
                    <RedOutlineButton> Remove from Campaign</RedOutlineButton>
                    <RedBackgroundButton onClick={() => setOpenModal(true)}>Log Achievement</RedBackgroundButton>
                </div>

            </div>

            <GenericTable
                data={studentProgresses}
                keyItem="id"
                readOnly={true}
                itemsExceptions={["id"]}
                onChangePage={() => console.log("page")}
                onSearch={() => console.log("search")}
                selectFilter={true}
                selectFilterArray={[{name: "Reading", Id: "1"}, {name: "Donation", Id: "2"}]}
                selectFilterItemKey={"Id"}
                selectFilterItemValue={"name"}
                onSelectFilter={(v) => console.log(v)}
                removeUnAssignSelectFiler={true}
                removeSearch={true}


            ></GenericTable>


            <div >
                <ModalsHoc open={openModal} title="Log Achievement" onShow={(bool: boolean) => setOpenModal(bool)}>
                    <LogAtchivementFormInput submit={() => console.log("add")} importBtn={false}></LogAtchivementFormInput>
                </ModalsHoc>
            </div>
        </div>
    )
}

export default StudentProgress
