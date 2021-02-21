import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { TeacherForm } from '../../interfaces/teacherForm'
import { TableStyles } from './table.styles'

const GenericTable = (props: any) => {
    const [page, setPage] = useState(1)

    const handelTabelTitle = (string: string) => {

        return string.replace(/([A-Z])/g, ' $1').trim().charAt(0).toUpperCase() + string.replace(/([A-Z])/g, ' $1').trim().slice(1);
    }

    return (
        <div>
            <TableStyles>

                <div className="search-container-div">
                    <div className="search-container">
                        <input type="search" name="search" id="search" placeholder="search " />
                        <i className="fa fa-search"></i>
                    </div>
                </div>
                <Table responsive="md" className="table">
                    <thead>
                        <tr className="tr-head">
                            <th>Del</th>
                            {Object.entries(props.data[0]).map(([v]) => <th>{handelTabelTitle(v)}</th>)}
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((item: TeacherForm) => {
                            return <tr className="tr-body">
                                <td> <i className="fa fa-trash-alt" ></i></td>
                                {Object.entries(item).map(([, val]) => <td>{val}</td>)}
                                <td className="edit-btn">Edit</td>
                            </tr>

                        })}

                    </tbody>
                </Table>

                <div className="d-flex justify-content-center m-t-40">
                    {new Array(Math.ceil(props.data.length / 10)).fill(0).map((v: any, i: number) => {
                        return <div className={`pagination ${i + 1 == page && 'active'}`} onClick={() => setPage(i + 1)}>{i + 1}</div>
                    })}
                </div>
            </TableStyles>
        </div>
    )
}

export default GenericTable
