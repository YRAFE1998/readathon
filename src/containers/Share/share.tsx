import React, { useState } from 'react'

import Draft from 'react-wysiwyg-typescript'

import { FacebookShareButton, FacebookIcon } from "react-share";
export const Share = () => {
    const [editorState, setEditorState] = useState<any>()
    return (
        <>
            <div >
                <FacebookShareButton title={editorState} id="share-btn" color={"blue"} url="http://40.74.38.157:8080/#/page/students" >
                    asdasd
                </FacebookShareButton >
                <Draft
                    editorState={editorState}
                    onEditorStateChange={(editorState: any) => { setEditorState(editorState) }}
                />
            </div>
        </>
    )
}


export default Share
