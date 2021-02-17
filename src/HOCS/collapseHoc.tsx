import React, { useState, useEffect, useRef } from 'react'
import { Collapse } from 'react-bootstrap';
import { IconsMinus } from '../assets/icons/Main/icons-minus';
import { IconsPlus } from '../assets/icons/Main/icons-plus';
import { ThemeColor } from '../utils/colors';
import { CollapseStyles } from './collapseHoc.styles';

export const CollapseHoc = (props: any) => {
    const ref = useRef<HTMLDivElement>(null)
    const { children, header, onClickNextStep } = props;
    const { open, complate, borderLess, nextStep, step } = props?.stepConfig
    console.log(props);

    const color = () => {
        return complate ? ThemeColor.red : ThemeColor.grayColor
    }
    const [openCollapse, setOpenCollapse] = useState(open);
    useEffect(() => {
        setOpenCollapse(open)
    }, [open])

    return (
        <CollapseStyles>
            <div className="d-flex">
                {
                    !!step && <div className="stepContainer">
                        <div className="stepCounter"
                            style={{
                                borderColor: complate ? ThemeColor.red : ThemeColor.borderColor,
                                color: color()
                            }}>
                            {step}</div>
                        <div className="border"
                            style={{
                                borderInlineStart: borderLess && "none",
                                borderInlineStartColor: complate ? ThemeColor.red : ThemeColor.borderColor,
                            }}></div>
                    </div>

                }
                <div className="w-100">
                    <div className={"collapseHeader"}>
                        <div className={"header"} style={{ color: color() }}>
                            {header}
                        </div>
                        <div onClick={() => setOpenCollapse(!openCollapse)}>
                            {openCollapse ? <IconsMinus color={color()} /> : <IconsPlus color={color()} />}
                        </div>
                    </div>
                    <div>
                        <Collapse in={openCollapse}  >

                            <div id={step} ref={ref}>{children}
                                {!!step && nextStep && <div className={"nextStep"} onClick={() => onClickNextStep()}>Next</div>}
                            </div>


                        </Collapse>

                    </div>

                </div>



            </div>

        </CollapseStyles>
    )
}
