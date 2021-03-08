import React from 'react'
import { CustomsTopLabelStyles } from './customsTopLabel.styles'
interface CustomsTopLabelInterface {
    header?: string;
    data?: any[]
}
const CustomsTopLabel = (props: CustomsTopLabelInterface) => {
    return (
        <CustomsTopLabelStyles>
            <h4 className="header">{props.header}</h4>
            {
                props.data?.map((v) => {
                    return <div className="d-flex justify-content-between align-items-center">
                        <p className={"name"}>{v.name}</p>
                        <p className={"value"}>{v.value}</p>


                    </div>
                })
            }
        </CustomsTopLabelStyles>
    )
}

export default CustomsTopLabel
