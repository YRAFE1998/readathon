import React, { useState, useEffect, useRef } from 'react'
import { LoaderStyles } from './loader.styles'
export var showLoaderReq: any;

const Loader = (props: any) => {
    const [showLoader, setShowLoader] = useState(false);
    showLoaderReq = (bool: boolean) => setShowLoader(bool);

    useEffect(() => {
        if (showLoader) {
            window.scrollTo(0, 0)
        }
        setShowLoader(showLoader)
    }, [showLoader])

    return (
        <>
            <div >

                {showLoader &&
                    <LoaderStyles style={{ background: "#00000033" }}>
                        <div className="loader"></div>
                    </LoaderStyles>
                }
                {props.children}
            </div>
        </>
    )
}

export default Loader
