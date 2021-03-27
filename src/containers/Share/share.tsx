import React, { useEffect, useState } from 'react'


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
                <FacebookShareButton className="item" id="share-btn" url="https://giving-tree-dea70.web.app/?name=eslam&title=hello" >
                    <span style={{ fontWeight: 600 }}>Share</span>
                </FacebookShareButton >

                
            </div>
        </>
    )
}


export default Share
