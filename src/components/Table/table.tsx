import React, { useEffect, useRef, useState } from 'react'
import { Dropdown, Form, FormCheck, Table } from 'react-bootstrap'
import ModalsHoc from '../../HOCS/modalsHoc'
import { TeacherForm } from '../../interfaces/teacherForm'
import { RedBackgroundButton } from '../Lables/redBackgroundButton'
import { RedOutlineButton } from "../Lables/red-outlline-button";
import { TableStyles, DeleteModalStyle, PaginationStyles } from './table.styles'
import { ThemeColor } from '../../utils/colors'
import IconsArrowLeft from '../../assets/icons/Main/icons-arrow-left'
import IconsArrowRight from '../../assets/icons/Main/icons-arrow-right'
import { useHistory } from 'react-router-dom'
import { DeleteIcon } from '../../assets/icons/Main/deleteIcon'
import SelectFilter from '../Select/selectFilter'
import { GenericTableInterface } from '../../interfaces/genericTableInterface'
import * as _ from "lodash";
import { pageNumbers } from '../../utils/pageShowesNumbers'
import DeleteModalContent from '../Forms/deleteModalContent'
import { handleSortGenirec } from '../../utils/sort'
import numeral from "numeral";
const GenericTable = (props: GenericTableInterface) => {
    const [page, setPage] = useState(1)
    const [chunkedData, setChunkedData] = useState<any>();
    const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false)
    const [pageSize, setPageSize] = useState(10)
    const pageSizes = [10, 50, 100]
    const [selected, setSelected] = useState([])
    const history = useHistory();
    const [selectedSingleDelete, setSelectedSingleDelete] = useState("");
    useEffect(() => {
        setChunkedData(_.chunk(props.data, pageSize))
        window.scrollTo(0, 0)
    }, [props.data, pageSize])

    useEffect(() => { window.scrollTo(0, 0) }, [page])

    const handleExceptItems = (key: any) => !props?.itemsExceptions?.some((v: any) => v == key);

    const handelTabelTitle = (string: string) =>
        string.replace(/([A-Z])/g, ' $1').trim().charAt(0).toUpperCase() + string.replace(/([A-Z])/g, ' $1').trim().slice(1);

    const handelArrayPaginationChunckedLength = () =>
        new Array(Math.ceil((props?.data?.length || 0) / pageSize)).fill(0)

    const handleChangePage = (page: number) => {
        setPage(page);
        props.onChangePage(page);
    }
    const handleSort = (direction: string, value: any) => {
        let newData = handleSortGenirec(direction, value, JSON.parse(JSON.stringify(props?.data))) || []
        setPage(1);
        setChunkedData(_.chunk(newData, pageSize))
    }

    const renderPagination = () => {
        return <PaginationStyles className="m-t-40 d-flex justify-content-center ">
            <div className="d-md-flex justify-content-center containerPagination ">
                <button className="btn-prev-next" disabled={!!(page == 1)}
                    onClick={() => handleChangePage(page - 1)} >
                    <span>
                        <IconsArrowLeft color={!!(page == 1) ? "#999" : ThemeColor.red} />
                    </span>
                    Prev
                    </button>
                {pageNumbers(props?.data, page, pageSize).map((v: any, i: number) => {
                    return <>
                        {
                            Number.isInteger(v) ?
                                <div className={`pagination ${v == page && 'active'}`}
                                    onClick={() => handleChangePage(v)}>{v}
                                </div>
                                :
                                <div className={`pagination`}>{v}</div>
                        }
                    </>
                })}
                <button className="btn-prev-next next" onClick={() => handleChangePage(page + 1)} disabled={!!(page == handelArrayPaginationChunckedLength().length)}>
                    Next <span><IconsArrowRight
                        color={!!(page == handelArrayPaginationChunckedLength().length) ? "#999999" : ThemeColor.red} />
                    </span>
                </button>
                <Dropdown>
                    <Dropdown.Toggle className="btn-prev-next" variant="success" id="dropdown-basic">
                        {pageSize} per page </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {pageSizes.map((v: number) =>
                            <Dropdown.Item onClick={() => { setPageSize(v); setPage(1) }}>{v}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </PaginationStyles>
    }
    const renderModal = () => (
        <ModalsHoc title={`Delete ${selected.length || 1} Items`} open={openDeleteConfirmation} onShow={() => setOpenDeleteConfirmation(false)}>
            <DeleteModalContent
                number={selected.length || (selectedSingleDelete ? 1 : 0)}
                singleDelete={!!props.singleDelete}
                onClose={() => setOpenDeleteConfirmation(false)}
                onClick={() => {
                    if (props.onDelete) {
                        if (props.singleDelete) {
                            props?.onDelete(selectedSingleDelete);
                        } else {
                            props?.onDelete(selected);
                        }
                        setOpenDeleteConfirmation(false)
                    }

                }}></DeleteModalContent>
        </ModalsHoc>
    )

    const defualtChecked = (item: any) => {
        return !!selected.filter((v) => v[props.keyItem || ""] === item[props.keyItem || ""]).length
    }

    return (
        <div>
            <TableStyles>
                <div className="search-container-div d-md-flex justify-content-between align-items-center">
                    <div className="d-md-flex align-items-center">
                        {
                            !props.removeSearch &&
                            <div className="search-container">
                                <input className="" type="search" name="search" id="search" placeholder="search " onChange={(e) => { props.onSearch(e.target.value); setPage(1) }} />
                                <i className="fa fa-search"></i>
                            </div>
                        }
                        {
                            props.selectFilter && <div className="mr-20" style={{ marginInlineStart: props.removeSearch ? "0px" : "" }}>
                                <SelectFilter array={props.selectFilterArray}
                                    keyItem={props.selectFilterItemKey}
                                    unAssign={!!!props.removeUnAssignSelectFiler}
                                    onChange={(v: any) => {
                                        props.onSelectFilter && props.onSelectFilter(v);
                                        setPage(1);
                                    }}
                                    ItemValue={props.selectFilterItemValue}
                                ></SelectFilter></div>
                        }
                    </div>
                    <div className="d-md-flex">

                        {
                            !props.readOnly && props.multipleAssign && <div>
                                <RedBackgroundButton style={{ opacity: !selected.length ? "0.7" : "1" }} className="delete-btn" onClick={() => selected.length && props.onAssign && props.onAssign(selected)}>Assign</RedBackgroundButton>
                            </div>
                        }
                        {
                            !props.readOnly && !props.singleDelete && <div>
                                <RedOutlineButton style={{ opacity: !selected.length ? "0.7" : "1" }}
                                    className="delete-btn" onClick={() => selected.length && setOpenDeleteConfirmation(true)}>Delete</RedOutlineButton>
                            </div>
                        }
                    </div>
                </div>

                <Table responsive className="table">
                    <thead>
                        <tr className="tr-head">
                            {!props.readOnly && <th>Del</th>}
                            {!!props?.data?.length && Object.entries(props?.data?.[0]).map(([v]) => handleExceptItems(v) &&
                                <th>
                                    <div className="d-flex justify-content-between align-items-center">
                                        {handelTabelTitle(v)}
                                        <div className="m-i-s-20">
                                            <i className="fa fa-sort-up sortIcon d-block" onClick={() => handleSort("asc", v)}></i>
                                            <i className="fa fa-sort-down sortIcon d-block" onClick={() => handleSort("desc", v)}></i>

                                        </div>

                                    </div>

                                </th>)}
                            {!!props.hasDashboardView && <th>Dashboard</th>}
                            {!!props.hasManageView && <th>Manage</th>}
                            {!!props.hasAchivement && <th>Log Achievment</th>}
                            {!props.readOnly && !props.removeEditButton && <th>Edit</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {chunkedData?.[page - 1]?.map((item: any) => {
                            return <tr className="tr-body">
                                {
                                    !props.readOnly && !props.singleDelete && <td>  <FormCheck
                                        color={"red"}
                                        checked={defualtChecked(item)}
                                        type="checkbox"
                                        id={`default-checkbox`}
                                        onChange={(e) => {
                                            const array = JSON.parse(JSON.stringify(selected));
                                            if (e.target.checked) {
                                                array.push(item);
                                            } else {
                                                const index = array.findIndex((v: any) => v[props.keyItem || ""] == item[props.keyItem || ""])
                                                array.splice(index, 1);
                                            }
                                            setSelected(array)
                                        }}
                                    />
                                    </td>
                                }
                                {
                                    !props.readOnly && props.singleDelete &&
                                    <td><div onClick={() => { setOpenDeleteConfirmation(true); setSelectedSingleDelete(item[props.keyItem || ""]) }}><DeleteIcon /></div></td>
                                }
                                {Object.entries(item).map(([key, val]) => handleExceptItems(key) &&
                                    <td style={{ color: key == 'status' ? ThemeColor.successColor : "" }}>
                                        {val ? JSON.parse(JSON.stringify(typeof val == "number" ? numeral(val).format("0,0") : val)) : "___"}</td>)}
                                {!!props.hasDashboardView && <td className="td-link" style={{ color: ThemeColor.red }} onClick={() => history.push(`${props.dashboardLink}/${item[props.keyItem || ""]}`)}>View</td>}
                                {!!props.hasManageView && <td className="td-link" style={{ color: ThemeColor.successColor }} onClick={() => history.push(`${props.mangeLink}/${item[props.keyItem || ""]}`)}>Manage</td>}
                                {!!props.hasAchivement && <td className="td-link" style={{ color: ThemeColor.successColor }} onClick={() => history.push(`${props.achivementLink}/${item[props.keyItem || ""]}?name=${item.firstName}&email=${item.email}`)}>View</td>}
                                {!props.readOnly && !props.removeEditButton && <td className="edit-btn td-link" onClick={() => props.onEdit && props.onEdit(item)}>Edit</td>}

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
