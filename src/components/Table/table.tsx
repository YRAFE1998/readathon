import React, { useEffect, useState } from 'react'
import { Form, FormCheck, Table } from 'react-bootstrap'
import ModalsHoc from '../../HOCS/modalsHoc'
import { TeacherForm } from '../../interfaces/teacherForm'
import { RedBackgroundButton } from '../Lables/redBackgroundButton'
import { RedOutlineButton } from "../Lables/red-outlline-button";
import { TableStyles, DeleteModalStyle, PaginationStyles } from './table.styles'
import { ThemeColor } from '../../utils/colors'
import IconsArrowLeft from '../../assets/icons/Main/icons-arrow-left'
import IconsArrowRight from '../../assets/icons/Main/icons-arrow-right'
import { useHistory } from 'react-router-dom'

const GenericTable = (props: any) => {
    const [page, setPage] = useState(1)
    const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false)
    const [selected, setSelected] = useState([])
    const history = useHistory();
    const handleExceptItems = (key: any) => {
        return !props?.itemsExceptions?.some((v: any) => v == key);
    }
    const handelTabelTitle = (string: string) => {
        return string.replace(/([A-Z])/g, ' $1').trim().charAt(0).toUpperCase() + string.replace(/([A-Z])/g, ' $1').trim().slice(1);
    }
    const handelArrayPaginationChunckedLength = () => {
        return new Array(Math.ceil(props.data.length / 10)).fill(0)
    }
    const handleChangePage = (page: number) => {
        setPage(page);
        props.onChangePage(page);
    }

    const renderPagination = () => {
        return <PaginationStyles className="m-t-40 d-flex justify-content-center ">
            <div className="d-flex justify-content-center containerPagination ">
                <button className="btn-prev-next" disabled={!!(page == 1)} onClick={() => handleChangePage(page - 1)} > <span><IconsArrowLeft color={!!(page == 1) ? "#999" : ThemeColor.red} /></span> Prev </button>
                {handelArrayPaginationChunckedLength().map((v: any, i: number) => {
                    return <div className={`pagination ${i + 1 == page && 'active'}`} onClick={() => handleChangePage(i + 1)}>{i + 1}</div>
                })}
                <button className="btn-prev-next" onClick={() => handleChangePage(page + 1)} disabled={!!(page == handelArrayPaginationChunckedLength().length)}>
                    Next <span><IconsArrowRight
                        color={!!(page == handelArrayPaginationChunckedLength().length) ? "#999999" : ThemeColor.red} />
                    </span>
                </button>
            </div>

        </PaginationStyles>
    }
    const renderModal = () => (
        <ModalsHoc title="Delete Alert" open={openDeleteConfirmation} onShow={() => setOpenDeleteConfirmation(false)}>
            <DeleteModalStyle>
                <p className="delete-content">Are You Sure You Wont To Delete ?</p>

                <div className="d-flex justify-content-around">
                    <div><RedBackgroundButton
                        onClick={() => { props.onDelete(selected); setOpenDeleteConfirmation(false) }}>Submit</RedBackgroundButton></div>
                    <div><RedOutlineButton onClick={() => setOpenDeleteConfirmation(false)}>Cancel</RedOutlineButton></div>
                </div>
            </DeleteModalStyle>
        </ModalsHoc>
    )

    return (
        <div>
            <TableStyles>

                <div className="search-container-div d-flex justify-content-between align-items-center">
                    <div className="search-container">
                        <input className="" type="search" name="search" id="search" placeholder="search " onChange={(e) => props.onSearch(e.target.value)} />
                        <i className="fa fa-search"></i>
                    </div>
                    <div>
                        <RedBackgroundButton onClick={() => setOpenDeleteConfirmation(true)}>Delete</RedBackgroundButton>
                    </div>
                </div>
                <Table responsive="md" className="table">
                    <thead>
                        <tr className="tr-head">
                            {!props.readOnly && <th>Del</th>}
                            {Object.entries(props.data[0]).map(([v]) => handleExceptItems(v) && <th>{handelTabelTitle(v)}</th>)}
                            {!!props.hasDashboardView && <th>Dashboard</th>}
                            {!!props.hasManageView && <th>Manage</th>}
                            {!!props.hasAchivement && <th>Log Achievment</th>}
                            {!props.readOnly && <th>Edit</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((item: any) => {
                            return <tr className="tr-body">
                                {
                                    !props.readOnly && <td>  <FormCheck
                                        color={"red"}
                                        type="checkbox"
                                        id={`default-checkbox`}
                                        onChange={(e) => {
                                            const array = JSON.parse(JSON.stringify(selected));
                                            if (e.target.checked) {
                                                array.push(item);
                                            } else {
                                                const index = array.findIndex((v: any) => v[props.keyItem] == item[props.keyItem || ""])
                                                array.splice(index, 1);
                                            }
                                            setSelected(array)
                                        }}
                                    />
                                    </td>
                                }
                                {Object.entries(item).map(([key, val]) => handleExceptItems(key) &&
                                    <td style={{ color: key == 'status' ? ThemeColor.successColor : "" }}>
                                        {JSON.parse(JSON.stringify(val))}</td>)}
                                {!!props.hasDashboardView && <td style={{ color: ThemeColor.red }}>View</td>}
                                {!!props.hasManageView && <td style={{ color: ThemeColor.successColor }} onClick={() => history.push(`${props.mangeLink}/${item[props.keyItem]}`)}>Manage</td>}
                                {!!props.hasAchivement && <td style={{ color: ThemeColor.successColor }} onClick={() => history.push(`${props.achivementLink}/${item[props.keyItem]}`)}>View</td>}
                                {!props.readOnly && <td className="edit-btn" onClick={() => props.onEdit(item)}>Edit</td>}

                            </tr>

                        })}

                    </tbody>
                </Table>
                {renderPagination()}
                {renderModal()}
            </TableStyles >


        </div>
    )
}

export default GenericTable
