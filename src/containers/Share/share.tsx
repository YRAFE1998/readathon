import React, { useEffect, useState } from 'react'

import { Helmet } from "react-helmet";

import { useParams } from 'react-router';
import { FacebookShareButton } from 'react-share';
export const Share = () => {
    const [editorState, setEditorState] = useState<any>();
    const params = useParams();
    useEffect(() => {
        document.title = "My Title"
    })
    return (
        <>
            <div >
                <FacebookShareButton className="item" id="share-btn" url="http://40.74.38.157:8080/page/share" >
                    <span style={{ fontWeight: 600 }}>Share</span>
                </FacebookShareButton >

                <Helmet>
                    <title>My Title</title>
                    <meta name="description" content="Helmet application" />
                </Helmet>
            </div>
        </>
    )
}


export default Share
