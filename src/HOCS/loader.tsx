import React, { useState, useEffect, useRef } from 'react'
import { LoaderStyles } from './loader.styles'
export var showLoaderReq: any;

const Loader = (props: any) => {
    const [showLoader, setShowLoader] = useState(false);
    showLoaderReq = (bool: boolean) => setShowLoader(bool);
    const loaderRef = useRef<HTMLDivElement>(null)

    var body = document.body,
        html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    useEffect(() => {
        if (showLoader && loaderRef.current) {
            loaderRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
              });
        }
        setShowLoader(showLoader)
    }, [showLoader])

    return (
        <>
            <div >
                
                {showLoader && <LoaderStyles ref={loaderRef}  style={{ height: height, background: "#00000033" }}>
                    <div className="loader"></div>
                </LoaderStyles>}
                {props.children}
            </div>
        </>
    )
}

export default Loader
