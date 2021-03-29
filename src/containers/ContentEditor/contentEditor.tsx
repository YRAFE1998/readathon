import React, { useState } from 'react'
import { useParams } from 'react-router';
import { FacebookShareButton } from 'react-share';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { RedOutlineButton } from '../../components/Lables/red-outlline-button';
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';
import { baseURL } from '../../utils/baseUrl';

const ContentEditor = () => {
    const [content, setContent] = useState<any>();
    const params = useParams<any>();
    const campaignId = params.id;
    const studentId = params.studentId;

    return (
        <div>
            <SunEditor
                onChange={(e) => setContent(e)}
                setOptions={{
                    showPathLabel: false,
                    charCounter: true,
                    maxCharCount: 720,
                    width: 'auto',
                    height: 'auto',
                    minHeight: '60vh',
                    buttonList: [
                        ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                        ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                        ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print',]
                    ],
                }}
                showToolbar={true} />

            <div className="container">
                <div className="d-flex justify-content-center align-items-center" >
                    <div><RedBackgroundButton style={{ width: "200px" }}>Save Changes</RedBackgroundButton></div>

                    <div><FacebookShareButton className="shareitemStu" id="share-btn" url={`${baseURL}/#/donation?${`name=${''}&`}${`image=${baseURL}/${""}&`}${`campaignId=${campaignId}&`}${`studentId=${studentId}`}`} >
                        <span style={{ fontWeight: 600, textAlign: "center", width: "100%" }}> <RedOutlineButton style={{ width: "200px" }} >Share Link</RedOutlineButton> </span>
                    </FacebookShareButton ></div>
                </div>
            </div>
        </div>
    )

}

export default ContentEditor
