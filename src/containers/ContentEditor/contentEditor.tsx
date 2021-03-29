import React, { useState } from 'react'
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { RedBackgroundButton } from '../../components/Lables/redBackgroundButton';

const ContentEditor = () => {
    const [content, setContent] = useState<any>();
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

                <div className="text-center" style={{margin: "20px 0px"}}>
                    <RedBackgroundButton style={{width: "200px"}}>Save Changes</RedBackgroundButton>
                </div>
        </div>
    )

}

export default ContentEditor
