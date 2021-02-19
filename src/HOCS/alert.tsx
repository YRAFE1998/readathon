import React, { useEffect, useState } from 'react'
import { Alert } from '../interfaces/alert'

import { AlertStyle } from './alert.style'
export var showToast: any;
const AlertComponent = (props: Alert) => {
    const [show, setShow] = useState<Alert>({});
    showToast = (alert: Alert) => setShow(alert);
    useEffect(() => {
        let timer1 = setTimeout(() => setShow({ ...show, open: false }), 2000)
        return () => {
            clearTimeout(timer1)
        }
    }, [show])
    
    return (
        show.open ? <AlertStyle>
            <div className="alertContainer" style={{ background: show.color || "Green" }}>
                <div className="header"><h4>{show.header}</h4></div>
                <div className="content">{show.message}</div>
            </div>

            {props.childern}

        </AlertStyle>
            : <></>
    )
}

export default AlertComponent