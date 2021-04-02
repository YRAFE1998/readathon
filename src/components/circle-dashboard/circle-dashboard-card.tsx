import React, { useEffect, useRef, useState } from 'react'
import { CardStyles } from './circle-dashboard-card.styles'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
interface CircleDashboardCardInterface {
    header?: string;
    form?: string;
    to?: string;
    children?: any;
    progress?: any;

}
const CircleDashboardCard = (props: CircleDashboardCardInterface) => {

    return (
        <div>
            <CardStyles>
                <p className="header">{props.header}</p>
                <p className="sub-header">{props.form} of {props.to}</p>

                <div className="text-center m-b-40">
                    <CircularProgressbar value={props.progress} text={`${Math.round(props.progress)}%`}
                        styles={{
                            root: {
                                width: "127px",
                                height: "127px",
                            },
                            path: {
                                stroke: `rgba(241, 150, 58)`,
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: 'rgb(225, 228, 232)',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            text: {
                                fill: '#576169',
                                fontSize: '26px',
                                fontFamily: "SourceSansPro",
                                lineHeight: "1.33",
                                letterSpacing:" -0.9px",
                                textAlign: "center",
                              
                            },
                            background: {
                                fill: '#3e98c7',
                            },
                        }}
                    />
    <div className="complated">Complated</div>
                </div>
            </CardStyles>
        </div>
    )
}

export default CircleDashboardCard
