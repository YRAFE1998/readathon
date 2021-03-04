import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import IconPath from '../../assets/icons/Main/path'
import { RedBackgroundButton } from '../Lables/redBackgroundButton'
import { SelectFilterStyleComponent } from './selectFilter.style'


export interface SelectFilterInterface {
    array?: any[];
    onChange: (params: any) => void;
    intialSelect?: any[];
    keyItem?: string;
    ItemValue?: string;
}
const SelectFilter = (props: SelectFilterInterface) => {
    const [selected, setSelected] = useState([])
    const [defulatArray, setDefualtArray] = useState<any>([]);
    const [defulatOrginalArray, setOrignalDefualtArray] = useState<any>([])

    useEffect(() => {
        if (props.array?.length) {
            setDefualtArray(props.array || []);
            setOrignalDefualtArray(props.array || [])
        }
    }, [props.array])
    const onSearch = (value: string) => {
        if (value) {
            setDefualtArray(defulatOrginalArray.slice().filter((v: any) => v[props.ItemValue || ""].toUpperCase().includes(value.toUpperCase())));
        } else {
            setDefualtArray(defulatOrginalArray)
        }
    }
    return (
        <div>
            <SelectFilterStyleComponent>

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="filter-placeholder d-flex justify-content-between align-items-center">
                        <p>Filter ...</p>  <span><IconPath></IconPath></span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <div className="filter-search-container">
                            <div className="d-flex search-icon align-items-center">
                                <input type="search" name="search" id="search" placeholder="Search" onChange={(e) => onSearch(e.target.value)} />
                                <i className="fa fa-search"></i>
                            </div>

                        </div>
                        <div className="items-container">
                            {
                                defulatArray?.map((v: any) => {
                                    return <div className="d-flex align-items-center item-filter">
                                        <label htmlFor="ch">
                                            <input type="checkbox" id="ch"
                                                onChange={(e) => {
                                                    const customArray = JSON.parse(JSON.stringify(selected));
                                                    if (e.target.checked) {
                                                        customArray.push(v);
                                                    } else {
                                                        const index = customArray.findIndex((v: any) => v[props.keyItem || ""] == v[props.keyItem || ""])
                                                        customArray.splice(index, 1);
                                                    }
                                                    setSelected(customArray)
                                                }}
                                            /><span className="label-name">{v[props.ItemValue || ""]}</span></label>
                                    </div>
                                })
                            }
                        </div>
                        <div className="border-bottom"></div>
                        <Dropdown.Item className="d-flex justify-content-center" >
                            <RedBackgroundButton className="filter-btn" onClick={() => props.onChange(selected)}>Filter</RedBackgroundButton>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </SelectFilterStyleComponent>
        </div>
    )
}

export default SelectFilter
